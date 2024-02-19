"use client";

import { useThemeStore } from "@/hooks/theme.store";
import Icon from "./Icon";
import { cls } from "@/lib/class-name";

type Props = {
  children?: React.ReactNode;
  icon?: string;
};

const Badge = ({ children, icon }: Props) => {
  const isDark = useThemeStore((state) => state.theme === "dark");
  const wrapperClass = isDark
    ? "bg-neutral-800 text-neutral-200"
    : "bg-neutral-200 text-neutral-800 font-semibold";
  const iconClass = isDark ? "bg-neutral-200" : "bg-neutral-800";

  return (
    <div
      className={cls(
        "flex gap-2 items-center w-max px-2 py-1 text-sm rounded-lg",
        wrapperClass
      )}
    >
      {icon && <Icon name={icon} className={cls("size-4", iconClass)} />}
      <span>{children}</span>
    </div>
  );
};

export default Badge;
