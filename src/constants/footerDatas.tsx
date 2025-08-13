
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { PiTiktokLogoThin } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { ContactItem, FollowUs, QuickLink } from "@/types/types";


export const quickLinks: QuickLink[] = [
  {
    title: "For Creator",
    url: "/creator"
  },
  {
    title: "For Agency",
    url: "/agency"
  },
  {
    title: "Service",
    url: "/service"
  },
  {
    title: "Portfolio",
    url: "/portfolio"
  },
];

export const creatorLink: QuickLink[] = [
  {
    title: "Contact Us",
    url: "/contact"
  },
  {
    title: "Blog",
    url: "/blog"
  },
  {
    title: "About Us",
    url: "/about"
  },
];

export const contactInfo: ContactItem[] = [
  {
    title: "+2123 654 7898",
    icon: <LuPhoneCall size={20} />
  },
  {
    title: "shamimnadir@example.com",
    icon: <FiMail size={20} />
  },
  {
    title: "Company Address",
    icon: <GrLocation size={20} />
  },
  {
    title: "Shamim Nader",
    icon: <FaRegUser size={20} />
  }
];

export const followUs: FollowUs[] = [
  {
    icon: <SlSocialFacebook size={20} />,
    url: "https://www.facebook.com/share/19b3DdSvMx/?mibextid=wwXIfr"
  },
  {
    icon: <SlSocialInstagram size={20} />,
    url: "https://www.instagram.com/thesocialchance?igsh=cW15MXhwZ21sOHFu&utm_source=qr"
  },
  {
    icon: <PiTiktokLogoThin size={20} />,
    url: "https://www.tiktok.com/@thesocialchance?_t=ZN-8yWcc2oq9LS&_r=1"
  },
]