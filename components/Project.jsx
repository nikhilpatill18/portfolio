"use client"
import React from 'react'
import { GlowCard } from './spotlight-card'
import Link from 'next/link'
const Project = ({ title, description, techstack, link }) => {
    console.log(techstack.split(" "));


    const tectstack = techstack.split(" ")
    return (
        <div>
            <GlowCard className="flex justify-center items-center">

                <div className="flex flex-col gap-5 justify-center items-start ">
                    <h1 className="text-3xl">
                        {title}
                    </h1>
                    <p >

                        {description}
                    </p>
                    <div className="flex gap-5">
                        {
                            tectstack.map((tech) => (<span>{tech}</span>))
                        }
                    </div>

                    <Link href={link} className="px-6 py-2   rounded-lg  text-center text-2xl  ">
                        View Code
                    </Link>
                </div>
            </GlowCard>
        </div>
    )
}

export default Project
