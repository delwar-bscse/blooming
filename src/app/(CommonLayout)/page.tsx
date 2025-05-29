import ContactUsTelephone from "@/components/shared/ContactUsTelephone";
import DreamContent from "@/components/shared/DreamContent";
import FAQ from "@/components/shared/FAQ";
import NewBarandLooking from "@/components/shared/NewBarandLooking";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import HeroSection from "@/components/section/HeroSection";
import BloomSection from "@/components/section/BloomSection";
import CreatorAndBrands from "@/components/section/CreatorAndBrands";

export default function Home() {
  return (
      <main className="space-y-20">
        <div>
          <HeroSection />
        </div>
        <div>
          <CreatorAndBrands />
        </div>
        <div>
          <DreamContent />
        </div>
        <div>
          <NewBarandLooking />
        </div>
        <div>
          <BloomSection title='&quot;They Bloomed With Us. You Can Too!&quot;' des='Join the growing list of brands thriving with custom UGC content.' />
        </div>
        <div className="py-10">
          <WhyChooseUs />
        </div>
        <div className="py-10">
          <FAQ />
        </div>
        <div>
          <ContactUsTelephone title="Let’s find the best fit for your goals no pressure, just a chat"/>
        </div>
      </main>
  );
}
