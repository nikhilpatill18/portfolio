"use client"
import React, { useState, useEffect } from 'react'
import { NavBar } from './ui/tubelight-navbar'
import { Home, User, Briefcase, FileText, Contact, Languages } from 'lucide-react'

const Navbar = () => {
    const navItems = [
        { name: 'Home', url: '#home', icon: Home },
        { name: 'Who i Am', url: '#about', icon: User },
        { name: 'What i know', url: '#skills', icon: Languages },
        { name: 'What i Do', url: '#project', icon: Briefcase },
        { name: 'Connect me', url: '#contact', icon: Contact }

    ]

    const [activeId, setactiveId] = useState()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            console.log(entries);

            entries.forEach(entry => {
                console.log(entry);

                if (entry.isIntersecting) {
                    setactiveId(entry.target.id)
                }
            })
        },
            {
                threshold: 0.5
            }
        )

        navItems.forEach(item => {
            const id = item.url.replace('#', '');
            const ele = document.getElementById(id)
            if (ele) observer.observe(ele)
        })
        return () => observer.disconnect()
    }, [])
    return (
        <div>

            <NavBar items={navItems} activeId={activeId} />
        </div>
    )
}

export default Navbar
