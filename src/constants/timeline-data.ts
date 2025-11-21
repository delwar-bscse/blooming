import { starterDataType, TimelineItem } from "@/types/types";
import locationImg from "@/assets/common/locationImg.png";
import creatorImg from "@/assets/common/peopleImg.png";
import startedImg from "@/assets/common/StartedImg.png";

export const timelineData: TimelineItem[]   = [
  {
    year: "2011",
    title: "Where It Began",
    description: "We’ve always been creatives since childhood always painting, crafting, building. That passion led us to study architecture, but we quickly realized our creativity wasn’t meant to stay behind a desk.",
    side: "right"
  },
  {
    year: "2021",
    title: "Where Creativity Evolved",
    description: "Then we discovered UGC and everything clicked. We fell in love with creating content, learned to write converting scripts, and figured out exactly what brands need to grow.",
    side: "left"
  },
  {
    year: "2024",
    title: "Our Bigger Vision",
    description: "After months of creating and growing, we felt it, we knew it was time for something bigger.",
    side: "right"
  },
  {
    year: "2025",
    title: "Our Next Chapter",
    description: "We launched The Social Chance to take our creativity beyond ourselves, a space where creativity sparks real connections and meaningful impact.",
    side: "left"
  },
  {
    year: "Now",
    title: "Our Story Continues",
    description: "What began as two sisters chasing their dreams has grown into a thriving UGC agency, empowering brands and creators to collaborate and produce authentic, impactful content.",
    side: "right"
  }
];

export const starterData: starterDataType[] = [
  {
    id: 1,
    year: "2024",
    title: "Started",
    img: startedImg
  },
  {
    id: 2,
    year: "1500+",
    title: "Creator",
    img: creatorImg
  },
  {
    id: 3,
    year: "21",
    title: "Countries",
    img: locationImg
  },
];