import { TextLoop } from "@/components/ui/text-loop";
import { BGPattern } from "@/components/bg-pattern";
import Navbar from "@/components/Navbar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WordRotate } from "@/components/ui/word-rotate";
import Link from "next/link";
import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";
import Image from "next/image";

import React from 'react'

const page = () => {
  const skills = [
    { skill: "React", level: "Intermediate" },
    { skill: "JavaScript", level: "Advanced" },
    { skill: "Node.js", level: "Intermediate" },
    { skill: "Python", level: "Intermediate" },
    { skill: "HTML/CSS", level: "Advanced" },
    { skill: "Git", level: "Intermediate" },
    { skill: "MongoDB", level: "Beginner" },
    { skill: "Express.js", level: "Intermediate" },
    { skill: "React Native", level: "Beginner" },
    { skill: "Tailwind CSS", level: "Advanced" }
  ];



  const technologies = [
    'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Firebase',
    'JavaScript', 'TypeScript', 'Tailwind CSS', 'Git', 'Vercel', 'AWS'
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
              <Link href='#form' className="px-8 py-3 border border-gray-600 hover:border-gray-400 text-white rounded-lg font-medium transition-colors duration-200">
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

        <div className="max-w-6xl mx-auto p-6">
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

      </div>

    </div>
  )
}

export default page