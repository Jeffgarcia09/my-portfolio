import React from "react";
import Image from "next/image";
import Img from "@/src/assets/j.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
const Middle = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-8 mdl:py-24 flex flex-row gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <div className="lgl:pt-32 sm:pt-10 w-full">
        <div
          className="w-full pb-8 items-center flex flex-col
      md:hidden"
        >
          <Image src={Img} className="w-[350px] h-auto object-cover" alt="image" />
        </div>
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg font-medium tracking-wide sm:text-center lgl:text-left text-black"
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hi, my name is").start();
            }}
          />
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl lgl:text-6xl pt-2 sm:pt-0 sm:text-center lgl:text-left font-titleFont font-semibold flex flex-col text-[#194EB4]"
        >
          Jefferson Garcia
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-base lgl:py-4 sm:text-center lgl:text-left md:max-w-[650px] text-black font-medium"
        >
          An aspiring frontend developer.
        </motion.p>
        <a href="#project"
        className="lgl:flex lgl:flex-col lgl:items-start lgl:pt-0 pt-4 flex flex-col items-center">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-48 h-14 text-sm font-titleFont border border-[#194EB4] rounded-md text-[#194EB4] tracking-wide hover:bg-hoverColor duration-300"
          >
            View My Projects
          </motion.button>
        </a>
      </div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="basis-1/2 hidden md:block"
      >
        <Image
          src={Img}
          className="h-[500px] object-cover overflow-visible"
          alt="image"
        />
      </motion.div>
    </section>
  );
};

export default Middle;
