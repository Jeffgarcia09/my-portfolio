import React from "react";
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import Image from "next/image";

interface Props{
    title: string;
    desc: string;
    listitem: string[];
    link: string;
    imageSrc: string;
    
}

const CardContent = ({ title, desc, listitem, link, imageSrc }: Props) => {

  const image = require('@/src/assets/' + imageSrc);

  return (
    
    <a href={link} target="_blank">
      <div className="w-full h-90 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 group">
        <div className="flex justify-between items-center">
          <Image className="w-full h-[206.86px] rounded-md" src={image.default} alt="IoT Projects" />
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">{title}</h2>
          <p className="text-sm mt-3">{desc}</p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {listitem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default CardContent;

