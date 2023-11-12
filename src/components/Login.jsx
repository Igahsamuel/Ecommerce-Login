import React from "react";
import { Link } from "react-router-dom";
import { ShopliftContext } from "../contexts/Shopify";
import { useContext, useState } from "react";

function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLoginSubmit,
    isValid,
    isValidPassword,
    handleEmail,
    handlePassword,
  } = useContext(ShopliftContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <form
        className="md:w-[725px] lg:w-[500px] bg-[rgba(255,255,255,.15)] backdrop-blur px-8 py-4 my-5 rounded-tr-lg rounded-tl-lg rounded-br-lg"
        onSubmit={handleLoginSubmit}
      >
        <div className="text-center my-4">
          <h2 className="font-bold text-white text-[26px]">
            Login to your account
          </h2>
          <p className="text-gray-400">Securely login to your Shoplift</p>
        </div>
        <div className="flex flex-col my-4">
          <label className="text-gray-100">Email or Phone Number</label>
          <input
            type="text"
            className="py-3 rounded px-3 outline-none"
            value={email}
            onChange={handleEmail}
            required
          />
          {!isValid && email && (
            <p className="text-red-500">Please enter a valid email</p>
          )}
        </div>
        <div className="flex flex-col my-4 relative">
          <label className="text-gray-100">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="py-3 rounded px-3 outline-none"
            value={password}
            onChange={handlePassword}
            required
          />
          {password ? (
            <div className="absolute bottom-2 right-2">
              {showPassword ? (
                <img
                  src="/svg/eye.svg"
                  alt=""
                  className="w-[30px]"
                  onClick={handleShowPassword}
                />
              ) : null}
              {!showPassword && (
                <img
                  src="/svg/hideeyes.svg"
                  alt=""
                  className="w-[30px] "
                  onClick={handleShowPassword}
                />
              )}
            </div>
          ) : null}
        </div>
        {!isValidPassword && password && (
          <p className="text-red-500 ">
            password must contain minimum of 8 digits uppercase,lowercase,number
            and symbol
          </p>
        )}
        <div className="my-7">
          <button className="text-gray-100 py-3 px-5 bg-orange-400 w-[100%] rounded-br-md rounded-tr-md rounded-tl-md">
            LOG IN
          </button>
        </div>
      </form>
      <div className="text-center">
        <Link to="/sign-up">
          <p className="my-5 text-gray-100">Don't have an account? Register</p>
        </Link>
        <Link to="forget">
          <p className="my-5 text-gray-100">Forgot Password</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
