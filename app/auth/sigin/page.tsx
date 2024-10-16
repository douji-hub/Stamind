import Image from "next/image";

import SigInForm from "@/components/SigIn/SigInForm";

const page = () => {
  return (
    <div>
      <div className=" h-[500px] w-[600px]">
        <div className="w-full h-[140px]  ">
          <Image
            className="w-[220px] h-[34px]  text-center mx-auto"
            alt="logo"
            width={100}
            height={100}
            src="/SiginLogo/logo1.svg"
          />
          <div className="text-[48px] mt-[48px] font-bold text-center ">
            Unlock your workspace
          </div>
        </div>
        <SigInForm />
      </div>
    </div>
  );
};

export default page;
