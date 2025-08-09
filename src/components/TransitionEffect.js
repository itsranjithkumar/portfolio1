import React from 'react'
import { motion } from 'framer-motion'

import { useEffect } from 'react';
const TransitionEffect = ({ onTransition }) => {
  useEffect(() => {
    if (typeof onTransition === 'function') {
      onTransition(true);
      const timer = setTimeout(() => onTransition(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [onTransition]);
  return (
    <>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-pink-500'
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
      />

      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white'
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
      />

      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-black'
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 1.5, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
      />
    </>
  )
}

export default TransitionEffect