"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon } from "./Icons"
import Logo from "./Logo"

const CustomLink = ({ href, title, className = "", onClick }) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group`} onClick={onClick}>
      {title}
      <span
        className={`h-[1px] inline-block bg-white 
      absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
      ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const MobileNavBar = ({ isOpen, setIsOpen, mode, setMode }) => {
  const handleClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="flex-col justify-center items-center flex sm:hidden bg-black p-2 rounded" onClick={() => setIsOpen(!isOpen)}>
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center sm:hidden"
        >
          {/* Close Button */}
          <div className="absolute top-8 right-8">
            <button onClick={handleClick} className="text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Logo */}
          {/* <div className="flex flex-col items-center mt-4">
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
              <Logo />
            </div>
            <h1 className="text-4xl font-bold text-white mt-4">Passion Fuels</h1>
          </div> */}

          {/* Navigation Links - Reduced gap */}
          <nav className="flex flex-col items-center justify-center gap-4 text-2xl">
            <CustomLink href="/" title="Home" className="text-white hover:text-white/75" onClick={handleClick} />
            <CustomLink href="/about" title="About" className="text-white hover:text-white/75" onClick={handleClick} />
            <CustomLink
              href="/Projects"
              title="Projects"
              className="text-white hover:text-white/75"
              onClick={handleClick}
            />
            <CustomLink
              href="/Articles"
              title="Articles"
              className="text-white hover:text-white/75"
              onClick={handleClick}
            />
          </nav>

          {/* Social Icons - Moved closer to navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.a
              href="https://twitter.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
              rel="noreferrer"
            >
              <TwitterIcon className="text-white" />
            </motion.a>
            <motion.a
              href="https://github.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
              rel="noreferrer"
            >
              <GithubIcon className="text-white" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
              rel="noreferrer"
            >
              <LinkedInIcon className="text-white" />
            </motion.a>
            <motion.a
              href="https://www.pinterest.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
              rel="noreferrer"
            >
              <PinterestIcon className="text-white" />
            </motion.a>
            <motion.a
              href="https://dribbble.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
              rel="noreferrer"
            >
              <DribbbleIcon className="text-white" />
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default MobileNavBar
