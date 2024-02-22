"use client";

import { useThemeStore } from "@/hooks/theme.store";
import { cls } from "@/lib/class-name";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface IProps {
  title: string;
  children: React.ReactNode;
  menus?: IMenus[];
}

export interface IMenus {
  name: string;
  path: string;
  query?: {
    [key: string]: string;
  };
}

const PageTemplate = ({ children, menus, title }: IProps) => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = useThemeStore((state) => state.theme === "dark");

  const menuItemStyle = {
    dark: "text-white",
    light: "text-gray-700",
  };

  const menuItem = (item: IMenus) => {
    const query = useSearchParams().get("category");

    const activeClassName =
      item?.query?.category === query ? menuItemStyle[theme] : "text-gray-400 ";
    const className = cls(
      "cursor-pointer hover:underline underline-offset-4",
      activeClassName
    );

    const path = `${item.path}?category=${item.query?.category}`;

    return (
      <Link href={path}>
        <p key={path} className={className}>
          {item.name}
        </p>
      </Link>
    );
  };

  const menuWrapper = () => {
    if (menus && menus.length > 0) {
      return (
        <article
          className={cls(
            "lg:flex hidden flex-col gap-4 lg:min-w-[10rem] mt-[5rem] h-full border-r",
            isDark ? "border-gray-800" : "border-gray-300"
          )}
        >
          {menus.map((item) => menuItem(item))}
        </article>
      );
    }

    return <></>;
  };

  return (
    <section className="flex flex-col lg:flex-row gap-6 w-full h-full lg:p-6 mx-auto container">
      {menuWrapper()}
      <article className="flex flex-col gap-6 p-4 w-full h-full">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-6 w-full">
            <p
              className={cls(
                "text-2xl font-semibold",
                isDark ? "text-gray-200" : "text-gray-700"
              )}
            >
              {title}
            </p>
          </div>
          <div
            className={cls(
              "w-full h-px",
              isDark ? "bg-gray-700" : "bg-gray-300"
            )}
          ></div>
        </div>
        <div className="w-full h-full">{children}</div>
      </article>
    </section>
  );
};

export default PageTemplate;
