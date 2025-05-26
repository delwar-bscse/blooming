
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { PiTiktokLogoThin } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { ContactItem, FollowUs, QuickLink } from "@/types/types";


export const quickLinks:QuickLink[] = [
  {
    title:"Service",
    url:"#"
  },
  {
    title:"Portfolio",
    url:"contact"
  },
  {
    title:"Contact Us",
    url:"#"
  },
  {
    title:"About Us",
    url:"#"
  },
  {
    title:"Blog",
    url:"#"
  },
];

export const creatorLink:QuickLink[] = [
  {
    title:"For Creator",
    url:"#"
  },
  {
    title:"For Agency",
    url:"#"
  },
  {
    title:"Contact Us",
    url:"#"
  },
  {
    title:"Blog",
    url:"#"
  },
  {
    title:"About Us",
    url:"#"
  },
];

export const contactInfo:ContactItem[] = [
  {
    title:"+2123 654 7898",
    icon: <LuPhoneCall size={20} />
  },
  {
    title:"info@example.com",
    icon: <FiMail size={20} />
  },
  {
    title:"Company Address",
    icon: <GrLocation size={20} />
  },
  {
    title:"Company Owner Name",
    icon: <FaRegUser size={20} />
  }
];

export const followUs:FollowUs[] = [
  {
    icon:<SlSocialFacebook size={20} />,
    url:"https://www.facebook.com"
  },
  {
    icon:<SlSocialInstagram size={20} />,
    url:"https://www.instagram.com"
  },
  {
    icon:<PiTiktokLogoThin size={20} />,
    url:"https://www.tiktok.com"
  },
]