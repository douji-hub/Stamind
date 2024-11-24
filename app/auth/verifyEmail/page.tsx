'use client'

import React, { useState } from 'react'
import Timer from '@/components/timer/Timer'
import { useSearchParams } from 'next/navigation'
import { resendEmail } from '@/api/auth'

const Page = () => {
  const [isExpired, setIsExpired] = useState<boolean>(false)
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false)
  const [timerKey, setTimerKey] = useState<number>(0)

  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  const handleTimeout = () => {
    setIsExpired(true)
    setIsFadingOut(false)
  }

  const handleResendClick = async () => {
    setIsFadingOut(true)
    setIsExpired(false)
    setTimerKey((prev) => prev + 1)

    if (!email) return

    try {
      await resendEmail(email, 'verify')
    } catch (error: unknown) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="fixed top-[8rem] left-0 w-full text-[3rem] text-center font-bold text-stamind-white-000">
        Verify Your Email Address
      </div>
      <div className="mt-[10rem] text-[0.9375rem] text-center text-stamind-white-000">
        A verification email has been sent to{' '}
        <span className="font-bold">{email}</span>
        <br /> Please check your email and click the verification link to
        continue.
      </div>
      <Timer key={timerKey} initialTime={600} onTimeout={handleTimeout} />
      <div className="flex flex-col justify-start mt-[5rem] w-[42.625rem] bg-stamind-specific-command-bar-bg">
        <div className="px-[0.625rem] py-[0.5rem] text-stamind-white-200 text-[0.6875rem]">
          <span className="font-bold">Didn't receive the email?</span>
          <ul>
            <li className="ml-[1rem] list-disc text-stamind-white-200">
              Check your spam folder or click the button below to resend the
              verification email.
            </li>
            <li className="ml-[1rem] list-disc text-stamind-white-200">
              Make sure the email address you provided is correct.
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center flex-1 mb-[0.5rem]">
          <button
            className={`h-[1.8rem] w-[10rem] bg-stamind-black-600 border border-stamind-grey-400 text-[0.7rem] rounded text-stamind-white-200 transition-opacity duration-500 ${
              isFadingOut ? 'opacity-0' : isExpired ? 'opacity-100' : ''
            }`}
            onClick={handleResendClick}
            disabled={isFadingOut}
          >
            Resend Verification Email
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
