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
      <main className="space-y-40">
        <div className="">
          <HeroSection />
        </div>

        {/* trusted by 600+ leading creators and brands  */}
        <div>
          <CreatorAndBrands />
        </div>

        {/* only 3 steps to get your dream content  */}
        <div>
          <DreamContent />
        </div>

        {/* New brand looking to be seen  */}
        <div>
          <NewBarandLooking />
        </div>

        {/*See Why Brands Choose Blooming Brands And Why You Should Too.*/}
        {/*"They Bloomed With Us. You Can Too!"*/}
        <div>
          <BloomSection title='&quot;They Bloomed With Us. You Can Too!&quot;' des='Join the growing list of brands thriving with custom UGC content.' />
        </div>

        {/* Why Choose Us  */}
        <div className="py-10">
          <WhyChooseUs />
        </div>

        {/* FAQ  */}
        <div className="py-10">
          <FAQ />
        </div>

        <div>
          <ContactUsTelephone title="Let’s find the best fit for your goals no pressure, just a chat"/>
        </div>
      </main>
  );
}
