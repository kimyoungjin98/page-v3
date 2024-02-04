import Button from "@/components/Button";
import Link from "next/link";

const index = () => {
  return (
    <section className="flex flex-col gap-6 w-full h-screen justify-center items-center">
      <p className="font-extrabold text-center text-7xl text-gray-300 leading-tight">
        Front-End Developer <br />
        Kim YoungJin Portfolio Page
      </p>
      <p className="text-lg font-semibold text-gray-400">With Next.js</p>
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
