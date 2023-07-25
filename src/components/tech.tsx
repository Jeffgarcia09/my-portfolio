import React from "react";
import Tech_Content from "@/src/components/techContent";
import Image from "next/image";
import HTML from "@/src/assets/tech_stack/htmllogo.png";
import VS from "@/src/assets/tech_stack/vs.png";
import CSS from "@/src/assets/tech_stack/css.png";
import NODE from "@/src/assets/tech_stack/nodejs.png";

const tech = () => {
  return (
    <>
    <div 
    id="tech" className="max-w-container mx-auto lgl:px-20 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont text-textGreen font-semibold">
          My Tech Stack
        </h2>
        <p className="text-base font-medium text-black">
          List of technologies that I'm working with.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-5 gap-2 mt-10 lgl:px-10">
        <Tech_Content title={["React JS"]} imageSrc="react-logo.jpg" desc="Client Side" />
        <Tech_Content title={["Next JS"]} imageSrc="nxtjs.png" desc="Client Side" />
        <Tech_Content title={["TailwindCSS"]} imageSrc="tailwind.png" desc="Styling"/>
        <Tech_Content title={["Laravel"]} imageSrc="Laravel.jpg" desc="Backend"/>
        <Tech_Content title={["TypeScript"]} imageSrc="ts.png" desc="Client Side"/>
        <Tech_Content title={["Postman"]} imageSrc="postman.jpg" desc="API Testing"/>


        <div className="w-full h-70 rounded-lg bg-[#ffffff] hover:bg-[#112240] p-7 mt-2 flex items-center flex-col justify-center gap-6 group">
          <div className="transform transition-transform group-hover:-translate-y-5">
            <Image
              className="w-32 h-32 flex flex-col items-center object-cover"
              src={VS}
              alt="vscode logo"
            />
          </div>

          <ul className="text-4xl md:text-2xl font-bold text-black flex items-center gap-2 justify-between flex-wrap">
            <li className="list-none group-hover:text-white">VSCode</li>
          </ul>
          <p className="text-1xl font-bodyFont group-hover:text-white text-textDark">Code Editor</p>
        </div>
        
        <div className="w-full h-70 rounded-lg bg-[#ffffff] hover:bg-[#112240] p-7 mt-2 flex items-center flex-col justify-center gap-6 group">
          <div className="transform transition-transform group-hover:-translate-y-5">
            <Image
              className="w-32 h-32 flex flex-col items-center object-cover"
              src={HTML}
              alt="vscode logo"
            />
          </div>

          <ul className="text-4xl md:text-2xl font-bold text-black flex items-center gap-2 justify-between flex-wrap">
            <li className="list-none group-hover:text-white">HTML</li>
          </ul>
          <p className="text-1xl font-bodyFont group-hover:text-white text-textDark">Frontend</p>
        </div>

        <div className="w-full h-70 rounded-lg bg-[#ffffff] hover:bg-[#112240] p-7 mt-2 flex items-center flex-col justify-center gap-6 group">
          <div className="transform transition-transform group-hover:-translate-y-5">
            <Image
              className="w-[107px] h-auto flex flex-col items-center object-cover"
              src={CSS}
              alt="vscode logo"
            />
          </div>

          <ul className="text-4xl md:text-2xl mt-[7px] font-bold text-black flex items-center gap-2 justify-between flex-wrap">
            <li className="list-none group-hover:text-white">CCS</li>
          </ul>
          <p className="text-1xl font-bodyFont group-hover:text-white text-textDark">Visual Appearance</p>
        </div>


        <div className="w-full h-70 rounded-lg bg-[#ffffff] hover:bg-[#112240] p-7 mt-2 flex items-center flex-col justify-center gap-6 group">
          <div className="transform transition-transform group-hover:-translate-y-5">
            <Image
              className="w-32 h-[135px] flex flex-col items-center object-cover"
              src={NODE}
              alt="vscode logo"
            />
          </div>

          <ul className="text-4xl md:text-2xl font-bold text-black flex items-center gap-2 justify-between flex-wrap">
            <li className="list-none group-hover:text-white">Node JS</li>
          </ul>
          <p className="text-1xl font-bodyFont group-hover:text-white text-textDark">Server Environment</p>
        </div>




      </div>
    </div>
    </>
  );
};

export default tech;
