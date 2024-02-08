"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "./Icon";
import Theme from "./Theme";
import { useThemeStore } from "@/hooks/theme.store";
import { cls } from "@/lib/class-name";

const TopNav = () => {
  const pathname = usePathname();
  const isDark = useThemeStore((state) => state.theme === "dark");
  const containerTheme = isDark
    ? "bg-black/70 border-neutral-700"
    : "bg-white border-gray-300";
  const containerClassName = cls(
    "z-50 fixed flex items-center w-full p-5 border-b backdrop-blur-md",
    containerTheme
  );

  const iconClassName = cls(
    "w-6 h-6 cursor-pointer",
    isDark ? "bg-gray-200" : "bg-gray-800"
  );

  const [menus] = useState([
    { name: "Home", path: "/" },
    { name: "Introduction", path: "/introduction" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Tech Stack", path: "/tech-stack" },
  ]);

  const menuContainer = () => {
    return menus.map((item) => {
      let activeClass = "";
      if (isDark) {
        activeClass = item.path === pathname ? "text-white" : "text-gray-400";
      } else {
        activeClass =
          item.path === pathname ? "text-gray-900" : "text-gray-400";
      }

      return (
        <Link
          key={item.path}
          href={item.path}
          className={cls(activeClass, "font-bold")}
        >
          {item.name}
        </Link>
      );
    });
  };

  return (
    <>
      <nav className={containerClassName}>
        <ul className="mx-auto container flex w-full justify-between items-center">
          <div className="flex gap-4 items-center">{menuContainer()}</div>
          <div className="flex gap-2 items-center">
            <Link target="blank" href="https://github.com/kimyoungjin98">
              <Icon name="mdi:github" className={iconClassName} />
            </Link>
            <Theme />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
