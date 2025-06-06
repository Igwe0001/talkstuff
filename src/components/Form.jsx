import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { assets } from "../assets/assets";

const Form = () => {
  const [state, handleSubmit] = useForm("xgvarpbq");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      clearMessage();
      return;
    }

    handleSubmit(e).then(() => {
      if (state.succeeded) {
        setMessage("Email sent successfully!");
        setMessageType("success");
        setEmail("");
      } else if (state.errors) {
        setMessage("Failed to send email. Please try again.");
        setMessageType("error");
      }
      clearMessage();
    });
  };

  const clearMessage = () => {
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 3000);
  };

  return (
    <form onSubmit={onSubmit}>
      {/* Add these hidden fields for email identification */}
      <input
        type="hidden"
        name="_subject"
        value="🎉 New VIP Newsletter Signup"
      />

      <div className="bg-[#EFEFF31A] p-4 rounded-md eser">
        <label className="text-white font-inter">
          Sign up now to get an invite and be the first to try it out
        </label>
        <input
          style={{
            backgroundImage: `url(${assets.mail})`,
            backgroundPosition: "10px center",
            backgroundSize: "20px",
            backgroundRepeat: "no-repeat",
          }}
          className="bg-no-repeat pl-10 mt-2 placeholder-gray-400 border rounded-md py-2 w-full"
          placeholder="Enter email"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-2 text-red-600 font-bold"
        />
        {message && (
          <p
            className={`mt-2 font-bold ${
              messageType === "success" ? "text-green" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
      <input
        type="submit"
        value="Send"
        disabled={state.submitting}
        className="mt-4 w-[100px] p-3 rounded-lg transition-all duration-200 ease-in hover:translate-y-1 bg-[#CB4400] outline-1 outline outline-white text-white disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </form>
  );
};

export default Form;
