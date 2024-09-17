import React, { useState } from "react";
import { BiEnvelope, BiLock } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { SignIn } from "../apis/UserApi";
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: { msg: string } }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "remember" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent resubmission while waiting for the response
    setIsSubmitting(true); // Disable the submit button while waiting for the response
    if (formData.remember) {
      localStorage.setItem("remember", "true");
    } 
    try {
      toast.promise(
        SignIn(formData)
          .then((response) => {
            if (response?.status === 200 && response?.data?.success) {
              localStorage.setItem("email", formData.email);
              navigate("/verification");
              return Promise.resolve();
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
          loading: "Signing in...",
          success: "Login successful. OTP sent to your email and phone number.",
          error: "Login failed. Please check your credentials.",
        }
      );
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="flex justify-center items-center min-h-screen ">
              <div className="w-full max-w-md">
                <img src="/Logo.png" alt="" className="text-right" />
                <div className="bg-white  rounded p-6">
                  <div className="pb-5 pt-4">
                    <h1 className=" text-2xl font-bold mb-6">Sign in</h1>
                    <h1>If you don't have an account</h1>
                    <h1>
                      You can{" "}
                      <Link to="/register" className="text-blue-600">
                        Sign up here !
                      </Link>{" "}
                    </h1>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4 relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className={`form-input py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-blue-500 ${
                          errors.email && "!border-red-500 text-red-900"
                        }`}
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-sm leading-5">
                        <BiEnvelope className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" />
                      </div>
                    </div>

                    {errors.email && (
                      <p className="mb-3 text-sm text-red-600 dark:text-red-500">
                        {errors.email.msg}
                      </p>
                    )}

                    <div className="mb-2 relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        className={`form-input py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-blue-500 ${
                          errors.password && "!border-red-500 text-red-900"
                        }`}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-sm leading-5">
                        <BiLock className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" />
                      </div>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="focus:outline-none"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>

                    {errors.password && (
                      <p className="mb-3 text-sm text-red-600 dark:text-red-500">
                        {errors.password.msg}
                      </p>
                    )}

                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="remember"
                          id="remember"
                          className={`mr-2 leading-tight ${
                            errors.remember && "outline-red-500 text-red-900"
                          }`}
                          checked={formData.remember}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="remember"
                          className="text-sm text-gray-700"
                        >
                          Remember me
                        </label>
                      </div>
                      <div>
                        <Link
                          to="/forget-password"
                          className="text-blue-500 hover:text-blue-700 text-sm"
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </div>

                    <div className=" text-center mb-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
                      >
                        Login
                      </button>
                    </div>

                    <p className="text-center">Or continue with </p>

                    <div className="options  flex justify-center space-x-4 mb-4">
                      <Link to="">
                        <img
                          src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000"
                          alt=""
                          className="h-8"
                        />
                      </Link>

                      <Link to="">
                        {" "}
                        <img
                          src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                          alt=""
                          className="h-8"
                        />
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block bg-blue-700">
            <div className="text-center justify-center py-9">
              <img src="/20.png" alt="" />
              <h1 className="text-white text-3xl ">
                Place bet with confidence
              </h1>
              <p className="text-white">
                PredictifSports™ empowers you to bet smart and confidently by
                delivering the right information at the right time—before you
                place any bet. With PreMatch Match Alerts, InPlay Match Alerts,
                over 14 years of historical stats, and much more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
