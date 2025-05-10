import { InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={clsx("px-4 py-2 border rounded-xl w-full", className)}
    />
  );
}