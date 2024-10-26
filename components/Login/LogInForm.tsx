"use client";

import { useState } from "react";
import EmailInputSection from "@/components/LogIn/form/Email-Input";
import PasswordInputSection from "@/components/LogIn/form/Password-Input";

const LogInForm = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="relative mt-[7.75rem] mx-auto w-[21.875rem]">
      {/* Email Section */}
      <div
        className={
          isRegister
            ? "transition-opacity duration-1000 ease-in-out opacity-0"
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
          "absolute left-[50%] top-[0] w-[21.875rem] translate-x-[-50%]  " +
          (isRegister
            ? "transition-opacity delay-700 duration-1000 ease-in-out z-10 opacity-1"
            : "opacity-0 z-[-10]")
        }
      >
        <PasswordInputSection
          inputPassword={inputPassword}
          setInputPassword={setInputPassword}
          setIsRegister={setIsRegister}
        />
      </div>
    </div>
  );
};

export default LogInForm;
