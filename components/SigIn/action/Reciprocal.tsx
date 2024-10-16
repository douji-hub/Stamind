"use client";

import { useState, useEffect } from "react";

function Reciprocal() {
  const [timeLeft, setTimeLeft] = useState(3);
  const [isRegister, setIsRegister] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsRegister(true);
      setTimeout(() => setShowMessage(false), 1000);
    }
  }, [timeLeft]);

  const formatTime = (time) => {
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
        className={`text-[64px] mt-[24px] text-center transition-colors duration-500 ease-in-out ${
          isRegister ? "text-[#2C2D3C]" : "text-white"
        }`}
      >
        {formatTime(timeLeft)}
      </div>

      {showMessage && (
        <div
          className={`transition-opacity  duration-1000 ease-in-out absolute top-[90px] left-0 right-0 ${
            isRegister ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="text-[15px] text-center">
            For security reasons, the link will expire in 10 minutes.
          </div>
        </div>
      )}

      <div
        className={`transition-opacity delay-1000 duration-1000 ease-in-out absolute top-[90px] left-0 right-0 ${
          isRegister ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-[15px] text-center">
          Verification expired. Click below to resend the email.
        </div>
      </div>
    </div>
  );
}

export default Reciprocal;
