import React from "react";
import Timer from "@/components/timer/Timer";

const page = () => {
  return (
    <div>
      <div className="fixed top-[8rem] left-0 w-full text-[3rem] text-center font-bold text-lightgrey-stamind-white">
        Verify Your Email Address
      </div>
      <div className="mt-[10rem] text-[0.9375rem] text-center text-lightgrey-stamind-white">
        A verification email has been sent to{" "}
        <span className="font-bold">ex***le@gmail.com</span>
        <br /> Please check your email and click the verification link to
        continue.
      </div>
      <Timer initialTime={300} />
      <div className="flex flex-col justify-start bg-uiSpecificColor-stamind-bg-command mt-[5rem] w-[42.625rem]">
        <div className="px-[0.625rem] py-[0.5rem] text-[0.6875rem] text-lightgrey-stamind-lightgrey-200">
          <span className="font-bold">Didn't receive the email?</span>
          <ul>
            <li className="ml-[1rem] list-disc text-lightgrey-stamind-lightgrey-200">
              Check your spam folder or click the button below to resend the
              verification email.
            </li>
            <li className="ml-[1rem] list-disc text-lightgrey-stamind-lightgrey-200">
              Make sure the email address you provided is correct.
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center flex-1 mb-[0.5rem]">
          <button
            disabled
            className="h-[1.8rem] w-[10rem] bg-grey-stamind-grey-600 border border-grey-stamind-grey-400 text-[0.7rem] rounded text-lightgrey-stamind-lightgrey-100 "
          >
            Resend Verification Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
