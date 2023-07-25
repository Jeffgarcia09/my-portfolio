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
        <SectionTitle title="About Me" />
        <div className="flex flex-col lgl:flex-row gap-16">
          <div className="w-full text-base text-black font-medium flex flex-col gap-4">
            <p className="indent-8 text-justify">
              I recently graduated from MSU-IIT with a degree of BS Computer
              Application major in Internet of Things. I completed several projects that showcased my ability,
              This project strengthened my collaboration skills and deepened my
              knowledge of the entire web development process. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque necessitatibus libero iusto rerum, sapiente et pariatur nemo quos, rem nisi voluptas. Debitis voluptatem neque hic perferendis voluptatibus repudiandae sit?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
