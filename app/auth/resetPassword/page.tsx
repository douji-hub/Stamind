"use client";

import React from "react";
import PasswordField from "./components/PasswordField";
import { useForm } from "./hooks/useForm";

const Page: React.FC = () => {
  const {
    formValues,
    setFormValues,
    passwordVisibility,
    typingStatus,
    errors,
    isFormValid,
  } = useForm();

  const { password, confirmPassword } = formValues;
  const { setPassword, setConfirmPassword } = setFormValues;
  const { hasTyped, setHasTyped } = typingStatus;
  const {
    showPassword,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
  } = passwordVisibility;

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
        <PasswordField
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
          hasError={
            hasTyped.password &&
            (!errors.length ||
              !errors.uppercase ||
              !errors.lowercase ||
              !errors.number ||
              !errors.specialChar)
          }
        >
          {hasTyped.password && (
            <ul className="mt-[0.6rem]">
              {!errors.length && (
                <li className="text-[0.7rem] ml-[1rem] list-disc text-grey-stamind-grey-200 ">
                  Your password must be at least 8 characters long.
                </li>
              )}
              {!errors.uppercase && (
                <li className="text-[0.7rem] ml-[1rem] list-disc text-grey-stamind-grey-200 ">
                  It must include uppercase letters.
                </li>
              )}
              {!errors.lowercase && (
                <li className="text-[0.7rem] ml-[1rem] list-disc text-grey-stamind-grey-200 ">
                  It must include lowercase letters.
                </li>
              )}
              {!errors.number && (
                <li className="text-[0.7rem] ml-[1rem] list-disc text-grey-stamind-grey-200 ">
                  It must include numbers.
                </li>
              )}
              {!errors.specialChar && (
                <li className="text-[0.7rem] ml-[1rem] list-disc text-grey-stamind-grey-200 ">
                  It must include special characters (e.g., !, @, #, etc.).
                </li>
              )}
            </ul>
          )}
        </PasswordField>

        <PasswordField
          label="Confirm Password"
          placeholder="Enter your password again"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          showPassword={showConfirmPassword}
          toggleShowPassword={toggleShowConfirmPassword}
          hasError={hasTyped.confirmPassword && !errors.match}
          error={
            hasTyped.confirmPassword && !errors.match
              ? "Passwords do not match. Please try again."
              : undefined
          }
          customClass={"h-[5rem]"}
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
