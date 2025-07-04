"use client"
import React from 'react'
import { NavBar } from './ui/tubelight-navbar'
import { Home, User, Briefcase, FileText } from 'lucide-react'

const Navbar = () => {
    const navItems = [
        { name: 'Home', url: '#', icon: Home },
        { name: 'About', url: '#', icon: User },
        { name: 'Projects', url: '#', icon: Briefcase },
        { name: 'Resume', url: '#', icon: FileText }

    ]
    return (
        <div>

            <NavBar items={navItems} />
        </div>
    )
}

export default Navbar
