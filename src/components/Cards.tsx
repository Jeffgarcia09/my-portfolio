import React, { useState } from "react";
import CardContent from "./CardContent";
import { motion } from "framer-motion";

const Cards = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-container mx-auto lgl:px-20 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Nothworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <CardContent
          title="Smart LED bulbs | IoT System"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita deserunt quasi suscipit vel veniam dolore impedit doloremque voluptas."
          listitem={["Home Asistant", "Sinric Pro", "C++"]}
          link="goole.com"
        />
        <CardContent
          title="Smart LED bulbs | IoT System"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita deserunt quasi suscipit vel veniam dolore impedit doloremque voluptas."
          listitem={["Home Asistant", "Sinric Pro", "C++"]}
          link="goole.com"
        />
        <CardContent
          title="Smart LED bulbs | IoT System"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita deserunt quasi suscipit vel veniam dolore impedit doloremque voluptas."
          listitem={["Home Asistant", "Sinric Pro", "C++"]}
          link="goole.com"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <CardContent
                title="Smart LED bulbs | IoT System"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita deserunt quasi suscipit vel veniam dolore impedit doloremque voluptas."
                listitem={["Home Asistant", "Sinric Pro", "C++"]}
                link="goole.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <CardContent
                title="Smart LED bulbs | IoT System"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita deserunt quasi suscipit vel veniam dolore impedit doloremque voluptas."
                listitem={["Home Asistant", "Sinric Pro", "C++"]}
                link="goole.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <CardContent
                title="Smart LED bulbs | IoT System"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita deserunt quasi suscipit vel veniam dolore impedit doloremque voluptas."
                listitem={["Home Asistant", "Sinric Pro", "C++"]}
                link="goole.com"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Cards;
