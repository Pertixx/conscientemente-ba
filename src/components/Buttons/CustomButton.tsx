import { twMerge } from "tailwind-merge";
import { ElementType } from "react";

type ButtonVariant = 'default' | 'shimmer' | 'basic';

interface CustomButtonProps {
  onClick?: () => void;
  wrapperClassName?: string;
  className?: string;
  text: string;
  icon?: ElementType;
  variant?: ButtonVariant;
}

export default function CustomButton({
  onClick, 
  wrapperClassName,
  className,
  text,
  icon: Icon,
  variant = 'default'
}:  CustomButtonProps) {
  const getVariantClasses = (variant: ButtonVariant) => {
    switch (variant) {
      case 'shimmer':
        return {
          wrapper: "inline-flex h-12",
          button: "animate-shimmer gap-2 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors",
          span: "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6ee7b7_0%,#6ee7b7_50%,#6ee7b7_100%)]"
        };
      case 'basic':
        return {
          wrapper: "relative inline-flex h-12 overflow-hidden rounded-full p-[1px]",
          button: "inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 backdrop-blur-3xl",
          span: "absolute"
        }
      default:
        return {
          wrapper: "relative inline-flex h-12 overflow-hidden rounded-full p-[1px]",
          button: "inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 backdrop-blur-3xl",
          span: "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6ee7b7_0%,#6ee7b7_50%,#6ee7b7_100%)]"
        };
    }
  };

  const variantClasses = getVariantClasses(variant);

  return (
    <button 
      onClick={onClick} 
      className={twMerge(variantClasses.wrapper, wrapperClassName)}
    >
      <span className={variantClasses.span} />
      <div className={twMerge(variantClasses.button, className)}>
        <span className="font-semibold">{text}</span>
        {Icon && <Icon className="size-4" />}
      </div>
    </button>
  );
}