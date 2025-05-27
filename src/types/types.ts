import { ReactNode } from 'react';
import { AnimationConfigWithData } from 'lottie-web';
// import { StaticImageData } from 'next/image';


// -------------------------- Why Chose Us Data Type -------------------------- //
export interface whyChoseUsType {
  id: number;
  title: string;
  description: string;
  image: AnimationConfigWithData['animationData'];
};

// -------------------------- FAQ Data Type -------------------------- //
export type faqType = {
  id: number;
  question: string;
  answer: string;
};

// -------------------------- Navbar Data Type -------------------------- //
export type navItemsType = {
  id: number;
  title: string;
  url: string;
};

// -------------------------- Contact Us Data Type -------------------------- //
export type ContactItem = {
  title: string;
  icon: ReactNode;
};

export type QuickLink = {
  title: string;
  url: string;
};

export type FollowUs = {
  icon: ReactNode;
  url: string;
};

