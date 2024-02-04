"use client";
import { motion } from "framer-motion";

interface IProps {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const template = (props: IProps) => {
  return (
    <motion.main
      className="w-full h-full mx-auto container mt-[5rem]"
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
      {props.children}
    </motion.main>
  );
};

export default template;
