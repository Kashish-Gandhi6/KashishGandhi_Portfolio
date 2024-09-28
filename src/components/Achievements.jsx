import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from "../utils/motion";
import { datahack, codeodyessey,datahack2,technovate,uiux,xcon,bplan,worldtopper,schooltopper } from "../assets";

// constants.js
export const achievements = [
  {
    title: "DataHack 1.0 Winner, 2023",
    image: datahack, 
    prize: "Rs.50,000" 
  },
  {
    title: "Code Odyssey 2.0 Winner, 2023",
    image: codeodyessey,
    prize: "Rs.25,000"
  },
  {
    title: "DataHack 2.0 MLOps Track Winner, 2023",
    image: datahack2, 
    prize: "Rs.10,000" 
  },
  {
    title: "Technovate Second Runner-Up, 2023",
    image: technovate, 
    prize: "Rs.25,000"
  },
  {
    title: "Pixel Paranoia UI/UX Hackathon First Runner-Up, 2023",
    image: uiux,
    prize: "Rs.5,000"
  },
  {
    title: "X-Con MUN Special Mention, 2022",
    image: xcon,
    prize: ""
  },
  {
    title: "Business Plan Winner, 2022",
    image: bplan,
    prize: "Rs.3,000"
  },
  {
    title: "World Topper IGCSE Mathematics, 2019",
    image: worldtopper,
    prize: ""
  },
  {
    title: "School Topper IGCSE ICT and Mathematics, 2019",
    image: schooltopper,
    prize: ""
  },
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const { title, description, year, image, prize } = achievements[currentIndex];

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <div className="mt-10 relative">
        <Tilt className='w-full'>
          <motion.div
            variants={fadeIn("up", "spring", 0.5, 0.75)}
            className='w-full  p-[1px] rounded-[20px]  overflow-hidden'
          >
            <div
              className=' rounded-[20px] py-5 px-12 flex flex-col justify-center items-center relative h-[500px]' // Set a height for the container
            >
              <img
                src={image}
                alt={title}
                className='w-[70%] h-[100%] object-cover rounded-[20px] transition-transform duration-300' // Adjusted width and height
              />
              <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <h3 className='text-white text-[20px] font-bold text-center'>
                  {title}
                </h3>
                <p className='mt-2 text-secondary text-[14px] text-center'>{prize}</p>
              </div>
              {/* <p className='mt-2 text-secondary text-[14px] text-center'>{description}</p>
              <span className='mt-2 text-gray-400 text-[12px]'>{year}</span> */}
            </div>
          </motion.div>
        </Tilt>
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
