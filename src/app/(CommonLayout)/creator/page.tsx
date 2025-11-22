/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from 'next';
import ForCreator from '@/components/section/ForCreator';
import { turnCreativityDatas } from '@/constants/turnCreativity';

export async function generateMetadata(): Promise<Metadata> {

  let formatedData = "";
  turnCreativityDatas?.forEach((item: any) => {
    formatedData += item?.title + " " + item?.description + " ";
  });

  return {
    title: 'Creator - The Social Chance',
    description: formatedData,
  }
}

const Creator = () => {
  return (
    <div>
      <ForCreator />
    </div>
  )
}

export default Creator