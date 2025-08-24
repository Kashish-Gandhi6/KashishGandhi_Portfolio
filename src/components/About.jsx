import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper} from '../hoc'
import { fadeIn, textVariant } from "../utils/motion";
import { profilephoto} from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      {/* Two-column layout for text and photo */}
      <div className="mt-4 flex flex-col lg:flex-row gap-8 items-start">
        {/* Text content - left column */}
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
          className="flex-1"
        >
          <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">
            I'm a <b>Computer Vision</b> graduate student at <b> Carnegie Mellon University</b> (Robotics Institute, SCS), passionate about <b>AR/VR</b>, <b>3D Vision</b>, <b>Vision-Language Models (VLMs)</b>, multimodal understanding, and <b>generative visual intelligence</b>. My journey spans both research and industry—shaping ideas into impactful systems.
            <br /><br />
            Previously, I've worked as a research intern at <b> CMU</b> and <b>VJTI</b>, and as a Software Developer Intern at <b> Myntra</b>. My projects explore diverse CV problems—from fine-tuning Stable Diffusion for zero-shot 3D segmentation in cryo-ET, to modeling cell morphology via unsupervised learning, to scaling virtual try-on systems with garment segmentation and LLM-powered recommendation. My work has been published in <b>Springer LNNS</b> and <b>bioRxiv</b>.
            <br /><br />
            Beyond research, I've built production-ready systems: phishing detection pipelines as Chrome extensions, LLM-augmented search at Myntra, and OCR for low-resource scripts using Kolmogorov–Arnold Networks. I enjoy blending classical CV, deep learning, and prompting to solve real-world challenges.
            <br /><br />
            I'm particularly excited about advancing <b>semantically aligned perception</b>, <b> OCR for underrepresented scripts</b>, and applied VLMs in <b> image-based search</b>, <b>AR-powered experiences</b>, and <b> privacy-conscious, real-time vision systems</b>—especially in <b> e-commerce</b>, <b>accessibility</b>, and <b>consumer tech</b>.
          </p>
        </motion.div>

        {/* Photo - right column */}
        <motion.div
          variants={fadeIn("left", "", 0.3, 1)}
          className="flex-shrink-0 lg:w-[350px] w-full"
        >
          <div className="relative">
            <img
              src={profilephoto}
              alt="Profile"
              className="w-full h-[70vh] object-cover rounded-[20px] shadow-card"
            />
            {/* Optional: Add a gradient overlay for styling consistency */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 rounded-[20px]" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");