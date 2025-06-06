import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const DownloadForm = () => {
  const [state, handleSubmit] = useForm("xgvarpbq"); // Replace with your Formspree form ID
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name.trim()) {
      setFeedback("Name is required.");
      setFeedbackType("error");
      clearFeedback();
      return;
    }

    if (!emailRegex.test(email)) {
      setFeedback("Please enter a valid email address.");
      setFeedbackType("error");
      clearFeedback();
      return;
    }

    // Submit to Formspree
    await handleSubmit(e);

    if (state.succeeded) {
      setFeedback("You have successfully registered for the waitlist!");
      setFeedbackType("success");
      setName("");
      setEmail("");
      setMessage("");
    } else if (state.errors) {
      setFeedback("Failed to send submission. Please try again.");
      setFeedbackType("error");
    }

    clearFeedback();
  };

  const clearFeedback = () => {
    setTimeout(() => {
      setFeedback("");
      setFeedbackType("");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex py-20 flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Download TalkStuff
        </h1>
        <p className="text-gray-600 mb-6">
          <strong>Discover, Connect, and Trade on TalkStuff!</strong>: Your
          all-in-one app for socializing, dating, and shopping.
        </p>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Register for the Waitlist
        </h2>
        <form onSubmit={onSubmit}>
          {/* Add these hidden fields for better email organization */}
          <input
            type="hidden"
            name="_subject"
            value="🎉 New Waitlist For Download"
          />

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-600 text-sm mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your thoughts or interests"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          {feedback && (
            <p
              className={`mb-4 font-semibold ${
                feedbackType === "success" ? "text-green" : "text-red-600"
              }`}
            >
              {feedback}
            </p>
          )}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-[#EF6924] text-white py-2 rounded-lg hover:bg-[#eb753afd] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? "Submitting..." : "Join Waitlist"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DownloadForm;
