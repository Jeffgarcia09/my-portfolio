import React from "react";
import Image from "next/image";

interface Props {
  title: string[];
  imageSrc: string;
  desc: string;
}

const TechContent = ({ title, imageSrc, desc }: Props) => {
  const image = require('@/src/assets/tech_stack/' + imageSrc);

  return (
    <div className="w-full h-70 rounded-lg hover:bg-[#112240] bg-[#ffffff] p-7 mt-2 flex items-center flex-col justify-center gap-6 group">
      <div className="transform transition-transform group-hover:-translate-y-5">
        <Image
          className="lgl:w-32 lgl:h-32 sm:w-28 sm:h-28 flex flex-col items-center border-[.5px] rounded-full object-cover"
          src={image.default}
          alt="IoT Projects"
        />
      </div>

      <ul className="text-2xl md:text-2xl font-bold text-black flex items-center gap-2 justify-between flex-wrap">
        {title.map((item, i) => (
          <li className="list-none group-hover:text-white" key={i}>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-1xl font-bodyFont group-hover:text-white text-textDark">{desc}</p>
    </div>
  );
};

export default TechContent;

