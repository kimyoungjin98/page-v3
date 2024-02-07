"use client";

import Button from "@/components/Button";
import { useThemeStore } from "@/hooks/theme.store";
import { cls } from "@/lib/class-name";
import Link from "next/link";

const index = () => {
  const themeStore = useThemeStore();
  const headerClass =
    themeStore.theme === "dark" ? "text-gray-300" : "text-gray-900";

  return (
    <section className="flex flex-col gap-6 w-full h-screen justify-center items-center">
      <p
        className={cls(
          "font-extrabold text-center text-7xl text-gray-300 leading-tight",
          headerClass
        )}
      >
        Front-End Developer <br />
        Kim YoungJin Portfolio Page
      </p>
      <p
        className={cls(
          "text-lg font-semibold",
          themeStore.theme === "dark" ? "text-gray-400" : "text-gray-500"
        )}
      >
        With Next.js
      </p>
      <div className="flex flex-col gap-6 items-center w-full max-w-[30rem]">
        <Link href="/portfolio" className="w-full">
          <Button expand>View Portfolio</Button>
        </Link>
        <Link href="/introduction" className="w-full">
          <Button expand variant="outline">
            View Introduction
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default index;
