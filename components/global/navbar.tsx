"use client"
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import { MenuIcon } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '../ui/sheet'
import { useLenis } from '@studio-freight/react-lenis'



type NavLinks = {
    name: string
    href: string
}



const Navbar: React.FC  = () => {

    const lenis = useLenis((scroll) => {
    
    })

    const navLinks: NavLinks[] = [
        {
            name: 'Skills',
            href: '#skills'
        },
        {
            name: 'Tools',
            href: '#tools'
        },
        {
            name: 'Work',
            href: '#work'
        },
        {
            name: 'Blog',
            href: '#blog'
        },
        {
            name: 'Contact',
            href: '#contact'
        }
    ]
    
  return (
    <header className='fixed p-3 w-full flex items-center justify-between bg-neutral-200/.5 backdrop-blur-md border-b border-neutral-300 dark:border-neutral-800 z-50'>
        <aside className='flex items-center gap-3 md:gap-4'>
            <Link href='/' className='font-extrabold tracking-tight text-2xl'>dev/aaron</Link>
            <nav className='flex items-center gap-3'>
                <Link href='/'>
                    <FaGithub size={25} className='text-muted-foreground transition-colors hover:text-foreground'/>
                </Link>
                <Link href='/'>
                    <FaLinkedin size={25} className='text-muted-foreground transition-colors hover:text-foreground'/>
                </Link>
                <Link href='/'>
                    <FaTwitter size={25} className='text-muted-foreground transition-colors hover:text-foreground'/>
                </Link>
            </nav>
        </aside>

        <nav className='flex items-center gap-5'>
            <ul className='hidden lg:flex items-center gap-8 text-[1.1rem] font-medium'>
                {navLinks.map((link, index) => (
                    <li key={index} className='text-muted-foreground hover:text-foreground hover:scale-105 transition duration-200'>
                        <Link href={link.href} onClick={() => lenis?.scrollTo(`${link.href}`) } >{link.name}</Link>
                    </li>
                ))}
            </ul>
            <ModeToggle />

            {/* mobile menu */}
            <div className='lg:hidden z-[1000]'>
                <Sheet>
                    <SheetTrigger className='border p-1.5 rounded-md bg-background'>
                        <MenuIcon />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Aaron Robinson</SheetTitle>
                        </SheetHeader>
                        <ul className='flex flex-col gap-8 text-[1.75rem] font-medium mt-8'>
                                {navLinks.map((link, index) => (
                                        <SheetClose key={index} asChild>
                                            <Link key={index} href={link.href} onClick={() => lenis?.scrollTo(`${link.href}`) }>{link.name}
                                            </Link>
                                        </SheetClose>
                                ))}
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    </header>
  )
}

export default Navbar