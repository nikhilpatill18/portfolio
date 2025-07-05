"use client"
import React from 'react'
import { NavBar } from './ui/tubelight-navbar'
import { Home, User, Briefcase, FileText } from 'lucide-react'

const Navbar = () => {
    const navItems = [
        { name: 'Home', url: '#', icon: Home },
        { name: 'Who i Am', url: '#about', icon: User },
        { name: 'What i Do', url: '#project', icon: Briefcase },
        { name: 'Connect me', url: '#', icon: FileText }

    ]
    return (
        <div>

            <NavBar items={navItems} />
        </div>
    )
}

export default Navbar
