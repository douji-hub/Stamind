"use client";

import React from "react";
import InputField from "./components/InputField";
import PasswordField from "./components/PasswordField";
import { useForm } from "./hooks/useForm";
import GoogleSignInButton from "@/components/Login/button/GoogleSignInButton";
import EmailField from "./components/EmailField";

const Page: React.FC = () => {
  const {
    formValues,
    setFormValues,
    passwordVisibility,
    typingStatus,
    errors,
    isFormValid,
  } = useForm();

  const { email, firstName, password, confirmPassword } = formValues;
  const { setEmail, setFirstName, setPassword, setConfirmPassword } =
    setFormValues;
  const { hasTyped, setHasTyped } = typingStatus;
  const {
    showPassword,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
  } = passwordVisibility;

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
    <div>
      <div className="fixed top-[4rem] left-0 w-full text-[3rem] text-center font-bold text-lightgrey-stamind-white">
        Join and start your journey
      </div>
      <div className="flex flex-col justify-center items-center mt-[8rem] gap-4">
        <GoogleSignInButton />

        <span className="text-[0.7rem] text-lightgrey-stamind-lightgrey-200">
          or
        </span>

        <EmailField
          label="Your Email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          hasError={hasTyped.email && errors.emptyEmail}
          error={
            hasTyped.email && errors.emptyEmail
              ? "Email cannot be empty."
              : undefined
          }
        />

        <InputField
          label="Your First Name"
          placeholder="Enter your name"
          value={firstName}
          onChange={handleUsernameChange}
          hasError={hasTyped.firstName && errors.emptyUsername}
          error={
            hasTyped.firstName && errors.emptyUsername
              ? "Username cannot be empty."
              : undefined
          }
        />

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
        />

        <button
          className={`w-[6.8rem] h-[2.6rem] mt-2 py-2 px-4 ${
            isFormValid()
              ? "bg-primary-stamind-blue-1000"
              : "bg-gray-400 cursor-not-allowed"
          } text-white text-[0.85rem] font-light rounded`}
          disabled={!isFormValid()}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Page;
