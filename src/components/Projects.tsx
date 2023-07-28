import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import Fisherly from "@/src/assets/fish.png";
import Money from "@/src/assets/monetcache.png";
import Folio from "@/src/assets/folio.png";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <div className="flex flex-col items-center">
        <h2 className="font-titleFont text-[#194EB4] text-2xl font-semibold">
        Project Showcase
        </h2>
        <p className="text-base text-black font-medium">Things I have built</p>
      </div>
      
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/*First Project*/}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href=""
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full rounded-md object-contain"
                  src={Fisherly}
                  alt="Fisherly"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <div>
                <p className="font-titleFont text-black text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl text-[#194EB4] font-bold">
                  Fisherly E-commerce Website
                </h3>
              </div>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              An innovative e-commerce website dedicated to selling fresh fish and delivering it right to your doorstep. This platform aims to make fish purchasing more convenient for the vibrant community of Iligan City, eliminating the need to visit crowded markets during pandemic.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-black">
                <li className="flex items-center gap-1 font-medium text-black hover:text-textGreen cursor-pointer duration-300">
                  PHP
                </li>
                <li className="flex items-center gap-1 font-medium text-black hover:text-textGreen cursor-pointer duration-300">
                  HTML & CSS
                </li>
                <li className="flex items-center gap-1 font-medium text-black hover:text-textGreen cursor-pointer duration-300">
                  MySQL
                </li>
                <li className="flex items-center gap-1 font-medium text-black hover:text-textGreen cursor-pointer duration-300">
                  Bootstrap
                </li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen text-black duration-300"
                  href="https://github.com/Jeffgarcia09/Fisherly-E-commerce-Website"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen text-black duration-300"
                  href="/"
                  target="_blank"
                >
                  <AiOutlineYoutube />
                </a>
                <a
                  className="hover:text-textGreen text-black duration-300"
                  href="https://drive.google.com/file/d/1tt51PMtJ6gvhuUvkfQZZApqHYTitVvZ5/view?usp=sharing"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*Second Project*/}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/Jeffgarcia09/MoneyCache-System"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full rounded-md object-contain"
                src={Money}
                alt="MoneyCache"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-black text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl text-textGreen font-bold">MoneyCache System</h3>
            </div>
            <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-md">
            During my OJT 
            <a className="text-[#c4ff3c]"> @LogicBase Interactive Ent.</a>, we developed a cutting-edge Customer Relation Management System. Throughout this invaluable experience, had the opportunity to hone my skills, especially in utilizing modern frameworks like React, and further refined my expertise in styling.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li className="flex items-center gap-1 font-medium text-black hover:text-textGreen cursor-pointer duration-300">
                Laravel
              </li>
              <li className="flex items-center gap-1 font-medium text-black hover:text-textGreen cursor-pointer duration-300">
                Next.js
              </li>
              <li className="flex items-center gap-1 font-medium text-black hover:text-textGreen cursor-pointer duration-300">
                Styled-components
              </li>
              <li className="flex items-center gap-1 font-medium text-black hover:text-textGreen cursor-pointer duration-300">
                Vite React
              </li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen text-black duration-300"
                href="https://github.com/Jeffgarcia09/MoneyCache-System"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen text-black duration-300"
                href="/"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen text-black duration-300"
                href="/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/*3rd Project*/}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href=""
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full rounded-md object-contain"
                  src={Folio}
                  alt="Fisherly"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <div>
                <p className="font-titleFont text-black text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl text-[#194EB4] font-bold">
                  My Personal Portfolio
                </h3>
              </div>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Welcome to my personal website portfolio, where I am thrilled to showcase a collection of my most remarkable projects and invaluable experiences. As you explore this platform, you'll gain insights into my journey as a passionate individual, delving into the realms of creativity and innovation.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-black">
                <li className="flex items-center gap-1 font-medium text-black hover:text-textGreen cursor-pointer duration-300">
                  Next JS
                </li>
                <li className="flex items-center gap-1 font-medium text-black hover:text-textGreen cursor-pointer duration-300">
                  TailwindCSS
                </li>
                <li className="flex items-center gap-1 font-medium text-black hover:text-textGreen cursor-pointer duration-300">
                  EmailJS
                </li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen text-black duration-300"
                  href="https://github.com/Jeffgarcia09/Fisherly-E-commerce-Website"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen text-black duration-300"
                  href="/"
                  target="_blank"
                >
                  <AiOutlineYoutube />
                </a>
                <a
                  className="hover:text-textGreen text-black duration-300"
                  href="https://drive.google.com/file/d/1tt51PMtJ6gvhuUvkfQZZApqHYTitVvZ5/view?usp=sharing"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
