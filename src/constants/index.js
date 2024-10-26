import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    tensorflow,
    html,
    css,
    reactjs,
    python,
    tailwind,
    opencv,
    pytorch,
    git,
    figma,
    flask,
    vjti,
    cmu,
    djsce,
    nextgen,
    fashionfushion,
    legalninja,
    carbpool,
    threejs,
    openai,
    mysql,
    mindscape,
    shopgpt,
    tensionnews,
    hungerzero,
    myntra
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Machine Learning Developer",
      icon: mobile,
    },
    {
      title: "Computer Vision",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Open CV",
      icon: opencv,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "Pytorch",
      icon: pytorch,
    },
    {
      name: "My SQL",
      icon: mysql,
    },
    
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: " OpenAI",
      icon: openai,
    },
   

  ];
  
  const experiences = [
    {
      title: "Upcoming Software Developer Intern",
      company_name: "Myntra Designs Private Limited",
      icon: myntra,
      iconBg: "#FFFFFF",
      date: "Jan 2025 - Jun 2025",
      points: [
        "Part of the Data Science Team"
      ],
    },
    {
      title: "Research Intern",
      company_name: "Veermata Jijabai Technological Institute",
      icon: vjti,
      iconBg: "#E6DEDD",
      date: "Mar 2024 - Present",
      points: [
        "Collaborated with Dr. Faruk Kazi and Prof. Parul Sindhwad to develop a phishing detection system using the PhishTank and Mendeley datasets, using a combination of classical computer vision and deep learning.",
  "Implemented feature extraction techniques such as color histogram, wavelet hash, SIFT, LBP, and ORB for screenshot evaluation, enhancing detection accuracy through multimodal analysis and employing models like Mask R-CNN, DeepLabV3+, PSPNet.",
  "Built a combined classifier with the Unimass dataset for URL, HTML, and visual inspection features, and created a Google Chrome extension for real-time phishing alerts.",
      ],
    },
    {
      title: "Research Intern",
      company_name: "Carnegie Mellon University",
      icon: cmu,
      iconBg: "#bb0201",
      date: "May 2023 - Present",
      points: [
        "Fine-tuned the CellPose model for segmenting nuclei from DAPI-stained images, addressing challenges like large image sizes and overlapping nuclei.",
        "Applied linear mixed models to analyze nuclei morphology, revealing key insights on aging across species and age groups.",
        "Contributed to research which is to be submitted to Nature Communications Journal, focusing on the link between nuclei morphology and biological aging, under the guidance of Dr. Min Xu and his PhD student Mostofa Uddin."
      ],      
      
      
    },
    {
      title: "Teaching Assistant",
      company_name: "Dwarkadas J Sanghvi College of Engineering",
      icon: djsce,
      iconBg: "#FFFFFF",
      date: "Aug 2023 - Jan 2024",
      points: [
        "Served as a Teaching Assistant for Prof. Aniket Kore, contributing to the effective delivery of course content.",
        "Supported students in their learning journey by providing guidance and clarification on course material.",
        "Conducted Python laboratory sessions for Second Year Computer Engineering students.",
        "Prepared students for practical exams and final projects by assisting them with hands-on programming exercises and troubleshooting.",
      ],
      
    },
    {
      title: "Software And Machine Learning Developer",
      company_name: "Nextgen Techno Ventures Private Ltd",
      icon: nextgen,
      iconBg: "#203047",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Developed an Automatic Face Recognition System using OpenCV, enhancing face detection accuracy and attendance tracking.",
        "Built an OCR-based Social Media Analysis tool utilizing Pytesseract for text extraction and analysis.",
        "Created a Car Number Plate Recognition system for compliance checks using TensorFlow and YOLO v8, improving automated vehicle monitoring.",
        "Developed ShopGPT, a Virtual Shopping Assistant Chatbot leveraging NLP and web scraping tools, and also created a Python library for trading strategies.",
      ],
      
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "FashionFushion Try-On",
      description:
        "It enhances online shopping by enabling users to visualize clothing on themselves and receive personalized outfit recommendations using trend analysis and human-in-the-loop reinforcement learning. Developed for Myntra's HackerRamp WeForShe Hackathon, this project won pre-finalist status and I recieved a six-months internship opportunity.",
      tags: [
        {
          name: "SegMind-Diffusion",
          color: "blue-text-gradient",
        },
        {
          name: "ChromaDB",
          color: "green-text-gradient",
        },
        {
          name: "React JS",
          color: "pink-text-gradient",
        },
      ],
      image: fashionfushion,
      source_code_link: "https://github.com/aasmithadhani/Myntra-CoDivas/tree/main",
    },
    {
      name: "Legal Ninja",
      description:
        "Client-Attorney Matchmaking Platform is an MLOps-driven solution designed to connect clients with legal experts efficiently. This platform utilizes advanced machine learning operations to create precise matches based on clients' specific legal needs and attorneys' specialized skills. We won MLOps Track in DataHack 2.0 Datathon.",
      tags: [
        {
          name: "FalconAI",
          color: "blue-text-gradient",
        },
        {
          name: "Yake",
          color: "green-text-gradient",
        },
        {
          name: "BERT",
          color: "pink-text-gradient",
        },
      ],
      image: legalninja,
      source_code_link: "https://github.com/Kashish-G/DataHack_2_Tensionflow/tree/main",
    },
    {
      name: "Carb-pool",
      description:
        "AI-driven carpooling platform that connects commuters to reduce traffic congestion and carbon footprints. Designed to enhance urban travel, it features user matching, fare calculations, route optimization, and safety measures, incentivizing eco-friendly commuting with carbon credit rewards. We came second runner-up in Technovate 2023.",
      tags: [
        {
          name: "DJango",
          color: "blue-text-gradient",
        },
        {
          name: "ARIMA",
          color: "green-text-gradient",
        },
        {
          name: "TravellingSalesman",
          color: "pink-text-gradient",
        },
      ],
      image: carbpool,
      source_code_link: "https://github.com/Kashish-G/technovate_noname.csv/tree/main?tab=readme-ov-file",
    },
    {
      name: "HungerZero",
      description:
        "The main role of HungerZero is connect donner and NGO's, and also give a assistance to those who really need food, reduce wastage of food as well as hunger problem, donner can easily make a donation without any time wasting food shift will guide you throughout your process. We won Code Odyssey 2.0, 2023 with this project",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "DJango",
          color: "green-text-gradient",
        },
        {
          name: "LogMealAPI",
          color: "pink-text-gradient",
        },
      ],
      image: hungerzero,
      source_code_link: "https://github.com/HungerZeroScaredToCompile/HungerZero",
      website_link: "https://hungerzero.netlify.app/",
    },
    {
      name: "MindScape",
      description:
        "It is designed for suicide detection and mental health monitoring, enabling timely intervention and support for at-risk individuals. The platform features a 24-hour chatbot for mental health assistance, stress relief games, mood-based music playlists, and guided meditation exercises, all aimed at enhancing user well-being.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "uAgents",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
      ],
      image: mindscape,
      source_code_link: "https://github.com/Kashish-G/Synergy_DustBytes?tab=readme-ov-file",
    },
    {
      name: "ShopGPT",
      description:
        "Shopping Chatbot with Web Scraping is an innovative solution that simplifies the online shopping experience by utilizing web scraping techniques to gather product information from various e-commerce platforms. Powered by Natural Language Processing, this helps users find the best deals through natural language interactions.",
      tags: [
        {
          name: "Selenium",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "NLP",
          color: "pink-text-gradient",
        },
      ],
      image: shopgpt,
      source_code_link: "https://github.com/Kashish-G/ShopGPT",
    },
    {
      name: "TensionNews",
      description:
        "Event Tracker System tackles the challenge of managing information overload by developing a real-time news extraction platform. This system utilizes NLP techniques, large language models, and network analysis to categorize significant events and create an interactive network graph to visualize connections.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Supabase",
          color: "green-text-gradient",
        },
        {
          name: "VectorDB",
          color: "pink-text-gradient",
        },
      ],
      image: tensionnews,
      source_code_link: "https://github.com/Kashish-G/TensionNews/tree/main",
    },
    
    
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };