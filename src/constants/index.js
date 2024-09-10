import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    
    
  } from "../assets";
  import school1 from "../assets/company/school1.png";
  import university1 from "../assets/company/university1.png";
  import circuit from "../assets/circuit.png";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.ts Frontend Developer",
      icon: mobile,
    },
    {
      title: ".NET Backend Developer", 
      icon: backend,
    },
    {
      title: "Responsive Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    
   
    {
      title: "G.C.E. Advanced Level & Ordinary Level",
      company_name: "St. John's College, Jaffna",
      icon: school1,
      iconBg: "#383E56",
      date: "January 2011 - August 2019",
      points: [
        "G.C.E. Advanced Level: Physical Science Stream",
        "Science Union 2018 Secretary, St. John’s College, Jaffna Maintained the logbook, arranged meetings, and prepared members for the Science Day event.",
        " St. John Ambulance 2018 Secretary, St. John’s College, Jaffna Maintained the logbook, arranged meetings, and assigned medical support duties during sports meets and other events.",
      ],
    },
    {
      title: "BSC(Hons) in Information Technology and Management",
      company_name: "University of Moratuwa",
      icon: university1,
      iconBg: "#E6DEDD",
      date: "March 2022 - present",
      points: [
        "1st year hardware project: Automated Coffee Machine",
        "2nd year software project: UniTutor platform",
        
        
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
    
  ];
  
  const projects = [
    {
      name: "UniTutor platform",
      description:
        "A system connecting students with university lecturers and undergraduates to enhance learning. The platform includes key features such as user registration, profile management, subject management, and a chat system. I implemented advanced tools for search and filter options, review and rating systems, a coin bank, and sections for comments, to-dos, and friend invitations. I also built an admin dashboard with functionalities to verify tutors using university IDs, manage users by suspending, restoring, or removing them, and analyze platform performance and trends through charts and user reports.",
      tags: [
        {
          name: "React.ts",
          color: "blue-text-gradient",
        },
        {
          name: "MS SQL",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "yellow-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Automated Coffee Machine",
      description:
        "An automated tea-making machine that prepares and serves tea based on the selected type (strong, medium, or plain), enhancing automation and user experience. My contributions included designing the PCB and developing the cup dispenser mechanism, where I modified a separator wheel using Blender and integrated a belt system to smoothly deliver the separated cup to the customer’s hand.",
      tags: [
        {
          name: "Arudino Mega",
          color: "blue-text-gradient",
        },
        {
          name: "C",
          color: "green-text-gradient",
        },
        {
          name: "Blender",	
          color: "pink-text-gradient",
        },
        {
          name: "Proteus",	
          color: "yellow-text-gradient",
        },
      ],
      image: circuit,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };