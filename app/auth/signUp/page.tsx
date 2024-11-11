'use client'

import React from 'react'
import { useForm } from '@/hooks/auth/useForm'
import InputComponent from '@/components/form/input/InputComponent'
import GoogleSignInComponent from '@/components/form/button/GoogleSignInComponent'
import ButtonComponent from '@/components/form/button/ButtonComponent'
import TextWithSideLinkComponent from '@/components/form/text/TextWithSideLinkComponent'

const Page: React.FC = () => {
  const {
    formValues,
    setFormValues,
    typingStatus,
    isFormValid,
    getEmailErrorMessages,
    getUsernameErrorMessages,
    getPasswordErrorMessages,
    getConfirmPasswordErrorMessages,
  } = useForm()

  const { email, firstName, password, confirmPassword } = formValues
  const { setEmail, setFirstName, setPassword, setConfirmPassword } =
    setFormValues
  const { setHasTyped } = typingStatus

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setHasTyped((prev) => ({ ...prev, email: true }))
  }

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
    setHasTyped((prev) => ({ ...prev, firstName: true }))
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setHasTyped((prev) => ({ ...prev, password: true }))
  }

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(e.target.value)
    setHasTyped((prev) => ({ ...prev, confirmPassword: true }))
  }

  const emailError = getEmailErrorMessages()
  const usernameError = getUsernameErrorMessages()
  const passwordError = getPasswordErrorMessages()
  const confirmPasswordError = getConfirmPasswordErrorMessages()

  return (
    <div className="h-[100%]">
      <div className="relative top-[4rem] left-0 w-full text-[3rem] text-center font-bold text-stamind-white-000">
        Join and start your journey
      </div>
      <div className="flex flex-col justify-center items-center mt-[8rem] my-10 gap-4">
        <div className={'w-[22rem]'}>
          <GoogleSignInComponent />
        </div>
        <div className="text-center text-lightgrey-stamind-lightgrey-200">
          or
        </div>
        <InputComponent
          label="Your Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          hasError={emailError.hasError}
          errorMessage={emailError.errorMessages}
          boxClass="w-[22rem]"
        />

        <InputComponent
          label="Your First Name"
          placeholder="Enter your name"
          value={firstName}
          onChange={handleUsernameChange}
          hasError={usernameError.hasError}
          errorMessage={usernameError.errorMessages}
          boxClass="w-[22rem]"
        />

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

        <ButtonComponent
          label="Get Started"
          disabled={!isFormValid()}
          customClass={`h-[2.6rem] mt-2 bg-primary-stamind-blue-1000 ${
            isFormValid() ? 'opacity-100' : 'opacity-60'
          }`}
        />
      </div>

      <TextWithSideLinkComponent
        text="already have account?"
        link="/auth/login"
        linkText="Login"
      />
    </div>
  )
}

export default Page
