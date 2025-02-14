import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  bgColor?: string; // Custom background color
  textColor?: string; // Custom text color
  icon?: ReactNode; // Optional icon
  onClick?: () => void;
}

export default function Button({
  text,
  bgColor = "bg-blue-500",
  textColor = "text-white",
  icon,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium transition duration-200 md:hover:scale-105 ${bgColor} ${textColor}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}
