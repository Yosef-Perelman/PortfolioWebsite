"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverLay from './MenuOverLay';
import { HOME_EMOJI } from '../../../public/assets/emojis';
import smoothscroll from 'smoothscroll-polyfill';

const navLinks = [
    {
        title: "Home",
        path: "#home",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        smoothscroll.polyfill();
    }, []);

    const handleScroll = (e) => {
        // First prevent the default anchor behavior
        e.preventDefault();

        // Get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");

        // Get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        
        if (elem) {
            setNavbarOpen(false);
            window.scrollTo({
                top: elem.offsetTop - 100, // Adjust this value as needed
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className='fixed mx-auto border-b border-primary top-0 left-0 right-0 z-10 bg-secondary bg-opacity-100'>
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link
                    href={'/'}
                    className="text-accent text-2xl md:text-5xl font-semibold"
                >
                    <span className="text-accent">
                    Y.P.
                    </span>
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} onClick={handleScroll} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverLay links={navLinks} handleScroll={handleScroll} /> : null}
        </nav>
    )
}

export default Navbar