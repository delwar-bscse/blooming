import Link from "next/link";

{/* ---------------------------- Sign Up Form ---------------------------- */ }
const FinalMessage = () => {

  return (
    <div className="w-full max-w-[700px] mx-auto h-full flex text-center justify-center items-center">
      <div className="bg-[#56515166] px-2 sm:px-4 md:px-8 py-6 md:py-8 w-full rounded-4xl">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white pb-12">Payment UI is under construction</h2>
        <Link href="/" className="bg-white cursor-pointer text-[#565151] font-semibold py-3 px-8 rounded-md">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default FinalMessage;
