"use client";

import { useThemeStore } from "@/hooks/theme.store";
import { cls } from "@/lib/class-name";
import { TeckStackItemChild } from "./ItemChild";

interface IProps {
  children: React.ReactNode;
  icon?: string;
  url?: string;
  description?: string;
}

const TechStackItem = ({ children, icon, url, description }: IProps) => {
  const transition = "transition-all duration-150";
  const isDark = useThemeStore((state) => state.theme === "dark");

  const wrapperClass: any = [
    "group flex flex-col rounded-md border gap-4 h-max hover:text-lg hover:p-4 p-2 text-sm",
    isDark
      ? "border-neutral-800 text-white bg-neutral-900 hover:bg-white hover:text-neutral-800"
      : "border-neutral-300 text-gray-700 hover:bg-gray-200 hover:text-neutral-800 bg-transparent",
    transition,
  ];

  const iconClass = cls("group-hover:size-8 size-6", transition);
  const textClass = cls("font-bold group-hover:text-neutral-800", transition);

  return (
    <article className={cls(wrapperClass)}>
      <div className="flex gap-4 items-center">
        <img src={icon} className={iconClass} />
        <div className="flex flex-col gap-2">
          <p className={textClass}>{children}</p>
        </div>
      </div>
      <div className="group-hover:block hidden">
        <TeckStackItemChild url={url} description={description} />
      </div>
    </article>
  );
};

export default TechStackItem;
