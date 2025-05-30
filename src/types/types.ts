import { ReactNode } from 'react';
import { AnimationConfigWithData } from 'lottie-web';
import { StaticImageData } from 'next/image';
// import { StaticImageData } from 'next/image';


// -------------------------- Packages Data Type -------------------------- //
export type blogDatasType ={
    id: number;
    title: string;
    des: string;
    image: StaticImageData;
}

// -------------------------- Packages Data Type -------------------------- //
export type packageDataType = {
    id: number;
    title: string;
    videos: number;
    des: string;
    image: StaticImageData;
    price: number;
    features: string[];
  };

// -------------------------- Subscription Data Type -------------------------- //
export interface subDataType {
  title: string;
  des: string;
  features: string[];
};

// -------------------------- Why Chose Us Data Type -------------------------- //
export interface counterDataType {
  id: number;
  number: string;
  title: string;
  bgColor: string;
};

// -------------------------- Why Chose Us Data Type -------------------------- //
export interface reviewDataType {
  id: number;
  txt: string;
  image: StaticImageData;
};

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

