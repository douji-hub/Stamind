import React from "react";

import Reciprocal from "@/components/LogIn/action/Reciprocal";

const page = () => {
  return (
    <div>
      <div className="text-[3rem] text-center font-bold text-[#fff]">
        Reset Your Password
      </div>
      <div className="mt-[7.75rem] text-[0.9375rem] text-center text-[#fff]">
        We've sent a password reset link to your email.
        <br /> Please check your inbox and follow the instructions to reset your
        password.
      </div>
      <Reciprocal />
      <div className="flex items-center space-x-3 bg-[#1D1E2BB5] mt-[7.75rem] w-[42.625rem]">
        <div className="ps-[0.625rem] py-[0.5rem] text-[0.6875rem] text-[#fff]">
          Didn't receive the email?
          <br /> Check your spam folder or click the button below to resend the
          verification email.
          <br /> Make sure the email address you provided is correct.
        </div>
        <div className="flex justify-center items-center flex-1">
          <button className="h-[2.2rem] w-[13.4rem] bg-[#393A4B] border text-[0.8125rem] rounded text-[#fff]">
            Resend Password Reset Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
