'use client'

import React, { useState } from 'react'
import { useForm } from '@/hooks/auth/useForm'
import InputComponent from '@/components/form/input/InputComponent'
import { sendResetPassword } from '@/api/auth'
import { useRouter } from 'next/navigation'
import ButtonComponent from '@/components/form/button/ButtonComponent'

const Page: React.FC = () => {
  const router = useRouter()

  const {
    formValues,
    setFormValues,
    typingStatus,
    getPasswordErrorMessages,
    getConfirmPasswordErrorMessages,
  } = useForm()

  const { password, confirmPassword } = formValues
  const { setPassword, setConfirmPassword } = setFormValues
  const { setHasTyped } = typingStatus

  const [loading, setLoading] = useState<boolean>(false)

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

  const handleResetPassword = async () => {
    setLoading(true)
    try {
      const queryParams = new URLSearchParams(window.location.search)
      const token = queryParams.get('token')
      if (!token) return

      await sendResetPassword(token, confirmPassword)
      router.push(`/auth/login`)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error resetting password:', error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  const isFormValid = () => {
    const passwordError = getPasswordErrorMessages()
    const confirmPasswordError = getConfirmPasswordErrorMessages()

    return (
      password.trim().length > 0 &&
      confirmPassword.trim().length > 0 &&
      password === confirmPassword &&
      !passwordError.hasError &&
      !confirmPasswordError.hasError
    )
  }

  const passwordError = getPasswordErrorMessages()
  const confirmPasswordError = getConfirmPasswordErrorMessages()

  return (
    <div className="h-[100%]">
      <div className="relative top-[10rem] left-0 w-full text-[3rem] text-center font-bold text-stamind-white-000">
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
          type="password"
          placeholder="Enter your password again"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          hasError={confirmPasswordError.hasError}
          errorMessage={confirmPasswordError.errorMessages}
          boxClass="w-[22rem]"
        />

        <ButtonComponent
          label={loading ? 'Loading...' : 'Get Started'}
          disabled={!isFormValid() || loading}
          onClick={handleResetPassword}
          customClass={`h-[2.6rem] mt-2 bg-stamind-primary-blue-900 ${
            isFormValid() ? 'opacity-100' : 'opacity-60'
          }`}
        />
      </div>
    </div>
  )
}

export default Page
