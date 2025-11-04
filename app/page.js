import { BGPattern } from "@/components/bg-pattern";
import Navbar from "@/components/Navbar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WordRotate } from "@/components/ui/word-rotate";
import Link from "next/link";
import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";
import Image from "next/image";
import { GlowCard } from "@/components/spotlight-card";
import { Logos3 } from "@/components/logos3";
import React, { Suspense } from 'react'
const Project=React.lazy(()=>import('../components/Project'))
import { Contact2 } from "@/components/contact-2";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Spotlight } from "@/components/ui/spotlight";

const page = () => {
  const skills = {
    heading: "   My Tech Stack",
    logos: [
      {
        id: "logo-html",
        description: "HTML",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        className: "h-8 w-auto",
      },
      {
        id: "logo-css",
        description: "CSS",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        className: "h-8 w-auto",
      },
      {
        id: "logo-js",
        description: "JavaScript",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        className: "h-8 w-auto",
      },
      {
        id: "logo-react",
        description: "React",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        className: "h-8 w-auto",
      },
      {
        id: "logo-node",
        description: "Node.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        className: "h-8 w-auto",
      },
      // {
      //   id: "logo-express",
      //   description: "Express",
      //   image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      //   className: "h-8 w-auto",
      // },
      {
        id: "logo-nextjs",
        description: "Next.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        className: "h-8 w-auto",
      },
      {
        id: "logo-firebase",
        description: "Firebase",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        className: "h-8 w-auto",
      },
      {
        id: "logo-git",
        description: "Git",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        className: "h-8 w-auto",
      },
      {
        id: "logo-github",
        description: "GitHub",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        className: "h-8 w-auto",
      },
      {
        id: "logo-java",
        description: "Java",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        className: "h-8 w-auto",
      },
      {
        id: "logo-python",
        description: "Python",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        className: "h-8 w-auto",
      }
    ],
  };



  const intro = [
    {
      text: "Hey,",
      className: "text-white",
    },
    {
      text: "\n", // Add space
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
    description: 'Project based on React and ContextApi',
    techstack: 'React, ContextApi',
    link: 'https://todo-list-theta-seven.vercel.app/',
    image: '/todo-list.png',   // public/todo.png
    githubLink: 'https://github.com/nikhilpatill18/TodoList/',
  },
  {
    title: 'Sass App',
    description: 'Frontend using React and Responsive UI',
    techstack: 'React, TailwindCSS',
    link: 'https://saas-app-pied.vercel.app/', // replace if you have a live demo
    image: '/sass_app.png',  // public/sass_app.png
    githubLink: 'https://github.com/nikhilpatill18/saas_app/'
  },
  {
    title: 'Chat Application',
    description: 'Full Stack Chat Application using MERN',
    techstack: 'MERN, Zustand',
    // link: 'https://chat-app.vercel.app/', // replace if you have a live demo
    githubLink: 'https://github.com/nikhilpatill18/Chat-app/'
  },
  {
    title: 'Agri Trust',
    description: 'Project made at 36-hour Hackathon',
    techstack: 'MERN, Shadcn',
    // link: 'https://agri-trust.vercel.app/', // replace if deployed
    image: '/agri-trust.png',  // public/agri_trust.png
    githubLink: 'https://github.com/nikhilpatill18/Agritrust'
  },
   {
    title: 'ProjX',
    description: 'Latest project Campus project selling website for college student',
    techstack: 'React.js, TailwindCSS, Flask, Firebase,Redux-toolkit',
    link: 'https://proj-x-nine.vercel.app/', // replace with your actual live link
    image: '/Proj-X.png', // place projx.png inside public/
    githubLink: 'https://github.com/nikhilpatill18/ProjX' // replace if repo is different
  }
];


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


          </div>
        </div>

        {/* about section  */}

        <div id="about" className="max-w-6xl mx-auto p-6 py-10">
          <div className="grid  md:grid-row gap-6">
            <PatternCard className='relative' >
              <PatternCardBody className={'bg-black'}>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  About Me
                </h3>
                <div className="space-y-4 text-sm text-white leading-relaxed">
                  <p>
                    Hi! I'm <span className="font-semibold text-blue-500 dark:text-blue-500">Patil Nikhil</span>, a Third-year IT student at LJ University with a passion for creating digital experiences that blend creativity and functionality.
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
        <div id="skills" className="relative">
          <Logos3 {...skills} />
        </div>

        {/* project */}


        <div id="project" className="relative flex justify-center items-center gap-10 flex-col">
          <h1 className="text-5xl">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10">

            {
              <Suspense fallback={<p>Loading</p>}>
                {
                  projects.map((project, idx) => <Project key={idx} {...project} />)
                }
              </Suspense>
            }
          </div>
        </div>
        {/* Contact us */}

        <div className="relative" id="contact">
          <Contact2 title="Contact me" description="Lets Connect and build something Different" phone="(+91) 7226052966" email="nikhilpatil6060@gmail.com" web={{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/nikhil-patil-p18/' }} />
        </div>



      </div>

<footer className="relative bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">
                Nikhil <span className="text-blue-500">Patil</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full Stack Developer passionate about creating modern web experiences and solving complex problems.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#project" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm">React & Next.js</li>
                <li className="text-gray-400 text-sm">Node.js</li>
                <li className="text-gray-400 text-sm">Firebase</li>
                <li className="text-gray-400 text-sm">JavaScript</li>
                <li className="text-gray-400 text-sm">Python & Java</li>
              </ul>
            </div>

            {/* Connect */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="space-y-3">
                <a 
                  href="https://www.linkedin.com/in/nikhil-patil-p18/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/nikhilpatill18" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="mailto:nikhilpatil6060@gmail.com" 
                  className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Nikhil Patil. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default page