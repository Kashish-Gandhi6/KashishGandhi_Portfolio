import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, pdf, solarpaper, deepfake, pcos, disease, phishing,websiteicon,cyberbullying } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const papers = [
  {
    title: "A Multimodal Framework for Deepfake Detection",
    description: "Published in Journal of Electrical Systems 20-10 s (2024): 4772-4787, SCOPUS Indexed",
    tags: [
      { name: "VGG19", color: "blue-text-gradient" },
      { name: "Mel-Spectograms", color: "green-text-gradient" },
      { name: "ANN", color: "pink-text-gradient" },
    ],
    image: deepfake,
    pdf_link: "https://www.doi.org/10.53555/jes.v20i10s.6126",
  },
  {
    title: "Detecting Polycystic Ovary Syndrome Through Blending Ensemble Method",
    description: "To be published in Lecture Notes in Networks and Systems - Springer Book series, index by SCOPUS. Accepted and presented in 6th International Conference on Data & Information Sciences(ICDIS-2024)",
    tags: [
      { name: "BlendingEnsemble", color: "blue-text-gradient" },
      { name: "ML", color: "green-text-gradient" },
      { name: "DL", color: "pink-text-gradient" },
    ],
    image: pcos,
    pdf_link: "https://drive.google.com/drive/folders/1j0bs9PpAbL-D1ygqwgNTCG0yssGcxN_s?usp=sharing",
  },
  {
    title: "Predicting Solar Energy Generation with Machine Learning based on AQI and Weather Features",
    description: "Accepted and presented in AISD 2024. Awarded 2nd Best Paper at the workshop.",
    tags: [
      { name: "LSTM", color: "blue-text-gradient" },
      { name: "ZeroInflated", color: "green-text-gradient" },
      { name: "PowerTransform", color: "pink-text-gradient" },
    ],
    image: solarpaper,
    pdf_link: "https://doi.org/10.48550/arXiv.2408.12476",
  },
  {
    title: "Infectious Disease Forecasting in India Using LLM’s and Deep Learning",
    description: "Presented in 3rd International conference on Machine Learning and Data Engineering (ICMLDE 2024). Under Review in Procedia Computer Science Journal",
    image: disease,
    tags: [
      { name: "LLM", color: "blue-text-gradient" },
      { name: "NLP", color: "green-text-gradient" },
      { name: "DL", color: "pink-text-gradient" },
    ],
    pdf_link: "https://doi.org/10.48550/arXiv.2410.20168",
  },
  {
    title: "Cyberbullying or just Sarcasm? Unmasking Coordinated Networks on Reddit",
    description: "Published in International Journal of Engineering Research in Computer Science and Engineering.",
    image: cyberbullying,
    tags: [
      { name: "BERT", color: "blue-text-gradient" },
      { name: "RoBERTA", color: "green-text-gradient" },
      { name: "GraphNetworkAnalysis", color: "pink-text-gradient" },
    ],
    pdf_link: "https://doi.org/10.36647/IJERCSE/11.11.Art001",
  },
  {
    title: "PhishGuard: Multi-Faceted Phishing Detection: Leveraging URLs, HTML Features, and Visual Cues",
    description: "Under Review in a Internation Journal of Information Technology",
    image: phishing,
    tags: [
      { name: "MaskR-CNN", color: "blue-text-gradient" },
      { name: "FeatureExtraction", color: "green-text-gradient" },
      { name: "DL", color: "pink-text-gradient" },
    ],
  },
  
];

const ProjectCard = ({ index, name, description, tags, image, source_code_link, website_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt="project_image" className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
            {website_link && (
              <div
                onClick={() => window.open(website_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2"
              >
                <img src={websiteicon} alt="website" className="w-1/2 h-1/2 object-contain" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
// PaperCard Component
const PaperCard = ({ index, title, description, image, tags, pdf_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt="paper_image" className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {pdf_link && (
              <div
                onClick={() => window.open(pdf_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={pdf} alt="PDF link" className="w-1/2 h-1/2 object-contain" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 h-[150px]">
          <h3 className="text-white font-bold text-[16px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${title}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const papersRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (papersRef.current) {
        papersRef.current.scrollLeft += 1; // Speed of scrolling
      }
    }, 10); // Lower value increases scroll speed

    return () => clearInterval(scrollInterval); // Cleanup on component unmount
  }, []);
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (projectsRef.current) {
        projectsRef.current.scrollLeft += 1; // Speed of scrolling
      }
    }, 10); // Lower value increases scroll speed

    return () => clearInterval(scrollInterval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Industry Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div ref={projectsRef} className="mt-20 flex flex-nowrap gap-4 scroll-hidden">
        {projects.map((project, index) => (
          <ProjectCard key={`${project}-${index}`} index={index} {...project} />
        ))}
      </div>

      <motion.div variants={textVariant()} className="mt-20">
        <h2 className={styles.sectionHeadText}>Academic Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          This section showcases my academic contributions, highlighting my research efforts and findings. Each paper has either been published/accepted or under review, links to their respective PDFs are provided, illustrating my ability to conduct in-depth research and present findings effectively.
          </motion.p>
      </div>


      <div ref={papersRef} className="mt-20 flex flex-nowrap gap-4 scroll-hidden">
        {papers.map((paper, index) => (
          <PaperCard key={`${paper.title}-${index}`} index={index} {...paper} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
