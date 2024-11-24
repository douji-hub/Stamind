'use client'

import React, { useState } from 'react'

import InputComponent from '@/components/form/input/InputComponent'
import ButtonComponent from '@/components/form/button/ButtonComponent'
import GoogleSignInComponent from '@/components/form/button/GoogleSignInComponent'
import { login } from '@/api/auth'
import { useRouter } from 'next/navigation'

type LogInFormProps = {
  isRegister: boolean
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>
}

const LogInForm = (props: LogInFormProps) => {
  const router = useRouter()

  const { isRegister, setIsRegister } = props

  const [inputEmail, setInputEmail] = useState<string>('')
  const [inputPassword, setInputPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const isEmailValid = inputEmail.trim().length > 0

  const handleGetStarted = () => {
    if (isEmailValid) {
      sessionStorage.setItem('email', inputEmail)
      setIsRegister(true)
    }
  }

  const handleLogin = async () => {
    try {
      const { token, userId } = await login(inputEmail, inputPassword)
      sessionStorage.setItem('jwt', token)
      router.push(`/workspace/${userId}`)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('unknown error')
      }
    }
  }

  return (
    <div className="relative mt-[7.75rem] mx-auto w-[22rem]">
      {/* Email Section */}
      <div className={isRegister ? 'animate-loginSlideOut' : ''}>
        <GoogleSignInComponent />
        <div className="my-8 text-center text-stamind-white-200">or</div>
      </div>
      <div
        className={`flex justify-between items-end w-full gap-x-2 ${
          isRegister ? 'animate-loginSlideUp' : ''
        }`}
      >
        <InputComponent
          label={'Your email'}
          placeholder={'Enter your email'}
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          boxClass={
            isRegister
              ? 'w-[22rem] transition-width duration-1000 ease'
              : 'w-[16rem]'
          }
        />
        <div className={isRegister ? 'hidden' : ''}>
          <ButtonComponent
            label={'Get Started'}
            onClick={handleGetStarted}
            customClass={`h-[3rem] ${
              isEmailValid
                ? 'bg-stamind-primary-blue-900'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isEmailValid}
          />
        </div>
      </div>

      {/* Password Section */}
      <div
        className={
          isRegister
            ? 'flex flex-col justify-center items-center gap-y-3 animate-loginSlideIn'
            : 'opacity-0'
        }
      >
        <InputComponent
          label={'Your Password'}
          type={'password'}
          placeholder={'Enter your password'}
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          boxClass={'w-[22rem]'}
        />
        <ButtonComponent
          label={'Login'}
          onClick={handleLogin}
          customClass={'h-[3rem] mt-3 bg-stamind-primary-blue-900'}
        />
        {errorMessage && (
          <div className="text-[0.7rem] mt-[0.6rem] text-stamind-decoration-error-1 text-xs">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  )
}

export default LogInForm
