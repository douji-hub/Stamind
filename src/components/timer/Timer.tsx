'use client'

import { useState, useEffect } from 'react'

type TimerProps = {
  initialTime: number
  onTimeout?: () => void
}

const Timer = ({ initialTime, onTimeout }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime)
  const [isTimeOut, setIsTimeOut] = useState<boolean>(false)
  const [showMessage, setShowMessage] = useState<boolean>(true)

  // 計時器
  const startTimer = () => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime: number) => prevTime - 1)
    }, 1000)
    return () => clearInterval(timer)
  }

  // 處理倒數結束
  const handleTimeEnd = () => {
    setIsTimeOut(true)
    setTimeout(() => setShowMessage(false), 1000)
  }

  useEffect(() => {
    if (timeLeft > 0) {
      return startTimer()
    } else {
      handleTimeEnd()
    }
  }, [timeLeft])

  useEffect(() => {
    if (isTimeOut && onTimeout) {
      onTimeout()
    }
  }, [isTimeOut, onTimeout])

  // 轉換時間
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`
  }

  return (
    <div className="w-full">
      <div
        className={`mt-[2.8rem] mb-[0.7rem] text-center text-[4rem] transition-colors duration-500 ease-in-out ${
          isTimeOut ? 'text-stamind-black-400' : 'text-stamind-white-000'
        }`}
      >
        {formatTime(timeLeft)}
      </div>

      <div className="relative h-[2.5rem]">
        {showMessage && (
          <div
            className={`inset-0 transition-opacity duration-1000 ease-in-out ${
              isTimeOut ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="text-[0.9375rem] text-center text-stamind-white-000">
              For security reasons, the link will expire in 10 minutes.
            </div>
          </div>
        )}

        <div
          className={`inset-0 transition-opacity delay-1000 duration-1000 ease-in-out ${
            isTimeOut ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-[0.9375rem] text-center text-stamind-white-000">
            Verification expired. Click below to resend the email.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timer
