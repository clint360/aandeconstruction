import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  bgColor?: string; 
  textColor?: string; 
  borderColor?: string; 
  icon?: ReactNode;
  onClick?: () => void;
}

export default function Button({
  text,
  bgColor = "bg-blue-500",
  textColor = "text-white",
  borderColor,
  icon,
  onClick,
}: ButtonProps) {
  // Check if borderColor is provided
  const buttonClass = borderColor
    ? `border ${borderColor} ${bgColor} ${textColor} hover:${borderColor} hover:bg-transparent`
    : `${bgColor} ${textColor}`;

  return (
    <button
      className={`flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium transition duration-200 md:hover:scale-105 ${buttonClass}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}
