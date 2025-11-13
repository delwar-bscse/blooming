/* eslint-disable @typescript-eslint/no-explicit-any */
import ForCreator from '@/components/section/ForCreator';
import { turnCreativityDatas } from '@/constants/turnCreativity';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {

  const formatedData = turnCreativityDatas?.map((item: any) => { return { title: item?.title, description: item?.description} });

  const creatorsData = JSON.stringify(formatedData);

  return {
    title: 'Creator - The Social Chance',
    description: `${creatorsData}`,
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