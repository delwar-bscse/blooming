"use client"

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image, { StaticImageData } from "next/image";
import { heroSlideDatas } from "@/constants/heroSlideData";




// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = heroSlideDatas.slice(heroSlideDatas.length / 2);

const ReviewCard = ({
  img,
}: {
  img: StaticImageData;
}) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="">
        <Image className="" width="200" height="600" alt="" src={img} />
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {heroSlideDatas.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
