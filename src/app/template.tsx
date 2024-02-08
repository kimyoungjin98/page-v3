"use client";

import TopNav from "@/components/TopNav";
import { THEME_KEY, Theme, useThemeStore } from "@/hooks/theme.store";
import { cls } from "@/lib/class-name";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface IProps {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const template = (props: IProps) => {
  const themeStore = useThemeStore();
  const sectionClassName = cls(
    "flex flex-col w-full h-full overflow-y-auto transition-colors",
    themeStore.theme === "dark"
      ? "bg-black text-gray-200"
      : "bg-white text-gray-700"
  );

  useEffect(() => {
    const theme = localStorage.getItem(THEME_KEY) as Theme;
    if (theme) themeStore.setTheme(theme);
  }, []);

  return (
    <section className={sectionClassName}>
      <TopNav />
      <motion.main
        className="w-full h-full"
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear" }}
      >
        <div className="mx-auto container p-4 h-full mt-[5rem]">
          {props.children}
        </div>
      </motion.main>
    </section>
  );
};

export default template;
