import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
const LogicBase = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">OJT: Frontend Developer <span className="text-textGreen tracking-wide">@LogicBase Ent.</span></h3>
      <p className="text-sm mt-1 font-medium text-textDark">Feb 13, 2023 - June 14, 2023 </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1"><TiArrowForward/></span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati voluptatum commodi dolor, saepe earum eaque quasi expedita soluta vero architecto eligendi rem iure excepturi ratione at adipisci sunt, consequuntur mollitia.
        </li>
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1"><TiArrowForward/></span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati voluptatum commodi dolor, saepe earum eaque quasi expedita soluta vero architecto eligendi rem iure excepturi ratione at adipisci sunt, consequuntur mollitia.
        </li>
      </ul>
    </motion.div>
  );
};

export default LogicBase;
