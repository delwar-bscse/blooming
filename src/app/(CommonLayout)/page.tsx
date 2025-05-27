import ContactUsTelephone from "@/components/shared/ContactUsTelephone";
import DreamContent from "@/components/shared/DreamContent";
import FAQ from "@/components/shared/FAQ";
import NewBarandLooking from "@/components/shared/NewBarandLooking";
import WhyChooseUs from "@/components/shared/WhyChooseUs";

export default function Home() {
  return (
      <main className="">
        <div>
          <DreamContent />
        </div>
        <div>
          <NewBarandLooking />
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
