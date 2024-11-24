'use client'

import React, { useState } from 'react'

import Timer from '@/components/timer/Timer'
import { resendEmail } from '@/api/auth'

const page = () => {
  const [isExpired, setIsExpired] = useState<boolean>(false)
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false)
  const [timerKey, setTimerKey] = useState<number>(0)

  const handleTimeout = () => {
    setIsExpired(true)
    setIsFadingOut(false)
  }

  const handleResendClick = async () => {
    setIsFadingOut(true)
    setIsExpired(false)
    setTimerKey((prev) => prev + 1)
    const email = sessionStorage.getItem('email')

    if (!email) return

    try {
      await resendEmail(email, 'reset')
    } catch (error: unknown) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="relative top-[2rem] text-[3rem] text-center font-bold text-stamind-white-000">
        Reset Your Password
      </div>
      <div className="mt-[8rem] text-[1.125rem] text-center text-stamind-white-000">
        We've sent a password reset link to your email.
        <br /> Please check your inbox and follow the instructions to reset your
        password.
      </div>
      <Timer key={timerKey} initialTime={600} onTimeout={handleTimeout} />
      <div className="flex flex-col justify-start bg-stamind-specific-text-bg mt-[5rem] w-[40rem] h-[7.5rem]">
        <div className="px-[0.625rem] py-[0.5rem] text-[0.8125rem] text-stamind-grey-200">
          Didn't receive the email?
          <ul>
            <li className="ml-[1rem] list-disc">
              Check your spam folder or click the button below to resend the
              verification email.
            </li>
            <li className="ml-[1rem] list-disc">
              Make sure the email address you provided is correct.
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center flex-1">
          <button
            className={`h-[1.8rem] w-[12rem] bg-stamind-black-600 border border-stamind-grey-400 text-[0.7rem] rounded text-stamind-white-200 transition-opacity duration-500 ${
              isFadingOut ? 'opacity-0' : isExpired ? 'opacity-100' : ''
            }`}
            onClick={handleResendClick}
            disabled={isFadingOut}
          >
            Resend Password Reset Email
          </button>
        </div>
      </div>
    </div>
  )
}

export default page
