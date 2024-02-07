"use client";

import { useThemeStore } from "@/hooks/theme.store";
import { ReactNode } from "react";

export interface ButtonProps {
  type?: "button" | "submit";
  variant?: "solid" | "outline" | "text";
  color?: "primary" | "danger" | "warning" | "success";
  children?: ReactNode;
  onClick?: () => void;
  expand?: boolean;
  className?: string;
}

export function Button(props: ButtonProps) {
  const themeStore = useThemeStore();
  const expand = props.expand ? "w-full" : "w-max";

  const setStyle = () => {
    const { variant } = props;

    if (variant === "solid" || !variant) {
      return themeStore.theme === "dark"
        ? "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 active:bg-neutral-400"
        : "bg-black text-white hover:bg-neutral-800 active:bg-neutral-900";
    }

    if (variant === "text") {
      return themeStore.theme === "dark"
        ? "bg-transparent text-gray-700 hover:bg-gray-100"
        : "bg-transparent text-gray-500 hover:bg-gray-200";
    }

    if (variant === "outline") {
      return themeStore.theme === "dark"
        ? "border border-neutral-200 text-neutral-200 hover:bg-neutral-950 active:bg-neutral-900"
        : "border border-gray-300 text-gray-700 hover:bg-gray-100 active:bg-gray-200";
    }
  };

  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={
        "font-semibold p-4 rounded-md h-max min-w-max outline-none select-none transition-all flex gap-2 items-center justify-center " +
        setStyle() +
        ` ${expand}`
      }
    >
      {props.children}
    </button>
  );
}

export default Button;
