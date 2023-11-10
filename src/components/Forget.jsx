import React from "react";
import { Link } from "react-router-dom";
import { ShopliftContext } from "../contexts/Shopify";
import { useContext } from "react";

function Forget() {
  const { handleResetPassword, email, setEmail } = useContext(ShopliftContext);
  return (
    <div>
      <div className="md:w-[725px] lg:w-[500px] bg-[rgba(255,255,255,.15)] backdrop-blur px-8 py-4 my-5 rounded-tr-lg rounded-tl-lg rounded-br-lg">
        <div className="text-center my-4">
          <h2 className="font-bold text-white text-[26px]">Forgot Password</h2>
          <p className="text-gray-400">
            Enter your email to reset your password
          </p>
        </div>
        <div className="flex flex-col my-4">
          <label className="text-gray-100">Email Address</label>
          <input
            type="text"
            className="py-3 rounded px-3"
            placeholder="e.g. abcd@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-7">
          <button
            className="text-gray-100 py-3 px-5 bg-orange-400 w-[100%] rounded-br-md rounded-tr-md rounded-tl-md"
            onClick={handleResetPassword}
          >
            RESET PASSWORD
          </button>
        </div>
      </div>
      <div className="text-center">
        <Link to="/">
          <p className="my-5 text-gray-100">Back to login</p>
        </Link>
      </div>
    </div>
  );
}

export default Forget;
