import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    console.log(e);
  };
  
  const handleEmailChange = (e) => {
    console.log(e);
  };


  return (
    <div className="flex items-start pt-8 pb-10 justify-center bg-red-100">
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
          <div>
            <div className="mb-4">
              <label htmlFor=""></label>
              <input
                type="email"
                id="email-address"
                name="email"
                autoComplete="email"
                className="text-gray-900 border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
