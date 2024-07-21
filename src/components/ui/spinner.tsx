import React from "react";

interface SpinnerProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "accent" | "white";
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "medium",
  color = "primary",
}) => {
  const sizeClasses = {
    small: "w-4 h-4 border-2",
    medium: "w-8 h-8 border-3",
    large: "w-12 h-12 border-4",
  };

  const colorClasses = {
    primary: "border-blue-500",
    secondary: "border-gray-500",
    accent: "border-purple-500",
    white: "border-white",
  };

  return (
    <div className="inline-block">
      <div
        className={`
          animate-spin
          rounded-full
          border-solid
          border-t-transparent
          ${sizeClasses[size]}
          ${colorClasses[color]}
        `}
      ></div>
    </div>
  );
};
