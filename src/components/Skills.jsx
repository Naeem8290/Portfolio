import React from 'react';
import { motion } from 'framer-motion';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactJs from '../assets/react.png';
import Node from '../assets/node.png';
import Express from '../assets/express.png';
import Firebase from '../assets/firebase.png';
import Mongodb from '../assets/mongodb.png';
import Tailwind from '../assets/tailwind.png'
import Aws from '../assets/aws.png'

const Skills = () => {
  const skill = [
    { title: "HTML", imageSrc: Html },
    { title: "CSS", imageSrc: Css },
    { title: "JavaScript", imageSrc: Javascript },
    { title: "React Js", imageSrc: ReactJs },
    { title: "Node Js", imageSrc: Node },
    { title: "Express Js", imageSrc: Express },
    { title: "MongoDB", imageSrc: Mongodb },
    { title: "Tailwind", imageSrc: Tailwind },
    { title: "AWS", imageSrc: Aws },
    { title: "Firebase", imageSrc: Firebase },

  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  return (
    <div className="bg-gray-900 py-10" id="skills">
      <h1 className="text-4xl font-bold text-center text-white mb-10">SKILLS</h1>
      <div className="flex flex-wrap justify-center items-center max-w-3xl mx-auto">
        {skill.map((data, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="w-32 h-32 m-4"
          >
            <div className="bg-black w-full h-full rounded-full border-4 border-blue-400 shadow-lg shadow-blue-500 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src={data.imageSrc}
                alt={data.title}
                className="w-20 h-10 object-contain mb-2"
              />
              <h3 className="text-white text-sm font-semibold text-center">{data.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
