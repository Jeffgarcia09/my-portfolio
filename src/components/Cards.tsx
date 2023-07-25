import React, { useState } from "react";
import CardContent from "./CardContent";
import { motion } from "framer-motion";
const Cards = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-container mx-auto lgl:px-20 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont text-textGreen font-semibold">
          IoT-Based Projects
        </h2>
        <p className="text-base font-medium text-black">view the archive</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <CardContent
          title="Smart LED bulbs | IoT System"
          imageSrc="IoTbulb.jpg"
          desc="An innovative smart bulb that can be conveniently controlled wirelessly through your smartphone with the help of the esp8266 Wi-Fi module"
          listitem={["Home Asistant", "Arduino Uno", "Sinric Pro", "C++"]}
          link="https://youtu.be/rrJ0gVB3xV8"
        />
        <CardContent
          title="Surveillance Cam | AI System"
          imageSrc="object detection.jpg"
          desc="Object detection in surveillance cameras enables real-time detection, enhancing security by automatically recognizing suspicious activities and potential threats."
          listitem={["Yolo v5", "ESP32 CAM", "Python", "OpenCV"]}
          link="https://github.com/Jeffgarcia09/Object-Detection"
        />
        <CardContent
          title="Remote Car | IoT System"
          imageSrc="car2.png"
          desc="A car that
          can navigate a longer distance. With the help of the esp8266 Wi-Fi module, it can be controlled
          wherever the user, as long as there is an internet connection."
          listitem={["Blynk App", "Arduino Uno", "Sensors" , "C++"]}
          link="https://drive.google.com/file/d/1izTjkl265qPPtCH7JTW2AeVn9NqOTsr8/view?usp=sharing"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <CardContent
                title="IFFWGMS | Thesis"
                imageSrc="4.png"
                desc="The IoT-based Fish
                Feeding and “Tarol” Water Gate Management System for Tidal Dependent Aquaculture 
                (IFFWGMS) that employs a Blynk application. This system addresses the challenges faced 
                by farmers in large-scale tidal dependent fish farms, such as manually disposing of pellets 
                and lifting the “tarol” in water gates"
                listitem={["Blynk App", "Arduino Uno", "C++", "Sensors"]}
                link="https://youtu.be/XsdRTKBGU2E"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <CardContent
                title="Coming Soon | System"
                imageSrc="coming soon.jpg"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita deserunt quasi suscipit vel veniam dolore impedit doloremque voluptas Reiciendis expedita deserunt quasi suscipit vel veniamReiciendis expedita deserunt quasi suscipit vel veniamReiciendis expedita deserunt quasi suscipit vel veniam."
                listitem={["Home Asistant", "Sinric Pro", "C++"]}
                link=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <CardContent
                title="Coming Soon | System"
                imageSrc="coming soon.jpg"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita deserunt quasi suscipit vel veniam dolore impedit doloremque voluptas.Reiciendis expedita deserunt quasi suscipit vel veniamReiciendis expedita deserunt quasi suscipit vel veniamReiciendis expedita deserunt quasi suscipit vel veniam "
                listitem={["Home Asistant", "Sinric Pro", "C++"]}
                link=""
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
