import { starterDataType, TimelineItem } from "@/types/types";
import locationImg from "@/assets/common/locationImg.png";
import creatorImg from "@/assets/common/peopleImg.png";
import startedImg from "@/assets/common/StartedImg.png";

export const timelineData: TimelineItem[]   = [
  {
    year: "2019",
    title: "Studying Architecture And Corporate World",
    description: "We've Been Creating Together Since Childhood And Ever Since Then We've Been Drawing, Building, Imagining.",
    side: "right"
  },
  {
    year: "2021",
    title: "How UGC Changed Us",
    description: "We Discovered UGC And Instantly Became Addicted To Post Brand Deals. We Grew In Learning How To Script And Learned Content That Brands.",
    side: "left"
  },
  {
    year: "2024",
    title: "The Idea Sparks",
    description: "After Months Of Creating, We Know It Was Time To Start Something Bigger...",
    side: "right"
  },
  {
    year: "2025",
    title: "Launching The Agency",
    description: "We Launched 'Blooming Brands' Bringing Our Vision To Life With A Clear Mission...",
    side: "left"
  },
  {
    year: "2025",
    title: "Our Team Grows",
    description: "What Started As Two Sisters Is Now A Multi-Talented Creative Agency...",
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