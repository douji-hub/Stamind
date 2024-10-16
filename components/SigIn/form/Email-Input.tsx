import GoogleSigInButton from "@/components/SigIn/button/GoogleSignInButton";

const EmailInputSection = ({ inputEmail, setInputEmail, setIsRegister }) => {
  return (
    <div>
      <GoogleSigInButton />
      <div className="text-center my-[24px]">or</div>
      <div className="w-full">
        <div>
          <div className="mb-1 text-[13px]">Your Email</div>
          <div className="flex flex-row flex-nowrap space-x-3">
            <input
              className="bg-[#151621] w-[65%] h-[55px] rounded-[4px] px-4 text-white"
              placeholder="Enter your email"
              type="text"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
            <button
              className="bg-[#064AB5] w-[35%] h-[55px] rounded-[4px] text-[15px] text-white"
              onClick={() => setIsRegister(true)}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailInputSection;
