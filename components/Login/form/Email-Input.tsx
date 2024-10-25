import GoogleSigInButton from "@/components/Login/button/GoogleSignInButton";

interface IEmailInputSection {
  inputEmail: string;
  setInputEmail: (email: string) => void;
  setIsRegister: (value: boolean) => void;
}

const EmailInputSection: React.FC<IEmailInputSection> = ({
  inputEmail,
  setInputEmail,
  setIsRegister,
}) => {
  return (
    <div>
      <GoogleSigInButton />
      <div className="my-[1.5rem] text-center">or</div>
      <div className="w-full">
        <div>
          <div className="mb-1 text-[0.8125rem]">Your Email</div>
          <div className="flex flex-row flex-nowrap space-x-3">
            <input
              className="h-[3.4375rem] w-[65%] px-4 bg-[#151621] rounded-[0.25rem] text-white"
              placeholder="Enter your email"
              type="text"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
            <button
              className="h-[3.4375rem] w-[35%] bg-[#064AB5] rounded-[0.25rem] text-[0.9375rem] text-white"
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
