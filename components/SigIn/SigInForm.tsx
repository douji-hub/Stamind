"use client";

import { useState } from "react";
import EmailInputSection from "@/components/SigIn/form/Email-Input";
import PasswordInputSection from "@/components/SigIn/form/Password-Input";

const SignInForm = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="w-[350px] mt-[124px] mx-auto relative">
      {/* Email Section */}
      <div
        className={
          isRegister
            ? "transition-opacity duration-1000 ease-in-out  opacity-0"
            : ""
        }
      >
        <EmailInputSection
          inputEmail={inputEmail}
          setInputEmail={setInputEmail}
          setIsRegister={setIsRegister}
        />
      </div>

      {/* Password Section */}
      <div
        className={
          "w-[350px] absolute  left-[50%] top-[0] translate-x-[-50%]  " +
          (isRegister
            ? "transition-opacity delay-700 duration-1000 ease-in-out z-10 opacity-1"
            : "opacity-0 z-[-10]")
        }
      >
        <PasswordInputSection
          inputPassword={inputPassword}
          setInputPassword={setInputPassword}
        />
      </div>
    </div>
  );
};

export default SignInForm;
