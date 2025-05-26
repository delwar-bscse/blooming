import { ReactNode } from 'react';
// import { StaticImageData } from 'next/image';


// -------------------------- Footer Data Type -------------------------- //
export type navItemsType = {
  id: number;
  title: string;
  url: string;
};

// -------------------------- Footer Data Type -------------------------- //
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

