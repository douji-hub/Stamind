import ForgotPassword from "@/components/SigIn/button/ForgotPasswordLInk";

const PasswordInputSection = ({ inputPassword, setInputPassword }) => {
  return (
    <div>
      <div>
        <div className="mb-1 text-[13px]">Your Password</div>
        <input
          className="bg-[#151621] w-full h-[55px] rounded-[4px] px-4 text-white"
          placeholder="Enter your password"
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <div className="w-full flex justify-center mt-[24px]">
          <button className="bg-[#064AB5] w-[35%] h-[55px] rounded-[4px] text-[15px] text-white">
            Get Started
          </button>
        </div>
        <ForgotPassword />
      </div>
    </div>
  );
};

export default PasswordInputSection;
