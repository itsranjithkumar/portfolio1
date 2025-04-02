import React from 'react'
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/navigation';
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon } from './Icons';
import { motion } from 'framer-motion';
import { useThemeSwitcher } from './hooks/useThemeSwitcher';
import { SunIcon, MoonIcon } from './Icons';
import { useState } from 'react';

const CustomLink = ({href, title, className="", onClick}) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`} onClick={onClick}>
      {title}
      <span className={`h-[1px] inline-block bg-dark dark:bg-light
      absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
      ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='w-full px-8 sm:px-32 py-8 font-medium flex items-center justify-between relative'>
      <div className='w-full flex justify-between items-center'>
        {/* Hamburger Menu - Left side */}
        <button 
          className="flex-col justify-center items-center flex sm:hidden"
          onClick={handleClick}
        >
          <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}></span>
          <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
          <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}></span>
        </button>

        {/* Desktop Navigation */}
        <nav className='hidden sm:flex'>
          <CustomLink href="/" title="Home" className='mr-4'/>
          <CustomLink href="/about" title="About" className='mx-4'/>
          <CustomLink href="/Projects" title="Projects" className='mx-4'/>
          <CustomLink href="/Articles" title="Articles" className='ml-4'/>
        </nav>

        {/* Logo - Center */}
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Logo />
        </div>

        {/* Desktop Social Icons */}
        <nav className='hidden sm:flex items-center justify-center flex-wrap'>
          <button 
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className='ml-3 flex items-center justify-center rounded-full p-1'
          >
            {mode === "dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>}
          </button>
          <motion.a href="https://twitter.com/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9}} className='w-6 mx-3'><TwitterIcon/></motion.a>
          <motion.a href="https://github.com/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'><GithubIcon/></motion.a>
          <motion.a href="https://www.linkedin.com/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'><LinkedInIcon/></motion.a> 
          <motion.a href="https://www.pinterest.com/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'><PinterestIcon/></motion.a>
          <motion.a href="https://dribbble.com/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 ml-3'><DribbbleIcon/></motion.a>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[85vw] sm:hidden flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-black/80 backdrop-blur-sm rounded-lg py-20"
        >
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col items-center justify-center mb-6">
            <CustomLink href="/" title="Home" className='my-2 text-white hover:text-white/75' onClick={handleClick}/>
            <CustomLink href="/about" title="About" className='my-2 text-white hover:text-white/75' onClick={handleClick}/>
            <CustomLink href="/Projects" title="Projects" className='my-2 text-white hover:text-white/75' onClick={handleClick}/>
            <CustomLink href="/Articles" title="Articles" className='my-2 text-white hover:text-white/75' onClick={handleClick}/>
          </nav>
 
          {/* Mobile Social Icons */}
          <nav className='flex items-center justify-center gap-4'>
            <button 
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className='flex items-center justify-center rounded-full p-1'
            >
              {mode === "dark" ? 
                <SunIcon className={"fill-white"}/> : 
                <MoonIcon className={"fill-white"}/>
              }
            </button>
            <motion.a href="https://twitter.com/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9}} className='w-6'><TwitterIcon className="text-white"/></motion.a>
            <motion.a href="https://github.com/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6'><GithubIcon className="text-white"/></motion.a>
            <motion.a href="https://www.linkedin.com/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6'><LinkedInIcon className="text-white"/></motion.a> 
            <motion.a href="https://www.pinterest.com/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6'><PinterestIcon className="text-white"/></motion.a>
            <motion.a href="https://dribbble.com/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6'><DribbbleIcon className="text-white"/></motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

export default NavBar