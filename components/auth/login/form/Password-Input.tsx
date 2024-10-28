import ForgotPassword from "@/components/auth/login/button/ForgotPasswordLink";
import { PasswordInputProps } from "@/interface/auth/login/form/PasswordInput";

const PasswordInputSection = ({
  inputPassword,
  setInputPassword,
}: PasswordInputProps) => {
  return (
    <div>
      <div>
        <div className="mb-1 text-[0.8125rem]">Your Password</div>
        <input
          className="h-[3.4375rem] w-full px-4 bg-[#151621] rounded-[0.25rem] text-white"
          placeholder="Enter your password"
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <div className="flex justify-center mt-[1.5rem] w-full">
          <button className="h-[3.4375rem] w-[35%] bg-[#064AB5] rounded-[0.25rem] text-white text-[0.9375rem]">
            Get Started
          </button>
        </div>
        <ForgotPassword />
      </div>
    </div>
  );
};

export default PasswordInputSection;
