'use client'

import React, { useState } from 'react'

import InputComponent from '@/components/form/input/InputComponent'
import ButtonComponent from '@/components/form/button/ButtonComponent'
import GoogleSignInComponent from '@/components/form/button/GoogleSignInComponent'

type LogInFormProps = {
  isRegister: boolean
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>
}

const LogInForm = (props: LogInFormProps) => {
  const { isRegister, setIsRegister } = props

  const [inputEmail, setInputEmail] = useState<string>('')
  const [inputPassword, setInputPassword] = useState<string>('')

  return (
    <div className="relative mt-[7.75rem] mx-auto w-[22rem]">
      {/* Email Section */}
      <div className={isRegister ? 'animate-loginSlideOut' : ''}>
        <GoogleSignInComponent />
        <div className="my-8 text-center text-lightgrey-stamind-lightgrey-200">
          or
        </div>
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
            onClick={() => setIsRegister(true)}
            customClass={'h-[3rem] bg-primary-stamind-blue-1000'}
          />
        </div>
      </div>
      <div>
        {/*{inputEmail.length == 0 &&*/}
        {/*    <span className={"text-decoration-stamind-decoration-error-1 text-xs"}>Can't be empty</span>}*/}
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
          customClass={'h-[3rem] mt-3 bg-primary-stamind-blue-1000'}
        />
      </div>
    </div>
  )
}

export default LogInForm
