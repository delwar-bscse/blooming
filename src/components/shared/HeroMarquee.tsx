import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { myFetch } from "@/utils/myFetch";
// import VideoView from "../cui/ViewVideo";



const ReviewCard = ({
  video,
}: {
  video: Record<string, unknown>;
}) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      )}
    >
      <div className="">
        <video autoPlay={false} loop muted width="2" height="3" className='w-[200px] h-[320px] object-fill rounded-sm border-4 border-gray-400'>
          <source src={video.url as string ?? ""} type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        {/* <VideoView videoUrl={video.url as string} videoId={`video-${video.key as string}`} /> */}
      </div>
    </figure>
  );
};

export async function MarqueeDemo() {

  const res = await myFetch(`/upload-video?category=Landing Page`, {
    method: "GET",
  })
  const videoDatas: Record<string, unknown>[] = res?.data?.videos;
  // console.log(videoDatas)


  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:60s]">
        {videoDatas?.map((video: Record<string, unknown>, index: number) => (
          <ReviewCard key={index} video={video} />
        ))}
      </Marquee>
    </div>
  );
}
