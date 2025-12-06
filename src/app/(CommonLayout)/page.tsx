/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next'
import ContactUsTelephone from "@/components/shared/ContactUsTelephone";
import DreamContent from "@/components/shared/DreamContent";
import FAQ from "@/components/shared/FAQ";
import NewBarandLooking from "@/components/shared/NewBarandLooking";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import HeroSection from "@/components/section/HeroSection";
import BloomSection from "@/components/section/BloomSection";
import CreatorAndBrands from "@/components/section/CreatorAndBrands";
import { dreamContentDatas } from "@/constants/dreamContentDatas";
import { faqDatas } from '@/constants/faqDatas';
import { whyChoseUsDatas } from '@/constants/whyChoseUsDatas';

// import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // --- 1️⃣ Collect section data ---
  const metaDescriptions = {
    hero: "Whether you are here to create or collaborate, this is where it all starts. Creators and brands connect in a space for authentic collaboration and impactful UGC content.",
    createContent: "Trusted by 600+ leading creators and brands.",
    threeStep: "Only 3 steps to get your dream content quick and hassle-free.",
    newBrand: "New brand looking to be seen? Established brand ready to reignite the spark? We're here to make it all work for you.",
    whyChooseBrand: "Explore real feedback from real clients, then start your story with us.",
    theyBloom: "They Bloomed With Us Join the growing list of brands thriving with custom UGC content.",
  };

  // --- 2️⃣ Dynamic sections (Dream Content, Why Choose Us, FAQ) --- //
  const dreamContentList = dreamContentDatas
    ?.map((c: any) => c.title)
    ?.join(", ");

  const whyChooseUsList = whyChoseUsDatas
    ?.map((c: any) => c.title)
    ?.join(", ");

  const faqSummary = faqDatas
    ?.map((f: any) => f.question)
    ?.slice(0, 5)
    ?.join(", ");

  // --- 3️⃣ Create SEO-friendly description ---
  const seoDescription = [
    metaDescriptions.hero,
    metaDescriptions.createContent,
    metaDescriptions.threeStep,
    metaDescriptions.newBrand,
    metaDescriptions.whyChooseBrand,
    metaDescriptions.theyBloom,
    `Dream Content: ${dreamContentList}`,
    `Why Choose Us: ${whyChooseUsList}`,
    `FAQs: ${faqSummary}`,
  ]
    .filter(Boolean)
    .join(" ");

  // --- 4️⃣ Return Next.js Metadata ---
  return {
    title: "Home - The Social Chance",
    description: seoDescription,
    keywords: [
      "UGC",
      "UGC Content",
      "UGC Marketing",
      "Creator Collaboration",
      "Brand Partnerships",
      "Influencer Marketing",
      "User Generated Content",
    ],
  };
}

// --------------------------- Home Page ---------------------------//
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

      {/* Only 3 steps to get your dream content  */}
      <div className="py-10">
        <DreamContent />
      </div>

      {/* New brand looking to be seen  */}
      <div className="py-10">
        <NewBarandLooking />
      </div>

      {/*See Why Brands Choose The Social Chance Brands And Why You Should Too.*/}
      {/*"They Bloomed With Us. You Can Too!"*/}
      <div className="">
        <BloomSection title='&quot;They Bloomed With Us. You Can Too!&quot;' des='Join the growing list of brands thriving with custom UGC content.'  title2="See Why Brands Choose The Social Chance And Why You Should Too." des2="Explore real feedback from real clients then start your story with us."/>
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
        <ContactUsTelephone title="Let’s find the best fit for your goals no pressure, just a chat" />
      </div>
    </main>
  );
}
