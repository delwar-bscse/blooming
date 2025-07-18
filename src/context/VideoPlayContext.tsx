"use client";

import React, { createContext, useState, useContext } from 'react';

interface VideoContextType {
  currentlyPlaying: string | null;
  setCurrentlyPlaying: (id: string | null) => void;
  pauseVideo: (id: string) => void;
}

const VideoContext = createContext<VideoContextType>({
  currentlyPlaying: null,
  setCurrentlyPlaying: () => {},
  pauseVideo: () => {},
});

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

export const useVideoPlayer = () => {
  return useContext(VideoContext);
};