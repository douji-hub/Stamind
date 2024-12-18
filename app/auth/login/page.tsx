'use client'

import { useState } from 'react'
import Image from 'next/image'

import LogInForm from './components/LogInForm'
import TextWithSideLinkComponent from '@/components/form/text/TextWithSideLinkComponent'
import { sendResetPasswordMail } from '@/api/auth'

const page = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleResetPasswordMail = async () => {
    const email = sessionStorage.getItem('email')
    if (!email) return

    try {
      await sendResetPasswordMail(email)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('unknown error')
      }
    }
  }

  return (
    <div>
      <div className="h-[31.25rem] w-[37.5rem]">
        <div className="h-[8.75rem] w-full">
          <Image
            className="h-[2.125rem] w-[13.75rem] mx-auto text-center"
            alt="logo"
            width={100}
            height={100}
            src="/images/LoginLogo/logo1.svg"
          />
          <div className="mt-[3rem] text-center text-[3rem] font-bold">
            Unlock your workspace
          </div>
        </div>
        <LogInForm isRegister={isRegister} setIsRegister={setIsRegister} />
        {!isRegister && (
          <div className={'animate-fadeIn'}>
            <TextWithSideLinkComponent
              text={'New here?'}
              link={'/auth/signUp'}
              linkText={'Sign up'}
            />
          </div>
        )}
        {isRegister && (
          <div className={'animate-fadeIn'}>
            <TextWithSideLinkComponent
              text={'forgot password?'}
              link={'/auth/forgotPassword'}
              linkText={'Click Here'}
              handleResetPasswordMail={handleResetPasswordMail}
            />
          </div>
        )}
      </div>
      {errorMessage && (
        <div className="text-[0.7rem] mt-[0.6rem] text-stamind-decoration-error-1 text-xs">
          {errorMessage}
        </div>
      )}
    </div>
  )
}

export default page
