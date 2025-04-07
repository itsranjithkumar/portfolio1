"use client"

import { useState } from "react"
import Link from "next/link"
import Logo from "./Logo"
import { useRouter, usePathname } from "next/navigation"
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon } from "./Icons"
import { motion } from "framer-motion"
import MobileNavBar from "./MobileNavBar"

const CustomLink = ({ href, title, className = "", onClick }) => {
  const pathname = usePathname();
  
  const isActive = pathname === href;
  
  return (
    <Link href={href} className={`${className} relative group`} onClick={onClick}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 
        ${isActive ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full px-8 sm:px-32 py-8 font-medium flex items-center justify-between relative">
      <div className="w-full flex justify-between items-center">
        {/* Mobile Navigation */}
        <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Desktop Navigation - Increased font size */}
        <nav className="hidden sm:flex">
          <CustomLink href="/" title="Home" className="mr-4 text-xl" />
          <CustomLink href="/about" title="About" className="mx-4 text-xl" />
          <CustomLink href="/Projects" title="Projects" className="mx-4 text-xl" />
          <CustomLink href="/Articles" title="Articles" className="ml-4 text-xl" />
        </nav>

        {/* Logo - Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo />
        </div>

        {/* Desktop Social Icons - Increased icon size */}
        <nav className="hidden sm:flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-3"
            rel="noreferrer"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-3"
            rel="noreferrer"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-3"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.pinterest.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-3"
            rel="noreferrer"
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://dribbble.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 ml-3"
            rel="noreferrer"
          >
            <DribbbleIcon />
          </motion.a>
        </nav>
      </div>
    </header>
  )
}

export default NavBar

