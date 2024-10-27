"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

type Errors = {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  specialChar: boolean;
  match: boolean;
  emptyUsername: boolean;
};

type HasTyped = {
  password: boolean;
  confirmPassword: boolean;
  firstName?: boolean;
};

const Page: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [hasTyped, setHasTyped] = useState<HasTyped>({
    password: false,
    confirmPassword: false,
    firstName: false,
  });
  const [errors, setErrors] = useState<Errors>({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
    match: false,
    emptyUsername: false,
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // Validate password conditions and update state
  const validatePassword = () => {
    const length = password.length >= 8;
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const number = /\d/.test(password);
    const specialChar = /[!@#$%^&*(),.?":{}|<>~`]/.test(password);
    setErrors((prevErrors) => ({
      ...prevErrors,
      length,
      uppercase,
      lowercase,
      number,
      specialChar,
      match: password === confirmPassword, // Use latest state values
    }));
  };

  // Validate confirm password
  const validateConfirmPassword = () => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      match: password === confirmPassword,
    }));
  };

  // Validate username
  const validateUsername = () => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      emptyUsername: firstName.trim() === "",
    }));
  };

  // Handlers
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setHasTyped((prev) => ({ ...prev, password: true }));
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setHasTyped((prev) => ({ ...prev, confirmPassword: true }));
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
    setHasTyped((prev) => ({ ...prev, firstName: true }));
  };

  // Use useEffect for firstName validation
  useEffect(() => {
    validateUsername();
  }, [firstName]);

  // Use useEffect for password and confirmPassword validation
  useEffect(() => {
    validatePassword();
    validateConfirmPassword();
  }, [password, confirmPassword]);

  const isFormValid = (): boolean => {
    return (
      !errors.emptyUsername &&
      errors.length &&
      errors.uppercase &&
      errors.lowercase &&
      errors.number &&
      errors.specialChar &&
      errors.match
    );
  };

  return (
    <div>
      <div className="fixed top-[8rem] left-0 w-full text-[3rem] text-center font-bold text-lightgrey-stamind-white">
        Join and start your journey
      </div>
      <div className="flex flex-col justify-center items-center mt-[8rem] gap-4">
        <div className="flex flex-col">
          <span className="text-[0.85rem] mb-[0.25rem] text-lightgrey-stamind-lightgrey-200">
            Your First Name
          </span>
          <input
            type="text"
            value={firstName}
            onChange={handleUsernameChange}
            className="w-[20rem] h-[2.7rem] p-[0.5rem] bg-black-stamind-black-850 border rounded-md border-grey-stamind-grey-400 text-sm text-lightgrey-stamind-lightgrey-100"
          />
          {hasTyped.firstName && errors.emptyUsername && (
            <p className="text-red-500 text-xs">Username cannot be empty.</p>
          )}
        </div>

        <div className="flex flex-col">
          <span className="text-[0.85rem] mb-[0.25rem] text-lightgrey-stamind-lightgrey-200">
            Password
          </span>
          <div className="relative w-[20rem]">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              className="w-full h-[2.7rem] p-[0.5rem] bg-black-stamind-black-850 border rounded-md border-grey-stamind-grey-400 text-sm text-lightgrey-stamind-lightgrey-100"
            />
            {showPassword ? (
              <VisibilityIcon
                onClick={togglePasswordVisibility}
                className="text-[1rem] absolute top-1/2 right-3 transform -translate-y-1/2 text-uiSpecificColor-stamind-icon cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
            ) : (
              <VisibilityOffIcon
                onClick={togglePasswordVisibility}
                className="text-[1rem] absolute top-1/2 right-3 transform -translate-y-1/2 text-uiSpecificColor-stamind-icon cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
            )}
          </div>
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
        </div>

        <div className="flex flex-col">
          <span className="text-[0.85rem] mb-[0.25rem] text-lightgrey-stamind-lightgrey-200">
            Confirm Password
          </span>
          <div className="relative w-[20rem]">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={`w-full h-[2.7rem] p-[0.5rem] bg-black-stamind-black-850 border rounded-md text-sm text-lightgrey-stamind-lightgrey-100 ${
                hasTyped.confirmPassword && !errors.match
                  ? "border-decoration-stamind-decoration-error-1"
                  : "border-grey-stamind-grey-400"
              }`}
            />
            {showConfirmPassword ? (
              <VisibilityIcon
                onClick={toggleConfirmPasswordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-uiSpecificColor-stamind-icon cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
            ) : (
              <VisibilityOffIcon
                onClick={toggleConfirmPasswordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-uiSpecificColor-stamind-icon cursor-pointer"
                style={{ fontSize: "1rem" }}
              />
            )}
          </div>
          {hasTyped.confirmPassword && !errors.match && (
            <p className="text-[0.7rem] mt-[0.6rem] text-decoration-stamind-decoration-error-1 text-xs">
              Passwords do not match. Please try again.
            </p>
          )}
        </div>

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
