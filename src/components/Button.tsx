import { ReactNode } from "react";

export interface ButtonProps {
  type?: "button" | "submit";
  variant?: "solid" | "outline" | "text";
  color?: "primary" | "danger" | "warning" | "success";
  children?: ReactNode;
  onClick?: () => void;
  expand?: boolean;
}

export function Button(props: ButtonProps) {
  const expand = props.expand ? "w-full" : "";

  const setStyle = () => {
    const { variant } = props;

    if (variant === "solid" || !variant) {
      return "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 active:bg-neutral-400";
    }

    if (variant === "text") {
      return "bg-transparent text-gray-700 hover:bg-gray-100";
    }

    if (variant === "outline") {
      return "border border-neutral-200 text-neutral-200 hover:bg-neutral-950";
    }
  };

  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={
        "font-semibold p-4 rounded-md w-max h-max min-w-max outline-none select-none transition-all flex gap-2 items-center justify-center " +
        setStyle() +
        ` ${expand}`
      }
    >
      {props.children}
    </button>
  );
}

export default Button;
