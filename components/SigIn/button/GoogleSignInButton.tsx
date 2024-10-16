import Image from "next/image";

const GoogleSignInButton = () => {
  return (
    <button className="bg-white w-full h-[55px] rounded-[4px] flex items-center justify-center text-[#0000008A] space-x-4">
      <span>
        <Image src="/google-Icon.png" alt="logo" width={25} height={25}></Image>
      </span>
      <p className="text-[20px] font-bold">Continue with Google</p>
    </button>
  );
};

export default GoogleSignInButton;
