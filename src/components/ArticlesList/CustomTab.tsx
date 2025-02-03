import { twMerge } from "tailwind-merge";

interface CustomTabProps {
  text: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function CustomTab({ text, onClick, isActive }: CustomTabProps) {
  const activeStyles = isActive ? 'bg-gray-100 text-black font-bold' : 'hover:bg-gray-200 font-semibold';

  return (
    <button
      className={twMerge(activeStyles, "px-6 py-4 rounded-lg transition-all")}
      onClick={onClick}
    >
      {text}
    </button>
  )
}