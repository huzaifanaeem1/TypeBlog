import React, { ReactNode } from "react";

type btn = "button" | "submit" | "reset";
const Button = ({
  children,
  className,
  type,
}: {
  children: ReactNode;
  className?: string;
  type: btn;
}) => {
  return (
    <button
      type={type}
      className={`flex justify-center text-white font-medium border-0 py-2 px-4 focus:outline-none rounded-lg duration-200 text-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
