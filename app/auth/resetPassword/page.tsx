"use client";

import React from "react";
import { useForm } from "./hooks/useForm";
import InputComponent from "@/components/form/input/InputComponent";

const Page: React.FC = () => {
  const { formValues, setFormValues, typingStatus, errors, isFormValid } =
    useForm();

  const { password, confirmPassword } = formValues;
  const { setPassword, setConfirmPassword } = setFormValues;
  const { hasTyped, setHasTyped } = typingStatus;

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
      <div className="relative top-[10rem] left-0 w-full text-[3rem] text-center font-bold text-lightgrey-stamind-white">
        Reset Your Password
      </div>
      <div className="flex flex-col justify-center items-center mt-[17rem] gap-4">
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

        <button
          className={`w-[6.8rem] h-[2.6rem] mt-2 mb-6 py-2 px-4 bg-primary-stamind-blue-1000 text-white text-[0.85rem] font-light rounded
            ${isFormValid() ? "opacity-100" : "opacity-60"}`}
          disabled={!isFormValid()}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Page;
