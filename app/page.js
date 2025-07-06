import { BGPattern } from "@/components/bg-pattern";
import Navbar from "@/components/Navbar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WordRotate } from "@/components/ui/word-rotate";
import Link from "next/link";
import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";
import Image from "next/image";
import { GlowCard } from "@/components/spotlight-card";

import React from 'react'
import Project from "@/components/Project";
import { Contact2 } from "@/components/contact-2";

const page = () => {
  const skills = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "Express",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "Flask",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
    }
  ];


  const intro = [
    {
      text: "Hey,",
      className: "text-white",
    },
    {
      text: " ", // Add space
      className: "text-white",
    },
    {
      text: "Nikhil",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: " ", // Add space
      className: "text-white",
    },
    {
      text: "here",
      className: "text-white",
    },
  ];

  const projects = [
    {

      title: 'Todo list',
      description: 'Project based on React and  ContextApi',
      techstack: 'React ContextApi',
      link: 'https://github.com/nikhilpatill18/TodoList/'
    },
    {
      title: 'Sass App',
      description: 'Frontend using React and Responsive Ui',
      techstack: 'React Taiwindcss',
      link: 'https://github.com/nikhilpatill18/saas_app/'
    },
    {
      title: 'Sass App',
      description: 'Frontend using React and Responsive Ui',
      techstack: 'React Taiwindcss',
      link: 'https://github.com/nikhilpatill18/saas_app/'
    },
    {
      title: 'Sass App',
      description: 'Frontend using React and Responsive Ui',
      techstack: 'React Taiwindcss',
      link: 'https://github.com/nikhilpatill18/saas_app/'
    },
    {
      title: 'Sass App',
      description: 'Frontend using React and Responsive Ui',
      techstack: 'React Taiwindcss',
      link: 'https://github.com/nikhilpatill18/saas_app/'
    },

  ]

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-20 min-h-screen relative">
        <div className="absolute inset-0 z-0">
          <BGPattern mask="fade-edges" />
        </div>

        {/* Hero Section */}
        <div id="home" className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">

            {/* Main Heading */}
            <div className="mb-8">
              <TypewriterEffectSmooth words={intro} />
            </div>

            {/* Rotating Words */}
            <div className="mb-8">
              <span className="text-2xl md:text-3xl text-gray-300 mr-4">I'm a</span>
              <WordRotate
                words={['Web Developer', 'Full Stack Developer', 'Next.js Developer', 'Firebase Expert']}
                className="text-2xl md:text-3xl font-bold text-blue-400"
              />
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
              Passionate developer crafting modern web experiences with cutting-edge technologies.
              Let's build something amazing together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href={'#project'} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
                View My Work
              </Link>
              <Link href='#contact' className="px-8 py-3 border border-gray-600 hover:border-gray-400 text-white rounded-lg font-medium transition-colors duration-200">
                Get In Touch
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* about section  */}

        <div id="about" className="max-w-6xl mx-auto p-6">
          <div className="grid  md:grid-row gap-6">
            <PatternCard className='relative' >
              <PatternCardBody className={'bg-black'}>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  About Me
                </h3>
                <div className="space-y-4 text-sm text-white leading-relaxed">
                  <p>
                    Hi! I'm <span className="font-semibold text-blue-500 dark:text-blue-500">Patil Nikhil</span>, a second-year IT student at LJ University with a passion for creating digital experiences that blend creativity and functionality.
                  </p>
                  <p>
                    I love building web and mobile applications, and I'm always eager to explore and learn new technologies. More than just writing code, I enjoy debugging and solving tricky bugs — turning problems into solutions is what keeps me excited and motivated.
                  </p>
                  <p>
                    Outside of coding, you'll often find me experimenting with new frameworks, exploring design patterns, or diving into open-source projects to sharpen my skills. My journey as a developer is driven by curiosity, continuous learning, and a genuine love for building things that people find useful.
                  </p>
                </div>
              </PatternCardBody>
            </PatternCard>
          </div>
        </div>

        {/* skills */}
        <div id="skills">

        </div>

        {/* project */}


        <div id="project" className="flex justify-center items-center gap-10 flex-col">
          <h1 className="text-5xl bg-black">Project</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

            {
              projects.map((project, idx) => <Project key={idx} title={project.title} description={project.description} techstack={project.techstack} link={project.link} />)
            }
          </div>
        </div>
        {/* Contact us */}

        <div className="relative" id="contact">
          <Contact2 title="Contact me" description="Lets Connect and build something Different" phone="(+91) 7226052966" email="nikhilpatil6060@gmail.com" />
        </div>


      </div>

    </div>
  )
}

export default page