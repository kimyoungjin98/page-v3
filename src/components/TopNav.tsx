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
        <Link
          key={item.path}
          href={item.path}
          className={active + " font-bold"}
        >
          {item.name}
        </Link>
      );
    });
  };

  return (
    <>
      <nav className="z-50 fixed flex items-center w-full p-5 border-b border-neutral-700 backdrop-blur-md bg-black/70">
        <ul className="mx-auto container flex w-full justify-between items-center">
          <div className="flex gap-4 items-center">{menus()}</div>
          <div className="flex gap-2 items-center">
            <Link target="blank" href="https://github.com/kimyoungjin98">
              <Icon
                name="mdi:github"
                className="w-6 h-6 bg-gray-200 cursor-pointer"
              />
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
