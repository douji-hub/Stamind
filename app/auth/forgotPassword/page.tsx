import React from "react";

import Reciprocal from "@/components/SigIn/action/Reciprocal";

const page = () => {
  return (
    <div>
      <div className="text-[48px] font-bold text-center">
        Reset Your Password
      </div>
      <div className="text-[15px] mt-[124px] text-center">
        We've sent a password reset link to your email.
        <br /> Please check your inbox and follow the instructions to reset your
        password.
      </div>
      <Reciprocal />
      <div className="bg-[#1D1E2BB5] w-[682px] mt-[124px] flex space-x-3 items-center">
        <div className="text-[11px] ps-[10px] py-[8px]">
          Didn't receive the email?
          <br /> Check your spam folder or click the button below to resend the
          verification email.
          <br /> Make sure the email address you provided is correct.
        </div>
        <div className="flex justify-center items-center flex-1">
          <button className="text-[13px] border bg-[#393A4B] rounded h-[35px] w-[215px]">
            Resend Password Reset Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
