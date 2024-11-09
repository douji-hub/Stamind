"use client";

import React from "react";
import { useForm } from "@/hooks/auth/useForm";
import InputComponent from "@/components/form/input/InputComponent";

const Page: React.FC = () => {
  const {
    formValues,
    setFormValues,
    typingStatus,
    isFormValid,
    getPasswordErrorMessages,
    getConfirmPasswordErrorMessages,
  } = useForm();

  const { password, confirmPassword } = formValues;
  const { setPassword, setConfirmPassword } = setFormValues;
  const { setHasTyped } = typingStatus;

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

  const passwordError = getPasswordErrorMessages();
  const confirmPasswordError = getConfirmPasswordErrorMessages();

  return (
    <div className="h-[100%]">
      <div className="relative top-[10rem] left-0 w-full text-[3rem] text-center font-bold text-lightgrey-stamind-white">
        Reset Your Password
      </div>
      <div className="flex flex-col justify-center items-center mt-[17rem] gap-4">
        <InputComponent
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          hasError={passwordError.hasError}
          errorMessage={passwordError.errorMessages}
          boxClass="w-[22rem]"
        />

        <InputComponent
          label="Confirm Password"
          type="confirmPassword"
          placeholder="Enter your password again"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          hasError={confirmPasswordError.hasError}
          errorMessage={confirmPasswordError.errorMessages}
          boxClass="w-[22rem]"
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
