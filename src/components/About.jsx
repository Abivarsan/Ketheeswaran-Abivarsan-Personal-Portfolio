// import React from 'react'
// //import Tilt from 'react-tilt'
// import { motion } from 'framer-motion'
// import { styles } from '../styles'	
// import { services } from '../constants'
// import{ fadeIn, textVariant } from '../utils/motion'
// import { Tilt } from 'react-tilt'
// import { SectionWrapper } from '../hoc'

// const ServiceCard = ({title, icon, index}) => {
//   return(
//     <Tilt className = "xs:w-[250px] w-full">
//       <motion.div variants={fadeIn("right" , "spring", 0.5 * index, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//       >
//         <div
//           options = {{ max : 45, scale :1, speed:450 }}
//           className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//           >
//             <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
//             <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
//         </div>

//       </motion.div>
//     </Tilt>
//   )
// }

// const About = () => {
//   return (
//     <>
//     <motion.div variants={textVariant()}>
//       <p className={styles.sectionSubText}>Introduction</p>
//       <h2 className={styles.sectionHeadText}>Overview</h2>
//     </motion.div>
//     <motion.p variants={fadeIn("" ,"", 0.1, 1)}  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
//     {/* I'm a skilled software developer with experience in TypeScript and
//         JavaScript, and expertise in frameworks like React, .NET, and
//         Three.js. I'm a quick learner and collaborate closely with clients to
//         create efficient, scalable, and user-friendly solutions that solve
//         real-world problems. Let's work together to bring your ideas to life! */}
//         I'm a versatile software developer proficient in multiple programming languages, including Java, C, and C#. I specialize in building web applications using modern technologies such as HTML, CSS, JavaScript, and TypeScript, with hands-on expertise in frameworks like React.js and .NET. My strong knowledge of databases like MS SQL and MySQL, along with cloud services like Firebase, ensures that I create efficient and scalable solutions.
// I am highly skilled in version control using Git and comfortable with a variety of development tools, including VS Code, Visual Studio, IntelliJ, Postman, and Code Blocks. My technical skills are complemented by strong problem-solving abilities, attention to detail, effective verbal communication, and a collaborative mindset that thrives in team environments.
// With a passion for building user-centric applications, I'm always eager to take on new challenges and develop innovative solutions that meet client needs. Let’s collaborate and bring your ideas to life!
//     </motion.p>
//     <div className="mt-20 flex flex-wrap gap-10">
//       {services.map((service, index) => (<ServiceCard key={service.title} index ={index} {...service}/>
//       ))}
//     </div>
//     </>
//   )
// }

// export default SectionWrapper(About, "about")


import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';	
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-8">
        {/* Left side: Main paragraph content */}
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)} 
          className="text-secondary text-[17px] max-w-3xl leading-[30px] w-full md:w-1/2"
        >
          I'm a versatile software developer proficient in multiple programming languages, including Java, C, and C#. I specialize in building web applications using modern technologies such as HTML, CSS, JavaScript, and TypeScript, with hands-on expertise in frameworks like React.js and .NET. My strong knowledge of databases like MS SQL and MySQL, along with cloud services like Firebase, ensures that I create efficient and scalable solutions.
          <br /><br />
          I am highly skilled in version control using Git and comfortable with a variety of development tools, including VS Code, Visual Studio, IntelliJ, Postman, and Code Blocks. My technical skills are complemented by strong problem-solving abilities, attention to detail, effective verbal communication, and a collaborative mindset that thrives in team environments.
          <br /><br />
          With a passion for building user-centric applications, I'm always eager to take on new challenges and develop innovative solutions that meet client needs. Let’s collaborate and bring your ideas to life!
        </motion.p>

        {/* Right side: Heading, short paragraph, and CV download button */}
        <motion.div 
          variants={fadeIn("", "", 0.2, 1)} 
          className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/3 flex flex-col items-start"
        >
          <h3 className="text-white text-[24px] font-bold mb-4">Looking for a skilled developer?</h3>
          <p className="text-white text-[17px] leading-[28px] mb-6">
            I’m always open to discussing new opportunities. Download my CV below and let's work together!
          </p>
          <a 
            href="/Ketheeswaran-Abivarsan-Personal-Portfolio/ketheeswaranAbivarsan_CV.pdf" 
            download="Ketheeswaran_Abivarsan_CV.pdf"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
