import React from 'react'
import { motion } from 'framer-motion';
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import ReactJs from '../assets/react.png'
import Node from '../assets/node.png'
import Express from '../assets/express.png'
import Firebase from '../assets/firebase.png'
import Mongodb from '../assets/mongodb.png'


const Skills = () => {
  const skill = [
    {
      title: "HTML",
      imageSrc: Html,
    },
    {
      title: "CSS",
      imageSrc: Css,
    },
    {
      title: "JavaScript",
      imageSrc: Javascript,
    },
    {
      title: "React",
      imageSrc: ReactJs,
    },
    {
      title: "Node",
      imageSrc: Node,
    },
    {
      title: "Express Js",
      imageSrc: Express,
    },
    {
      title: "MongoDB",
      imageSrc: Mongodb,
    },
    {
      title: "Firebase",
      imageSrc: Firebase,
    },
  ];
  return (
    <>
    <div className="bg-gray-900 py-10" id="skills">
      <h1 className="text-4xl font-bold text-center text-white mb-10">SKILLS</h1>
      <div className="flex flex-wrap justify-center items-center max-w-4xl mx-auto">
        {skill.map((data, index) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 p-5"
            // key={data.id}
            key={index}
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="bg-black text-center p-6 rounded-lg border border-blue-400 shadow-[0px_0px_10px_3px_rgba(0,0,0,0.3)] shadow-blue-500 hover:scale-115">
              <motion.img
               initial={{opacity:0, scale:0.5}}
               whileInView={{opacity:1, scale:1}}
               transition={{duration:0.9, delay:0}}
                src={data.imageSrc} alt="" className="w-[70px] mx-auto mb-4" />

              <motion.h3 initial={{opacity:0, scale:0.5}}
               whileInView={{opacity:1, scale:1}}
               transition={{duration:0.9, delay:0}}
                className="text-white text-lg font-semibold">{data.title}</motion.h3>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </>
  
  )
}

export default Skills


// import React from "react";
// import skills from "./data/skills.json";

// const Skills = () => {
//   return (
//     <>
//       <div className="container skills" id="skills">
//         <h1>SKILLS</h1>
//         <div className="items">
//           {skills.map((data) => (
//             <>
//               <div
//                 className="item"
//                 key={data.id}
//                 data-aos="flip-left"
//                 data-aos-duration="1000"
//               >
//                 <img src={`/assets/${data.imageSrc}`} alt="" />
//                 <h3>{data.title}</h3>
//               </div>
//             </>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Skills;