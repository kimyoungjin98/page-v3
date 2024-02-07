"use client";

import { cls } from "@/lib/class-name";
import { usePathname } from "next/navigation";

interface IProps {
  title: string;
  children: React.ReactNode;
  menus?: IMenus[];
}

export interface IMenus {
  name: string;
  path: string;
}

const PageTemplate = ({ children, menus, title }: IProps) => {
  const path = usePathname();

  const menuItem = (item: IMenus) => {
    const activeClassName =
      item.path === path ? "text-white" : "text-gray-400 ";
    const className = cls(
      "cursor-pointer hover:underline underline-offset-4",
      activeClassName
    );

    return (
      <p key={item.path} className={className}>
        {item.name}
      </p>
    );
  };

  const menuWrapper = () => {
    if (menus && menus.length > 0) {
      return (
        <article className="flex flex-col gap-4 min-w-[10rem] mt-[5rem] h-full border-r border-gray-800">
          {menus.map((item) => menuItem(item))}
        </article>
      );
    }

    return <></>;
  };

  return (
    <section className="flex gap-6 w-full h-full p-6 mx-auto container">
      {menuWrapper()}
      <article className="flex flex-col gap-6 p-4 w-full h-full">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-6 w-full">
            <p className="text-gray-200 text-2xl font-semibold">{title}</p>
          </div>
          <div className="w-full h-px bg-gray-700"></div>
        </div>
        <div className="w-full h-full">{children}</div>
      </article>
    </section>
  );
};

export default PageTemplate;
