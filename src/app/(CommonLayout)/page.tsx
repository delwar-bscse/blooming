import ContactUsTelephone from "@/components/shared/ContactUsTelephone";
import DreamContent from "@/components/shared/DreamContent";
import FAQ from "@/components/shared/FAQ";
import NewBarandLooking from "@/components/shared/NewBarandLooking";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import HeroSection from "@/components/section/HeroSection";
import BloomSection from "@/components/section/BloomSection";
import CreatorAndBrands from "@/components/section/CreatorAndBrands";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home - The Social Chance',
}

export default function Home() {
  return (
      <main className="">
        <div className="">
          <HeroSection />
        </div>

        {/* trusted by 600+ leading creators and brands  */}
        <div className="py-10">
          <CreatorAndBrands />
        </div>

        {/* only 3 steps to get your dream content  */}
        <div className="py-10">
          <DreamContent />
        </div>

        {/* New brand looking to be seen  */}
        <div className="py-10">
          <NewBarandLooking />
        </div>

        {/*See Why Brands Choose Blooming Brands And Why You Should Too.*/}
        {/*"They Bloomed With Us. You Can Too!"*/}
        <div className="">
          <BloomSection title='&quot;They Bloomed With Us. You Can Too!&quot;' des='Join the growing list of brands thriving with custom UGC content.' />
        </div>

        {/* Why Choose Us  */}
        <div className="bg-[#D9E2CF] h-screen flex items-center justify-center">
          <WhyChooseUs />
        </div>

        {/* FAQ  */}
        <div className="py-20">
          <FAQ />
        </div>

        <div>
          <ContactUsTelephone title="Let’s find the best fit for your goals no pressure, just a chat"/>
        </div>
      </main>
  );
}
