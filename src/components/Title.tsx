"use client";

import { useThemeStore } from "@/hooks/theme.store";
import Icon from "./Icon";
import { cls } from "@/lib/class-name";

interface IProps {
  children: React.ReactNode;
  icon?: string;
  emoji?: string;
}

const Title = ({ icon, children, emoji }: IProps) => {
  const themeStore = useThemeStore();
  const textColor =
    themeStore.theme === "dark" ? "text-gray-200" : "text-gray-700";

  return (
    <div className="flex gap-2 items-center">
      {icon ? <Icon name={icon} className="w-8 h-8 bg-gray-200" /> : <></>}
      {emoji ? <p className="text-2xl mb-1">{emoji}</p> : <></>}
      <p className={cls("text-xl font-semibold", textColor)}>{children}</p>
    </div>
  );
};

export default Title;
