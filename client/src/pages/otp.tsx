import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ResendOTP, VerifyOTP } from "../apis/UserApi";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: { msg: string } }>({});

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") {
      // check if the new value is a(one) digit or empty
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus on the next and previous input field
      if (value !== "" && index < 3) {
        inputRefs.current[index + 1]?.focus();
      } else if (value === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent resubmission while waiting for the response
    setIsSubmitting(true); // Disable the submit button while waiting for the response
    const otpValue = otp.join("");
    const remember = localStorage.getItem("remember") === "true";
    toast.promise(
      VerifyOTP({ otp: otpValue, remember: remember })
        .then((response) => {
          if (response?.status === 200 && response?.data?.success) {
            localStorage.removeItem("email");
            localStorage.removeItem("remember");
            navigate("/");
            return Promise.resolve(`Welcome back! ${response?.data?.name} 🎉`);
          } else {
            if (response?.data?.errors) {
              setErrors(response?.data?.errors || {});
              return Promise.reject();
            } else {
              return Promise.reject();
            }
          }
        })
        .catch(() => {
          return Promise.reject();
        })
        .finally(() => {
          setIsSubmitting(false);
        }),
      {
        loading: "Verifying OTP...",
        success: (msg) => msg,
        error: "OTP verification failed. Please check your OTP and try again.",
      }
    );
  };

  const resendOtp = () => {
    toast.promise(
      ResendOTP()
        .then((response) => {
          if (response?.status === 200 && response?.data?.success) {
            setTimeLeft(300);
            setOtp(["", "", "", ""]);
            inputRefs.current[0]?.focus();
            return Promise.resolve();
          } else {
            if (response?.status === 401 && response?.data?.message === "User not found") {
              setErrors({ otp: { msg: "Something went wrong. Please try logging in again" } });
              return Promise.reject();
            } else {
              return Promise.reject();
            }
          }
        })
        .catch(() => {
          return Promise.reject();
        }),
      {
        loading: "Resending OTP...",
        success: "OTP resent successfully. Please check your email and phone.",
        error: "Failed to resend OTP. Please try again.",
      }
    );
  };

  const email = localStorage.getItem("email");

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="flex justify-center items-center min-h-screen">
              <div className="w-full max-w-md">
                <div className="bg-white p-6">
                  <img src="/Logo.png" alt="" className="text-right" />
                  <div className="pb-5 pt-4">
                    <h1 className=" text-2xl font-bold mb-3">
                      OTP VERIFICATION
                    </h1>
                    <h1 className="text-md">We sent a code to {email}</h1>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <div className="flex space-x-2">
                        {otp.map((digit, index) => (
                          <input
                            key={index}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            ref={(el) => (inputRefs.current[index] = el)}
                            className={`form-input py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-blue-900 text-2xl focus:outline-none focus:ring-0 focus:border-blue-500 ${
                              errors.otp && "!border-red-500 text-red-900"
                            }`}
                            required
                          />
                        ))}
                      </div>
                      {errors.otp && (
                        <p className="text-red-500 text-sm mt-3">{errors.otp.msg}</p>
                      )}
                    </div>
                    <div className="mb-4 text-blue-600">
                      {timeLeft > 0
                        ? `(${formatTime(timeLeft)})`
                        : "OTP expired"}
                    </div>

                    <p className="text-center mb-4">
                      Didn't get a code?{" "}
                      <button
                        type="button"
                        className={
                          timeLeft == 0 ? "text-blue-600" : "text-gray-400"
                        }
                        disabled={timeLeft > 0}
                        onClick={resendOtp}
                      >
                        Resend
                      </button>
                    </p>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <div className="h-full relative">
              <div className="absolute top-0 right-0 h-full w-1/2 bg-blue-700"></div>
              <div className="text-center justify-center py-9 relative z-10 flex flex-col items-end pr-8">
                <div className="bg-blue-300 flex justify-center items-center pb-7 pt-7 w-full">
                  <img src="/123.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
