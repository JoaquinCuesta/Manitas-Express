import { TextareaHTMLAttributes } from "react";
import clsx from "clsx";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={clsx("px-4 py-2 border rounded-xl w-full", className)}
    />
  );
}