"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const SkillCategory = ({ title, skills, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold mb-6 relative inline-block">
        {title}
        <motion.span 
          className="absolute bottom-0 left-0 h-[2px] bg-black dark:bg-white"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        />
      </h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: delay + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer"
          >
            <div 
              className="px-6 py-3 rounded-lg border-2 border-black dark:border-white font-medium 
                         bg-black text-white transition-all duration-300 ease-in-out
                         group-hover:bg-white group-hover:text-black"
            >
              {skill}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillsData = {
    "Frontend Development": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
    "Backend & Database": [
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "REST API",
    ],
    "Tools & Others": [
      "Git",
      "GitHub",
      "VS Code",
      "Responsive Design",
      "Web Performance",
    ],
  }

  if (!mounted) return null

  return (
    <section className="py-20 px-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <motion.h2 
          className="text-7xl font-bold mb-6 relative inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-black dark:bg-white mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </motion.div>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <SkillCategory
            key={category}
            title={category}
            skills={skills}
            delay={index * 0.3}
          />
        ))}
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-black/5 dark:bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 bg-black/5 dark:bg-white/5 rounded-full blur-3xl" />
    </section>
  )
}

export default Skills
