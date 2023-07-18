import React from "react";
import Image from "next/image";
import Pic from "@/src/assets/img.png";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
      >
        <SectionTitle title="About Me" titleNo="01." />
        <div className="flex flex-col lgl:flex-row gap-16">
          <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur accusantium, ex, saepe dolorum inventore aliquam
              maxime atque quidem temporibus asperiores corrupti. Incidunt ut
              hic deserunt eius aut magni debitis ab.
            </p>
            <p>
              Here are a few technologies I have been working with recently:
            </p>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Laravel
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                HTML & CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                React{" "}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Tailwindcss
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Styled-Components
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                WordPress
              </li>
            </ul>
          </div>
          <div className=" lgl:border-r-8 border-b-4 border-textGreen hover:-translate-x-2 hover:-translate-y-2 transition-transform duration-300 grid place-content-end lgl:w-[500px]">
            <Image
              src={Pic}
              className="ml-32 w-full h-auto object-cover "
              alt="image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
