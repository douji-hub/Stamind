import Image from "next/image";

const GoogleSignInButton = () => {
  return (
    <button className="flex items-center justify-center space-x-4 font-light h-[3rem] w-[22rem] bg-white text-[#0000008A] rounded-[0.25rem]">
      <span>
        <Image src="/google-Icon.png" alt="logo" width={25} height={25}></Image>
      </span>
      <p className="text-[1.25rem] font-normal">Continue with Google</p>
    </button>
  );
};

export default GoogleSignInButton;
