import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "../../utils";

const buttonStyles = cva(
  ["w-full", "rounded-xl", "font-semibold", "focus:outline-none", "disabled:cursor-not-allowed"],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorScheme: {
        primary: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        className: "bg-primary-500 hover:bg-primary-600",
      },
      {
        variant: "outline",
        colorScheme: "primary",
        className: "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "ghost",
        colorScheme: "primary",
        className: "text-primary-600 hover:bg-primary-100",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorScheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = ({ variant, colorScheme, size, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonStyles({ variant, size, colorScheme, className }))} {...props} />
  );
};
