"use client"
import React from 'react'
import { NavBar } from './ui/tubelight-navbar'
import { Home, User, Briefcase, FileText, Contact, Languages } from 'lucide-react'

const Navbar = () => {
    const navItems = [
        { name: 'Home', url: '#home', icon: Home },
        { name: 'Who i Am', url: '#about', icon: User },
        { name: 'What i Do', url: '#project', icon: Briefcase },
        { name: 'What i know', url: '#skills', icon: Languages },
        { name: 'Connect me', url: '#contact', icon: Contact }

    ]
    return (
        <div>

            <NavBar items={navItems} />
        </div>
    )
}

export default Navbar
