import React from "react";
import { cn } from "../../utils/cn";

interface ComicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success" | "warning";
}

export const ComicButton = React.forwardRef<HTMLButtonElement, ComicButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const variants = {
      primary: "bg-cyan-400 hover:bg-cyan-300 text-black",
      secondary: "bg-white hover:bg-gray-100 text-black",
      danger: "bg-red-500 hover:bg-red-400 text-white",
      success: "bg-green-400 hover:bg-green-300 text-black",
      warning: "bg-yellow-400 hover:bg-yellow-300 text-black",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "px-6 py-3 font-black uppercase tracking-wider border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
ComicButton.displayName = "ComicButton";
