import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import { github, linkedinIcon, emailIcon } from "../assets";

const Contact = () => {
  return (
    <div className={`flex flex-col gap-10 overflow-hidden justify-center items-center`}>
      {/* Move EarthCanvas above the Contact div */}
      <div style={{height:'50vh'}}>
      <EarthCanvas />
      </div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='bg-black-100 p-8 rounded-2xl w-full max-w-[100vw] mx-auto'
      >
        <p className="text-white font-medium mb-4 text-center">Thank you for visiting</p>
        
        {/* Icons */}
        <div className="flex flex-row gap-4 mt-6 justify-center">
          <a href="https://www.linkedin.com/in/kashishpgandhi/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:opacity-80 transition duration-200" />
          </a>
          <a href="https://github.com/Kashish-G" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="w-8 h-8 hover:opacity-80 transition duration-200" />
          </a>
          <a href="mailto:kashishgandhi6112003@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={emailIcon} alt="Email" className="w-8 h-8 hover:opacity-80 transition duration-200" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
