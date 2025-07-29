/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Marquee } from "@/components/magicui/marquee";
import { myFetch } from "@/utils/myFetch";
import Image from "next/image";
import mobileFrame from "@/assets/common/mobileFrame.png";
import { useEffect, useRef, useState, memo } from "react";

interface Video {
  id: string;
  url: string;
  title?: string;
}

const VideoCard = memo(({ video }: { video: Video }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5, rootMargin: "0px 0px -50px 0px" }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
      console.log("👀 Observing video container:", currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
        console.log("🛑 Stopped observing video container:", currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const videoEl = containerRef.current.querySelector("video") as HTMLVideoElement | null;
    if (!videoEl) return;

    const handlePlay = async () => {
      try {
        await videoEl.play();
        console.log("🔊 Video playing:", video.url);
      } catch (err) {
        console.error("❌ Video play failed:", err);
      }
    };

    if (isInView) {
      handlePlay();
    } else {
      videoEl.pause();
      console.log("⏸️ Video paused:", video.url);
    }
  }, [isInView]);

  return (
    <figure className="relative cursor-pointer overflow-hidden">
      <div
        ref={containerRef}
        className="w-[120px] h-[220px] relative flex flex-col items-center"
      >
        <video
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0w-[120px] h-[220px] object-cover rounded-2xl"
          onError={() => console.error("Failed to load video", video.url)}
        >
          <source src={video.url} type="video/mp4" />
          Your browser does not support videos.
        </video>

        <Image
          src={mobileFrame}
          alt={`${video.title || "Video"} in mobile frame`}
          width={120}
          height={220}
          className="absolute inset-0 w-[120px] h-[220px] pointer-events-none"
          priority={false}
        />
      </div>
      <div
        style={{
          width: "90%",
          height: "2rem",
          margin: "0.5rem auto 0",
          backgroundColor: "hsl(0, 0%, 75%)",
          borderRadius: "50%",
          filter: "blur(0.6rem)",
          opacity: 0.7,
          transform: "scaleY(0.3)",
          display: "absolute",
          top: "0px"
        }}
      />
    </figure>
  );
});

VideoCard.displayName = "VideoCard";

export const MarqueeDemo = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const res = await myFetch("/upload-video?category=Landing Page");

        if (!res?.data?.videos) throw new Error("No videos found");
        setVideos(res.data.videos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!videos.length) return <EmptyState />;

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
      <Marquee pauseOnHover className="[--duration:180s]">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </Marquee>
    </div>
  );
};

// UI states
const LoadingState = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-pulse text-lg">Loading videos...</div>
  </div>
);

const ErrorState = ({ error }: { error: string }) => (
  <div className="flex justify-center items-center h-64 text-red-500">
    {error}
  </div>
);

const EmptyState = () => (
  <div className="flex justify-center items-center h-64 text-gray-500">
    No videos available
  </div>
);
