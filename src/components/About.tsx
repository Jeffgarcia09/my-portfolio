import React, { useState } from "react";
import Image from "next/image";
import Pic from "@/src/assets/img.png";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  const [showMore, setShowMore] = useState(false);

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
              Allow me to introduce myself as Jefferson Marchan Garcia, a
              23-year-old graduate from Mindanao State University – Iligan
              Institute of Technology with a Bachelor's degree in Computer
              Application, specializing in Internet of Things. My passion for
              design has inspired me to pursue a career as a frontend web
              developer.
            </p>
            <h3 className="font-titleFont text-[#000] text-xl flex items-center">
              My Journey:
            </h3>
            <p className="indent-8 text-justify">
              My journey into the world of web development started when I was
              fascinated by the way websites could bring ideas to life and
              connect people from around the globe. I embarked on my learning
              path by immersing myself in various online courses. This allowed
              me to build a solid foundation, and I soon discovered my true
              passion.
            </p>
            {showMore && (
              <>
                <h3 className="font-titleFont text-[#000] text-xl flex items-center">
                  I Love What I Do:
                </h3>
                <p className="indent-8 text-justify">
                  Being a frontend web developer gives me the opportunity to
                  combine my passion for technology and design. I find great
                  satisfaction in turning complex problems into elegant
                  solutions that not only meet but exceed expectations.
                  Witnessing users interact with something I've built and
                  knowing that it positively impacts their lives motivates me to
                  continuously improve and stay updated with the latest industry
                  trends.
                </p>
                <h3 className="font-titleFont text-[#000] text-xl flex items-center">
                  Let's Connect:
                </h3>
                <p className="indent-8 text-justify">
                  I'm always eager to expand my network and collaborate on
                  exciting projects. Whether you're looking for a frontend web
                  developer to join your team or have a project in mind, I'd
                  love to hear from you! Let's connect and create something
                  amazing together.
                </p>
              </>
            )}
                  <div className="flex">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className=" text-textGreen no-underline hover:underline inline-flex relative cursor-pounter h-7 overflow-x-hidden group"
          >
            Read Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="text-textGreen inline-flex relative no-underline hover:underline cursor-pounter h-7 overflow-x-hidden group"
          >
            Read More
          </button>
        )}
      </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
