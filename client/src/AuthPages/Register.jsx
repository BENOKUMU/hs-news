import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import AuthFooter from "./AuthFooter";
import axios from "axios";
import { Navigate } from "react-router-dom"

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [validationErrors, setValidationErrors] = useState(false);
  const [registered, setRegistered] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPasswordFocused(false);
    try {
      const response = await axios.post("http://localhost:4000/api/register", {
        email,
        password,
      });
      alert(response.data.message);
      setRegistered(true);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setValidationErrors(error.response.data);
        console.log("error.response.data is: ", error.response.data);
      }
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e);
  };

  const validatePassword = () => {
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /[\d]/.test(password);
    const hasSymbol = /[@$!%+?&]/.test(password);
    const isLengthValid = password.length >= 8;
    return {
      hasLowerCase,
      hasUpperCase,
      hasDigit,
      hasSymbol,
      isLengthValid,
    };
  };

  const passwordValidation = validatePassword();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  if(registered) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <div className="flex flex-col items-center pt-8 pb-10 justify-center bg-red-100">
        <div className="max-w-lg w-full p-10 bg-white rounded-xl shadow-lg">
          <div className="flex flex-col items-center">
            <img src="/images/Header/logo.png" alt="" className="w-auto h-12" />
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Create Your CNN Account
            </h2>
            <div className="text-sm mt-2">
              <Link
                to="/login"
                className="font-medium text-black hover:text-gray-700"
              >
                Already have an account? <span>Sign In</span>
              </Link>
            </div>
          </div>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                {/* <label htmlFor="email-address" className="sr-only">
                Email Address
              </label> */}
                <input
                  type="email"
                  id="email-address"
                  name="email"
                  autoComplete="email"
                  required
                  className="text-gray-900 border border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" // value={email}
                  placeholder="Email Address"
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-4 relative">
                {/* <label htmlFor="email-address" className="sr-only">
                Email Address
              </label> */}
                <input
                  type={showPassword ? "text" : "password"}
                  id="Password"
                  name="password"
                  autoComplete="password"
                  value={password}
                  required
                  className="text-gray-900 border border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" // value={email}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={() => {
                    setIsPasswordFocused(true);
                    setValidationErrors(false);
                  }}
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-20"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </span>
                {isPasswordFocused && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "0",
                      display: password ? "block" : "none",
                      zIndex: "999", // Ensure the tooltip is above other elements
                    }}
                    className="bg-white text-xs p-2 border rounded drop-shadow-md border-gray-500 z-10"
                  >
                    <div
                      style={{
                        color: passwordValidation.hasLowerCase
                          ? "green"
                          : "red",
                      }}
                    >
                      {passwordValidation.hasLowerCase ? "✓" : "✗"} At least one
                      lowercase letter
                    </div>
                    <div
                      style={{
                        color: passwordValidation.hasUpperCase
                          ? "green"
                          : "red",
                      }}
                    >
                      {passwordValidation.hasUpperCase ? "✓" : "✗"} At least one
                      uppercase letter
                    </div>
                    <div
                      style={{
                        color: passwordValidation.hasDigit ? "green" : "red",
                      }}
                    >
                      {passwordValidation.hasDigit ? "✓" : "✗"} At least one
                      digit
                    </div>
                    <div
                      style={{
                        color: passwordValidation.hasSymbol ? "green" : "red",
                      }}
                    >
                      {passwordValidation.hasSymbol ? "✓" : "✗"} At least one
                      special character
                    </div>
                    <div
                      style={{
                        color: passwordValidation.isLengthValid
                          ? "green"
                          : "red",
                      }}
                    >
                      {passwordValidation.isLengthValid ? "✓" : "✗"} Minimum
                      length of 8 characters
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between mt-5 mb-2">
              <div className="flex text-sm items-center">
                <p className="text-xs text-black-600 hover:text-black-500">
                  By signing up or signing in, you agree to our Terms of Use and
                  have read our Privacy Policy. CNN and its affiliates may use
                  your email address to send updates, ads, and offers. Opt out
                  via Privacy Policy.
                </p>
              </div>
            </div>
            {validationErrors && (
              <div className="text-red-600">
                {Object.keys(validationErrors).map((key) => {
                  if (typeof validationErrors[key] === "object") {
                    return Object.values(validationErrors[key]).map((error) => (
                      <p className="mb-2 text-sm" key={error}>
                        {error}
                      </p>
                    ));
                  }
                  return (
                    <p className="mb-2 text-sm" key={key}>
                      {validationErrors[key]}
                    </p>
                  );
                })}
              </div>
            )}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-md font-bold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none"
              >
                Create Account
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 mb-2">
              <div className="flex text-sm items-center">
                <p className="text-xs text-black-600 hover:text-black-500">
                  To opt-out at any time see options available here
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <AuthFooter />
    </div>
  );
};

export default Register;
