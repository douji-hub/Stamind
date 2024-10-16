import Link from "next/link";

const ForgotPassword = () => {
  return (
    <div className="w-full flex justify-center mt-[124px]">
      <div className="text-[13px] text-[#D2D3E0]">
        Forgot Password?
        <Link href="/auth/forgotPassword" className="mx-1 underline">
          Click Here
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
