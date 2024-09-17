import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiEnvelope, BiLock, BiPhone, BiUser } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { Register } from "../apis/UserApi";

export default function Signup() {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: { msg: string } }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignup({
      ...signup,
      [name]: value,
    });

    if (name === "terms") {
      setSignup({
        ...signup,
        [name]: e.target.checked,
      });
    }

    if (name === "password") {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent resubmission while waiting for the response
    setIsSubmitting(true); // Disable the submit button while waiting for the response
    try {
      toast.promise(
        Register(signup)
          .then((response) => {
            if (response?.status === 201 && response?.data?.success) {
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
          }).finally(() => {
            setIsSubmitting(false);
          }),
        {
          loading: "Signing up...",
          success: "Signup successful. OTP sent to your email and phone number.",
          error: "Signup failed. Please check your credentials.",
        }
      );
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const calculatePasswordStrength = (password: string) => {
    if (password.length < 6) return "Weak";
    if (
      password.length <= 7 &&
      password.match(/[a-z]/) &&
      password.match(/[A-Z]/)
    )
      return "Moderate";
    if (
      (password.length >= 8 &&
        password.match(/[a-z]/) &&
        password.match(/[A-Z]/)) ||
      password.match(/[0-9]/) ||
      password.match(/[^a-zA-Z\d]/)
    )
      return "Strong";

    return "";
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
                    <h1 className=" text-2xl font-bold mb-6">Sign Up</h1>
                    <h1>If you have an account</h1>
                    <h1>
                      You can{" "}
                      <Link to="/login" className="text-blue-600">
                        Login here!
                      </Link>
                    </h1>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div
                      className="relative mb-4"
                    >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className={`form-input py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-blue-500 ${
                          errors.name && "!border-red-500 text-red-900"
                        }`}
                        placeholder="Enter your name"
                        value={signup.name}
                        onChange={handleChange}
                      />

                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-sm leading-5">
                        <BiUser className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" />
                      </div>
                    </div>
                    {errors.name && (
                      <p className="mb-3 text-sm text-red-600 dark:text-red-500">
                        {errors.name.msg}
                      </p>
                    )}

                    <div
                      className={`relative ${errors.email ? "mb-2" : "mb-4"}`}
                    >
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className={`form-input py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-blue-500 ${
                          errors.email && "!border-red-500 text-red-900"
                        }`}
                        placeholder="Enter your email"
                        value={signup.email}
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

                    <div
                      className={`relative ${errors.phone ? "mb-2" : "mb-4"}`}
                    >
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className={`form-input py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-blue-500 ${
                          errors.phone && "!border-red-500 text-red-900}"
                        }`}
                        placeholder="Enter your phone number"
                        value={signup.phone}
                        onChange={handleChange}
                      />

                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-sm leading-5">
                        <BiPhone className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" />
                      </div>
                    </div>

                    {errors.phone && (
                      <p className="mb-3 text-sm text-red-600 dark:text-red-500">
                        {errors.phone.msg}
                      </p>
                    )}

                    <div
                      className={`relative ${
                        errors.password ? "mb-2" : "mb-4"
                      }`}
                    >
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        className={`form-input py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-blue-500 ${
                          errors.password && "!border-red-500 text-red-900}"
                        }`}
                        placeholder="Enter your password"
                        value={signup.password}
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
                      <p className="my-2 text-sm text-red-600 dark:text-red-500">
                        {errors.password.msg}
                      </p>
                    )}
                    <div
                      className={`mb-3 text-sm ${
                        passwordStrength === "Weak"
                          ? "text-red-600"
                          : passwordStrength === "Moderate"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      Password strength: {passwordStrength}
                    </div>
                    <div
                      className={`relative ${
                        errors.confirmPassword ? "mb-2" : "mb-4"
                      }`}
                    >
                      <input
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm password"
                        className={`form-input py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:outline-none focus:ring-0 focus:border-blue-500 ${
                          errors.confirmPassword &&
                          "!border-red-500 text-red-900}"
                        }`}
                        value={signup.confirmPassword}
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

                    {errors.confirmPassword && (
                      <p className="mb-4 text-sm text-red-600 dark:text-red-500">
                        {errors.confirmPassword.msg}
                      </p>
                    )}

                    <div className="mb-4 text-sm">
                      <input
                        type="checkbox"
                        className={`form-checkbox mr-2 ${
                          errors.terms && "outline-red-500 text-red-900"
                        }`}
                        name="terms"
                        id="terms"
                        value="true"
                        onChange={handleChange}
                      />
                      <label htmlFor="terms" className="inline">
                        I agree to the Predictif Sports™{" "}
                        <Link to="/terms" className="text-blue-600">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-blue-600">
                          Privacy Policy
                        </Link>
                      </label>
                      {errors.terms && (
                        <p className="text-sm text-red-600 dark:text-red-500">
                          {errors.terms.msg}
                        </p>
                      )}
                    </div>

                    <div className="text-center mb-2">
                      <button 
                        type="submit" disabled={isSubmitting}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl w-full focus:outline-none focus:shadow-outline"
                      >
                        Signup
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-none d-md-block bg-blue-700">
            <div className="text-center justify-center py-9">
              <img src="/22.png" alt="" />
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
