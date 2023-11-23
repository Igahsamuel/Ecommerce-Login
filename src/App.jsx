import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Forget from "./components/Forget";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="flex items-center justify-center ecommerce-image h-auto min-h-screen">
        <div>
          <h2 className="flex items-center justify-center gap-3 text-[30px] font-bold py-[18px] text-white">
            <span>
              <img src="/svg/shopify.svg" alt="" className="w-[30px]" />
            </span>
            ShopLift
          </h2>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forget" element={<Forget />} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
    </Router>
  );
}

export default App;
