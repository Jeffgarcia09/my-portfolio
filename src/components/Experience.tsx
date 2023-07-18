import SectionTitle from "./SectionTitle";
import LogicBase from "./Experience File/LogicBase";
import React, { useState } from "react";
import School from "./Experience File/School";

const Experience = () => {
  const [expLogicBase, setExpLogicBase] = useState(true);
  const [expGoogle, setExpGoogle] = useState(false);

  const handleLogicBase = () => {
    setExpLogicBase(true);
    setExpGoogle(false);
  };

  const handleGoogle = () => {
    setExpLogicBase(false);
    setExpGoogle(true);
  };
  return (
    <section className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
      <SectionTitle title="Experience" titleNo="02." />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleLogicBase}
            className={` ${
              expLogicBase
                ? "border-l-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            LogicBase
          </li>
          <li
            onClick={handleGoogle}
            className={` ${
                expGoogle
                  ? "border-l-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
            MSU-IIT
          </li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duartion-300 px-8 font-medium">
            Coming Soon
          </li>
          <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duartion-300 px-8 font-medium">
            Coming Soon
          </li>
        </ul>
        {expLogicBase && <LogicBase />}
        {expGoogle && <School />}
      </div>
    </section>
  );
};

export default Experience;
