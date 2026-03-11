import React from "react";
import { cn } from "../../utils/cn";

interface ComicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "yellow" | "cyan" | "pink" | "green";
}

export const ComicCard = React.forwardRef<HTMLDivElement, ComicCardProps>(
  ({ className, variant = "white", ...props }, ref) => {
    const variants = {
      white: "bg-white",
      yellow: "bg-yellow-300",
      cyan: "bg-cyan-300",
      pink: "bg-pink-300",
      green: "bg-green-300",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
ComicCard.displayName = "ComicCard";
