import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopliftContext } from "../contexts/Shopify";

function SignUp() {
  const {
    name,
    email,
    password,
    phoneNumber,
    promoCode,
    informationGotten,
    setName,
    setEmail,
    setPassword,
    setPhoneNumber,
    setPromoCode,
    setInformationGotten,
    handleRegistration,
    isValid,
    isValidPassword,
    handleEmail,
    handlePassword,
  } = useContext(ShopliftContext);

 

  return (
    <div>
      <form className="md:w-[725px] lg:w-[500px] bg-[rgba(255,255,255,.15)] backdrop-blur px-8 py-4 my-5 rounded-tr-lg rounded-tl-lg rounded-br-lg">
        <div className="text-center my-4">
          <h2 className="font-bold text-white text-[26px]">
            Create a Secure Account
          </h2>
          <p className="text-gray-400">
            Welcome to the future of online shopping
          </p>
        </div>
        <div className="flex flex-col my-4">
          <label className="text-gray-100">Full Name</label>
          <input
            type="text"
            className="py-3 rounded px-3 outline-none"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-4">
          <label className="text-gray-100">Email Address</label>
          <input
            type="text"
            className="py-3 rounded px-2 outline-none"
            placeholder="Email Address"
            value={email}
            onChange={handleEmail}
          />
          {!isValid && email && (
            <p className="text-red-400">please enter a valid Email</p>
          )}
        </div>
        <div className="flex flex-col my-4">
          <label className="text-gray-100">Phone Number</label>

          <input
            type="text"
            className="py-3 rounded px-2 outline-none"
            placeholder="phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-4">
          <label className="text-gray-100">Password</label>
          <input
            type="password"
            className="py-3 rounded px-2 outline-none"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        {!isValidPassword && password && (
          <p className="text-red-500">
            password must contain minimum of 8 digits uppercase,lowercase,number
            and symbol
          </p>
        )}

        <div className="flex flex-col my-4">
          <label className="text-gray-100">
            Referrer Phone or Promo Code (Optional)
          </label>
          <input
            type="text"
            className="py-3 rounded px-2 outline-none"
            placeholder="Referrer Phone Or Code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
        </div>
        <div>
          <label className="text-gray-100">
            How Did You Hear About Us ? (Optional)
          </label>
          <select
            className="flex flex-col my-4 w-[100%] rounded-md py-3 px-3 text-gray-400 outline-none"
            value={informationGotten}
            onChange={(e) => setInformationGotten(e.target.value)}
          >
            <option value="">Click To Select</option>
            <option value="facebook">FaceBook</option>
            <option value="twitter">Twitter</option>
            <option value="instagram">Instagram</option>
            <option value="family">Family/Friends/CoWorker Referral</option>
            <option value="googleSearch">Google Search</option>
            <option value="googlePlayStore">Google PlayStore</option>
            <option value="onLineBlogs">Online Blogs</option>
            <option value="oldNewsPapers">Old NewsPapers</option>
            <option value="event">At an event</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="my-7">
          <button
            className="text-gray-100 py-3 px-5 bg-orange-400 w-[100%] rounded-br-md rounded-tr-md rounded-tl-md"
            onClick={handleRegistration}
          >
            Create Account
          </button>
        </div>
      </form>
      <div className="text-center">
        <Link to="/">
          <p className="my-5 text-gray-100">Already have an account? Log In</p>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
