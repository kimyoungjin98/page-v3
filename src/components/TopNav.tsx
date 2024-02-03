"use client";

import Link from "next/link";
import Icon from "./Icon";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TopNav = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState([
    { name: "Home", path: "/" },
    { name: "Introduction", path: "/introduction" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Tech Stack", path: "/tech-stack" },
  ]);

  const menus = () => {
    return menu.map((item) => {
      const active = pathname === item.path ? "text-gray-100" : "text-gray-400";

      return (
        <Link href={item.path} className={active + " font-bold"}>
          {item.name}
        </Link>
      );
    });
  };

  return (
    <>
      <nav className="flex items-center w-full justify-between px-6 py-5 border-b border-neutral-700">
        <div className="flex gap-4 items-center">{menus()}</div>
        <div className="flex gap-2 items-center">
          <Link target="blank" href="https://github.com/kimyoungjin98">
            <Icon
              name="mdi:github"
              className="w-6 h-6 bg-gray-200 cursor-pointer"
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
