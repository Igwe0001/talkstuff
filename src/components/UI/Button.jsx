import React from "react";

const Button = ({ variant, className, children }) => {
  const baseStyles =
    "p-3 rounded-lg transition-all duration-200 ease-in hover:translate-y-1"; // Base styles for both variants
  const blue = "bg-[#EF6924] text-white"; // Blue variant styles
  const white = "bg-white text-gray-700 outline-[#E2E4E9] outline outline-1"; // White variant styles

  const variantStyles = variant === "white" ? white : blue;

  return (
    <button className={`${baseStyles} ${variantStyles} ${className || ""}`}>
      {children}
    </button>
  );
};

export default Button;
