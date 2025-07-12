import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export const Button = ({ ...props }: ButtonProps) => {
  return <button className="text-indigo-500" {...props} />;
};
