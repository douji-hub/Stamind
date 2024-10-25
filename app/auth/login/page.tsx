import Image from "next/image";

import LogInForm from "@/components/Login/LogInForm";

const page = () => {
  return (
    <div>
      <div className="h-[31.25rem] w-[37.5rem]">
        <div className="h-[8.75rem] w-full">
          <Image
            className="h-[2.125rem] w-[13.75rem] mx-auto text-center"
            alt="logo"
            width={100}
            height={100}
            src="/LoginLogo/logo1.svg"
          />
          <div className="mt-[3rem] text-center text-[3rem] font-bold">
            Unlock your workspace
          </div>
        </div>
        <LogInForm />
      </div>
    </div>
  );
};

export default page;
