"use client";

import React from "react";
import { useForm } from "@/hooks/auth/useForm";
import InputComponent from "@/components/form/input/InputComponent";
import GoogleSignInComponent from "@/components/form/button/GoogleSignInComponent";
import ButtonComponent from "@/components/form/button/ButtonComponent";
import TextWithSideLinkComponent from "@/components/form/text/TextWithSideLinkComponent";

const Page: React.FC = () => {
  const { formValues, setFormValues, typingStatus, errors, isFormValid } =
    useForm();

  const { email, firstName, password, confirmPassword } = formValues;
  const { setEmail, setFirstName, setPassword, setConfirmPassword } =
    setFormValues;
  const { hasTyped, setHasTyped } = typingStatus;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setHasTyped((prev) => ({ ...prev, email: true }));
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
    setHasTyped((prev) => ({ ...prev, firstName: true }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setHasTyped((prev) => ({ ...prev, password: true }));
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    setHasTyped((prev) => ({ ...prev, confirmPassword: true }));
  };

  return (
    <div className="h-[100%]">
      <div className="relative top-[4rem] left-0 w-full text-[3rem] text-center font-bold text-lightgrey-stamind-white">
        Join and start your journey
      </div>
      <div className="flex flex-col justify-center items-center mt-[8rem] my-10 gap-4">
        <div className={"w-[22rem]"}>
          <GoogleSignInComponent />
        </div>
        <div className="text-center text-lightgrey-stamind-lightgrey-200">
          or
        </div>
        <InputComponent
          label={"Your Email"}
          placeholder={"Enter your email"}
          type={"email"}
          value={email}
          onChange={handleEmailChange}
          hasError={hasTyped.email && errors.emptyEmail}
          errorMessage={
            hasTyped.email && errors.emptyEmail
              ? ["Email cannot be empty."]
              : undefined
          }
          boxClass={"w-[22rem]"}
        />
        <InputComponent
          label={"Your First Name"}
          placeholder={"Enter your name"}
          value={firstName}
          onChange={handleUsernameChange}
          hasError={hasTyped.firstName && errors.emptyUsername}
          errorMessage={
            hasTyped.firstName && errors.emptyUsername
              ? ["Username cannot be empty."]
              : undefined
          }
          boxClass={"w-[22rem]"}
        />

        <InputComponent
          label={"Password"}
          type={"password"}
          placeholder={"Enter your password"}
          value={password}
          onChange={handlePasswordChange}
          hasError={
            hasTyped.password &&
            (!errors.length ||
              !errors.uppercase ||
              !errors.lowercase ||
              !errors.number ||
              !errors.specialChar)
          }
          errorMessage={
            hasTyped.password
              ? [
                  !errors.length &&
                    "Your password must be at least 8 characters long.",
                  !errors.uppercase && "It must include uppercase letters.",
                  !errors.lowercase && "It must include lowercase letters.",
                  !errors.number && "It must include numbers.",
                  !errors.specialChar &&
                    "It must include special characters (e.g., !, @, #, etc.).",
                ].filter(Boolean)
              : undefined
          }
          boxClass={"w-[22rem]"}
        />

        <InputComponent
          label={"Confirm Password"}
          type={"confirmPassword"}
          placeholder={"Enter your password again"}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          hasError={hasTyped.confirmPassword && !errors.match}
          errorMessage={
            hasTyped.confirmPassword && !errors.match
              ? ["Passwords do not match. Please try again."]
              : undefined
          }
          boxClass={"w-[22rem]"}
        />

        <ButtonComponent
          label={"Get Started"}
          disabled={!isFormValid()}
          customClass={`h-[2.6rem] mt-2 bg-primary-stamind-blue-1000 ${
            isFormValid() ? "opacity-100" : "opacity-60"
          }`}
        />
      </div>
      <TextWithSideLinkComponent
        text={"already have account?"}
        link={"/auth/login"}
        linkText={"Login"}
      />
    </div>
  );
};

export default Page;
