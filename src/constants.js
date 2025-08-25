// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import restapilogo from './assets/tech_logo/restapi.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import deLogo from './assets/company_logo/delogo.png';
import proxenixLogo from './assets/company_logo/proxenix_logo.png'

// Education Section Logo's
 
import pesLogo from './assets/education_logo/pes_college_of_engineering_logo.png'
import mes_collegeLogo from './assets/education_logo/mes_arts-science_logo.png'
import mes_chaitanyaLogo from './assets/education_logo/mes_chaitanya_logo.png'
import donboscosLogo from './assets/education_logo/donboscos_logo.png'

// Project Section Logo's
import stayeaseLogo from './assets/work_logo/stayease.png'
import tasksyncLogo from './assets/work_logo/tasksync.png'
import musicflowLogo from './assets/work_logo/musicflow.png'
import book_recommenderLogo from './assets/work_logo/book_recommender.png'
import car_crashLogo from './assets/work_logo/car_crash.png'
import portfolioLogo from './assets/work_logo/portfolio.png'
 

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'RestAPI', logo: restapilogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'C-Sharp', logo: csharpLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: proxenixLogo,
      role: "Web Development Intern",
      company: "Proxenix",
      date: "June 2024 - August 2024",
      desc: "Worked on frontend development fundamentals, creating responsive layouts using HTML, CSS, and JavaScript. Built interactive UI components through DOM manipulation and implemented dynamic features to enhance user experience.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Github"
      ],
    },
    {
      id: 1,
      img: deLogo,
      role: "Python Intern",
      company: "Dotch Endeavours",
      date: "April 2024 - May 2024",
      desc: "Performed exploratory data analysis on Monkeypox case data from 50+ countries using Pandas, NumPy, and Seaborn. Developed data visualizations and insights, including time-series and geographic trends, to support research reporting and decision-making.",
      skills: [
        "Python",
        "Numpy",
        "Pandas",
        "Seaborn",
        "Jupyter Notebook",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: pesLogo,
      school: "PES College of Engineering, Mandya",
      date: "February 2023 - September 2024",
      grade: "7.25 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from PES College of Engineering, Mandya. During my course, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, Software Engineering and Operating Systems. I actively participated in various workshops which enhanced my technical knowledge.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: mes_collegeLogo,
      school: "MES'S M M Arts & Science College, Sirsi",
      date: "July 2019 - October 2022",
      grade: "72.88%",
      desc: "I completed my Bachelor's degree (B.Sc.) from MES'S M M Arts & Science College, Sirsi. Throughout my studies, I gained a strong foundation in analytical thinking, problem-solving, and scientific methodology. Coursework emphasized practical lab work, data interpretation, and research-oriented study in chemistry and biological sciences.",
      degree: "Bachelor of Science - BSc",
    },
    {
      id: 2,
      img: mes_chaitanyaLogo,
      school: "MES Chaithanya PU College, Sirsi",
      date: "June 2018 - March 2019",
      grade: "79.16%",
      desc: "I completed my class 12 education from MES Chaithanya PU College, Sirsi, where I studied Physics, Chemistry, Mathematics and Biology (PCMB).",
      degree: "Class(XII) - PCMB",
    },
    {
      id: 3,
      img: donboscosLogo,
      school: "St. Anthony's High School, Sirsi",
      date: "June 2016 - April 2017",
      grade: "89.44%",
      desc: "I completed my class 10 education from St. Anthony's High School, Sirsi.",
      degree: "Class(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "StayEase - Hotel Booking Website",
      description:
        "A responsive full-stack web application built with React, Node.js, Express, and MongoDB, enabling users to book hotels and owners to manage listings and reservations. It features Clerk authentication for secure access, Stripe integration for seamless payments, and role-based dashboards for hotel management. Automated email notifications further enhance the booking flow, making StayEase a modern and reliable reservation solution.",
      image: stayeaseLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://github.com/SahityaNaik/StayEase-Hotel-Booking-Website",
      webapp: "https://stayease-hotel-booking.vercel.app/",
    },
    {
      id: 1,
      title: "TaskSync - Todo App",
      description:
        "A modern and responsive task management app built with React, Vite, and Tailwind CSS. TaskSync enables users to efficiently manage their daily to-dos with core features like adding, editing, deleting, and tracking task completion. With localStorage persistence and a sleek interface, it ensures a smooth experience across both desktop and mobile.",
      image: tasksyncLogo,
      tags: ["React JS", "Vite", "Tailwind CSS", "React Icons"],
      github: "https://github.com/SahityaNaik/TaskSync-TodoList",
      webapp: "https://tasksync-todolist.vercel.app/",
    },
    {
      id: 2,
      title: "MusicFlow - Web Music Player",
      description:
        "A lightweight browser-based music streaming app built with HTML, CSS, and JavaScript. Inspired by Spotify, it lets users browse albums, play songs from dynamic playlists, and enjoy smooth playback with real-time controls — all within a responsive UI.",
      image: musicflowLogo,
      tags: ["HTML", "CSS", "JavaScript", "Audio API"],
      github: "https://github.com/SahityaNaik/Musicflow-Web-Player",
      webapp: "https://musicflow-web-player.vercel.app/",
    },
    {
      id: 3,
      title: "Book Recommender System",
      description:
        "A personalized recommendation platform built with Python, Flask, NumPy, and Pandas. Features popularity-based and collaborative filtering models, delivering real-time book suggestions through a clean Flask-powered web interface.",
      image: book_recommenderLogo,
      tags: ["Python", "Flask", "Numpy", "Pandas", "Machine Learning"],
      github: "https://github.com/SahityaNaik/Book-Recommender-System",
    },
    {
      id: 4,
      title: "Car Crash Detection and Alert System",
      description:
        "A real-time crash detection platform that uses YOLOv3 and OpenCV to identify vehicle collisions from video feeds. It integrates with Tkinter for a simple GUI, provides instant voice alerts with pyttsx3, and sends email notifications along with captured crash frames for quick response.",
      image: car_crashLogo,
      tags: ["Deep Learning", "Open CV", "Python", "YOLO", "Computer Vision"],
      github: "https://github.com/SahityaNaik/Car-Crash-Detection-and-Alert-System",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio built with React and Tailwind CSS to showcase my projects and skills. Features smooth animations, reusable components, and a clean section-based layout.",
      image: portfolioLogo,
      tags: ["React JS", "Tailwind CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/SahityaNaik/portfolio",
      webapp: "https://sahitya-naik.vercel.app/",
    },
  ];  