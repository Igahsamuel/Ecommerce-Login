import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ShopliftContext = createContext();

export default function ShopliftProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [informationGotten, setInformationGotten] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleRegistration = (e) => {
    e.preventDefault();
    const registration = toast.success(
      "Thanks for creating an account with us! Please Login"
    );
    const items = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      promoCode: promoCode,
      informationGotten: informationGotten,
    };
    console.log(items);
    if (registration) {
      setName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setPromoCode("");
      setInformationGotten("");
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const welcome = toast.success("Welcome back");
    if (welcome) {
      setEmail("");
      setPassword("");
    }
    console.log(email, password);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (email) {
      const success = toast.success(
        "Check your email and follow the instructions"
      );
      if (success) {
        setEmail("");
      }
      console.log(email);
    } else {
      null;
    }
  };

  const handleInvalidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmail = (e) => {
    const checkEmail = e.target.value;
    setEmail(checkEmail);
    setIsValid(handleInvalidEmail(checkEmail));
  };

  const handleInvalidPassword = (password) => {
    const passwordRegex =
      /^(?=.*?[A-z])(?=.*?[a-z])(?=.*?[1-9])(?=.*?[@#$%-+]).{8,30}$/;
    return passwordRegex.test(password);
  };

  const handlePassword = (e) => {
    const checkPassword = e.target.value;
    setPassword(checkPassword);
    setIsValidPassword(handleInvalidPassword(checkPassword));
  };

  return (
    <ShopliftContext.Provider
      value={{
        email,
        name,
        phoneNumber,
        promoCode,
        informationGotten,
        password,
        setPassword,
        setEmail,
        setName,
        setPromoCode,
        setPhoneNumber,
        setInformationGotten,
        handleLoginSubmit,
        handleResetPassword,
        handleRegistration,
        handleEmail,
        isValid,
        isValidPassword,
        handlePassword,
      }}
    >
      {children}
    </ShopliftContext.Provider>
  );
}
