import { useState } from "react"; // Already imported
import Link from "next/link";
import Logo from "./Logo";
import { useRouter, usePathname } from "next/navigation";
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon } from "./Icons";
import { motion } from "framer-motion";
import MobileNavBar from "./MobileNavBar";

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
  );
};

const NavBar = ({ showNavBar = true }) => {
  if (!showNavBar) return null;
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(''); // Step 2: State for active link

  return (
    <header className="top-0 z-50 w-full px-8 sm:px-32 py-8 font-medium flex items-center justify-between relative backdrop-blur bg-white/80 dark:bg-dark/80">
      <div className="w-full flex justify-between items-center">
        {/* Mobile Navigation */}
        <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex">
          <CustomLink 
            href="/" 
            title="Home" 
            className={`mr-4 text-xl text-dark ${activeLink === 'home' ? 'underline' : ''}`} 
            onClick={() => setActiveLink('home')} 
          />
          <CustomLink 
            href="/about" 
            title="About" 
            className={`mx-4 text-xl text-black ${activeLink === 'about' ? 'underline' : ''}`} 
            onClick={() => setActiveLink('about')} 
          />
          <CustomLink 
            href="/Projects" 
            title="Projects" 
            className={`mx-4 text-xl text-dark ${activeLink === 'projects' ? 'underline' : ''}`} 
            onClick={() => setActiveLink('projects')} 
          />
          <CustomLink 
            href="/Articles" 
            title="Articles" 
            className={`ml-4 text-xl text-dark ${activeLink === 'articles' ? 'underline' : ''}`} 
            onClick={() => setActiveLink('articles')} 
          />
        </nav>

        {/* Logo - Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo />
        </div>

        {/* Desktop Social Icons */}
        <nav className="hidden sm:flex items-center justify-center flex-wrap">
          <motion.a
            href="mailto:gokulakrishnan.msamy@gmail.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-3 flex items-center justify-center"
            rel="noreferrer"
          >
            <span role="img" aria-label="email" className="text-2xl">✉️</span>
          </motion.a>
          <motion.a
            href="https://github.com/gokul-1998"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-3"
            rel="noreferrer"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/gokulakrishnan-muthusamy-141a78201"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-3"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </motion.a>
          
        </nav>
      </div>
    </header>
  );
};

export default NavBar;