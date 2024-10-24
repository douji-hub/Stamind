import Link from "next/link";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center mt-[7.75rem] w-full">
      <div className="text-[0.8rem] text-[#D2D3E0]">
        Forgot Password?
        <Link href="/auth/forgotPassword" className="mx-1 underline">
          Click Here
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
