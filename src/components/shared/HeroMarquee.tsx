import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { myFetch } from "@/utils/myFetch";



const ReviewCard = ({
  videoUrl,
}: {
  videoUrl: string;
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
        <video autoPlay loop muted width="20" height="30" className='w-[200px]'>
          <source src={videoUrl ?? ""} type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </figure>
  );
};

export async function MarqueeDemo() {

  const res = await myFetch(`/upload-video?category=Landing Page`, {
    method: "GET",
  })
  const videoDatas: string[] = res?.data?.videos?.map((video: Record<string, unknown>) => video.url);


  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:60s]">
        {videoDatas?.map((videoUrl: string, index: number) => (
          <ReviewCard key={index} videoUrl={videoUrl} />
        ))}
      </Marquee>
    </div>
  );
}
