"use client";

import { useVideoPlayer } from '@/context/VideoPlayContext';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import mobileFrame from "@/assets/common/mobileFrame.png"
import { cn } from "@/lib/utils"

interface VideoViewProps {
  videoUrl: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  autoPlay?: boolean;
  videoId: string;
}

const VideoView: React.FC<VideoViewProps> = ({
  videoUrl,
  className = '',
  width = '182px',
  height = '340px',
  autoPlay = false,
  videoId,
}) => {
  const [showPlayButton, setShowPlayButton] = useState(!autoPlay);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { currentlyPlaying, setCurrentlyPlaying, pauseVideo } = useVideoPlayer();

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
    <div className='flex flex-col items-center'>
      <div
        className={`relative flex items-center justify-center overflow-hidden`}
        style={{ width, height }}
      >
        <video
          ref={videoRef}
          width="5"
          height="8"
          className={cn("absolute inset-0 w-[180px] h-[340px] object-fill rounded-4xl pl-1", className)}
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

        <Image
          src={mobileFrame}
          onClick={togglePlay}
          alt="Video Frame"
          width={188}
          height={340}
          className="absolute inset-0 w-[182px] h-[340px] object-fill"
        />

        {showPlayButton && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="absolute inset-0 m-auto transform-[translateY(-50%] w-14 h-14 bg-black/30 rounded-full flex items-center justify-center transition-all hover:bg-opacity-70 focus:outline-none"
            aria-label={currentlyPlaying === videoId ? 'Pause video' : 'Play video'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-8 h-8 ml-1"
            >
              <path d="M6 5v14l11-7z" />
            </svg>
          </button>
        )}
      </div>
      <div
        className="w-[90%] max-w-[182px] h-8 mx-auto mt-4 bg-gray-400 rounded-b-full blur-md shadow opacity-70"
        style={{
          borderBottomLeftRadius: '50%',
          borderBottomRightRadius: '50%',
          borderTopLeftRadius: '50%',
          borderTopRightRadius: '50%',
          transform: 'scaleY(0.3)'
        }}
      />

    </div>
  );
};

export default VideoView;