import React from 'react'
import Hotel from '../assets/hotel.png'
import News from '../assets/news.png'
import Ecommerce from '../assets/ecommerce.png'
import { FaGithub } from 'react-icons/fa'

const Project = () => {
    const projects = [
        {
          title: "AI Feed",
          description:
            "Designed and developed a real-time AI-driven news aggregator that fetches news from multiple APIs, summarizes articles using Gemini AI, and provides personalized recommendations to Users.",
          techStack: ["React Js", "Express Js" , "MongoDB", "Mantine", "Tailwind CSS", "Firebase", "Redux"], 
          link: "http://3.91.83.171",
          github: 'https://github.com/Naeem8290/News_AI',
          image: News,
        },
        {
          title: "FoodToHome",
          description:
            "Built a full-stack food ordering platform using React.js for the frontend, Node.js and Express for the backend, and integrated Context API and Hooks for efficient state and UI management.",
          techStack: ["React Js", "Express Js", "MongoDB", "BootStrap", "Hooks"],
          link: "https://food-order-lyart-beta.vercel.app",
          github: 'https://github.com/Naeem8290/Food_Order',
          image: Hotel,
        },
        {
          title: "E-Commerce",
          description:
            "Designed and developed a responsive e-commerce frontend for a clothing store using React.js, allowing users to browse items, add to cart, and place orders easily.",
          techStack: ["React Js", "Hooks", "Mantine", "Tailwind CSS", "Responsive UI"],
          link: "https://e-commerce-navy-alpha-65.vercel.app/",
          github: 'https://github.com/Naeem8290/E-Commerce',
          image: Ecommerce,
        },
      ];
  return (
    <section id='project' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {projects.map((project, index) => (
                <div key={index} className='bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
                    <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'/>
                    <div className='p-6'>
                        <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                        <p className='text-gray-300 mb-4'>{project.description}</p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {project.techStack.map((tech, idx) => (
                                <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                            ))}
                        </div>
                        <div className='flex gap-3'>
                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Project</a>
                            <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'><FaGithub/> Github</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Project
