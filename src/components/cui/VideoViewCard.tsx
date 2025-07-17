"use client";

import React, { useState, useRef, useContext, createContext, useEffect } from 'react';

const VideoContext = createContext<{
  currentlyPlaying: string | null;
  setCurrentlyPlaying: (id: string | null) => void;
  pauseVideo: (id: string) => void;
}>({
  currentlyPlaying: null,
  setCurrentlyPlaying: () => {},
  pauseVideo: () => {},
});

interface VideoViewCardProps {
  videoUrl: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  autoPlay?: boolean;
  videoId: string;
}

const VideoViewCard: React.FC<VideoViewCardProps> = ({
  videoUrl,
  className = '',
  width = '200px',
  height = '300px',
  autoPlay = false,
  videoId,
}) => {
  const [showPlayButton, setShowPlayButton] = useState(!autoPlay);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { currentlyPlaying, setCurrentlyPlaying, pauseVideo } = useContext(VideoContext);

  useEffect(() => {
    if (currentlyPlaying !== videoId) {
      setShowPlayButton(true);
    }
  }, [currentlyPlaying, videoId]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (currentlyPlaying === videoId) {
      // Pause current video
      videoRef.current.pause();
      setCurrentlyPlaying(null);
      setShowPlayButton(true);
    } else {
      // Pause any currently playing video first
      if (currentlyPlaying) {
        pauseVideo(currentlyPlaying);
      }
      // Play this video
      videoRef.current.play();
      setCurrentlyPlaying(videoId);
      setShowPlayButton(false);
    }
  };

  return (
    <div 
      className={`relative aspect-video flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <video
        ref={videoRef}
        loop
        width="20"
        height="30"
        className="w-[200px] object-cover"
        onClick={togglePlay}
        autoPlay={autoPlay}
        data-video-id={videoId}
        onPause={() => {
          setShowPlayButton(true);
        }}
      >
        <source src={videoUrl ?? ""} type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>

      {showPlayButton && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="absolute inset-0 m-auto w-16 h-16 bg-black/30 rounded-full flex items-center justify-center transition-all hover:bg-opacity-70 focus:outline-none"
          aria-label={currentlyPlaying === videoId ? 'Pause video' : 'Play video'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8 ml-1"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export const VideoPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const pauseVideo = (id: string) => {
    const videoElement = document.querySelector(
      `video[data-video-id="${id}"]`
    ) as HTMLVideoElement;
    videoElement?.pause();
    setCurrentlyPlaying(null);
  };

  return (
    <VideoContext.Provider value={{ currentlyPlaying, setCurrentlyPlaying, pauseVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoViewCard;