"use client"
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import { MenuIcon } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='fixed p-3 w-full flex items-center justify-between bg-neutral-200/.5 backdrop-blur-md border-b border-neutral-300 dark:border-neutral-800 z-[1000]'>
        <aside className='flex items-center gap-3 md:gap-4'>
            <h3 className='text-2xl'>dev/aaron</h3>
            <nav className='flex items-center gap-3'>
                <Link href='/'>
                    <FaGithub size={25} className='hover:scale-110 transition duration-300'/>
                </Link>
                <Link href='/'>
                    <FaLinkedin size={25} className='hover:scale-110 transition duration-300'/>
                </Link>
                <Link href='/'>
                    <FaTwitter size={25} className='hover:scale-110 transition duration-300'/>
                </Link>
            </nav>
        </aside>

        <nav className='flex items-center gap-5'>
            <ul className='hidden md:flex items-center gap-8 text-[1.1rem] font-medium'>
                <li className='hover:scale-110 transition duration-300'>
                    <Link href='/'>Skills</Link>
                </li>
                <li className='hover:scale-110 transition duration-300'>
                    <Link href='/'>Tools</Link>
                </li>
                <li className='hover:scale-110 transition duration-300'>
                    <Link href='/'>Work</Link>
                </li>
                <li className='hover:scale-110 transition duration-300'>
                    <Link href='/'>Blog</Link>
                </li>
                <li className='hover:scale-110 transition duration-300'>
                    <Link href='/'>Contact</Link>
                </li>
            </ul>
            <ModeToggle />
            <div className='md:hidden border p-1.5 rounded-md hover:bg-secondary'>
                <MenuIcon/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar