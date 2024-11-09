"use client";

import React from "react";

import Timer from "@/components/timer/Timer";
import ButtonComponent from "@/components/form/button/ButtonComponent";

const page = () => {
  function resendForgotPasswordEmail() {
    alert("resend!");
  }

  return (
    <div>
      <div className="relative top-[2rem] text-[3rem] text-center font-bold text-lightgrey-stamind-white">
        Reset Your Password
      </div>
      <div className="mt-[8rem] text-[1.125rem] text-center text-lightgrey-stamind-lightgrey-100">
        We've sent a password reset link to your email.
        <br /> Please check your inbox and follow the instructions to reset your
        password.
      </div>
      <Timer initialTime={300} />
      <div className="flex flex-col justify-start bg-uiSpecificColor-stamind-bg-command mt-[5rem] w-[40rem] h-[7.5rem]">
        <div className="px-[0.625rem] py-[0.5rem] text-[0.8125rem] text-lightgrey-stamind-lightgrey-200">
          Didn't receive the email?
          <ul>
            <li className="ml-[1rem] list-disc">
              Check your spam folder or click the button below to resend the
              verification email.
            </li>
            <li className="ml-[1rem] list-disc">
              Make sure the email address you provided is correct.
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center flex-1">
          <ButtonComponent
            label={"Resend Password Reset Email"}
            onClick={resendForgotPasswordEmail}
            customClass={"h-[2.2rem] text-xs bg-grey-stamind-grey-400"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
