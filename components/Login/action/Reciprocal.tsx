"use client";

import { useState, useEffect } from "react";
import { ReciprocalProps, FormatTimeFunction } from "@/interface/Reciprocal";

function Reciprocal() {
  const [timeLeft, setTimeLeft] = useState<ReciprocalProps["timeLeft"]>(3);
  const [isRegister, setIsRegister] =
    useState<ReciprocalProps["isRegister"]>(false);
  const [showMessage, setShowMessage] =
    useState<ReciprocalProps["showMessage"]>(true);

  //計時器
  const startTimer = () => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime: number) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  };

  //處裡倒數結束
  const handleTimeEnd = () => {
    setIsRegister(true);
    setTimeout(() => setShowMessage(false), 1000);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      return startTimer();
    } else {
      handleTimeEnd();
    }
  }, [timeLeft]);

  //轉換時間
  const formatTime: FormatTimeFunction = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="relative w-full">
      <div
        className={`mt-[1.5rem] text-center text-[4rem] transition-colors duration-500 ease-in-out ${
          isRegister ? "text-[#2C2D3C]" : "text-white"
        }`}
      >
        {formatTime(timeLeft)}
      </div>

      {showMessage && (
        <div
          className={`absolute top-[5.625rem] left-0 right-0 transition-opacity duration-1000 ease-in-out ${
            isRegister ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="text-[0.9375rem] text-center text-[#fff]">
            For security reasons, the link will expire in 10 minutes.
          </div>
        </div>
      )}

      <div
        className={`absolute top-[5.625rem] left-0 right-0 transition-opacity delay-1000 duration-1000 ease-in-out ${
          isRegister ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-[0.9375rem] text-center text-[#fff]">
          Verification expired. Click below to resend the email.
        </div>
      </div>
    </div>
  );
}

export default Reciprocal;
