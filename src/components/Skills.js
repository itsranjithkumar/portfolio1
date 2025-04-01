"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const SkillCard = ({ skill, index, category }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
          rotateY: isHovered ? 10 : 0,
          rotateX: isHovered ? -10 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="relative z-10 bg-white dark:bg-black p-6 rounded-2xl border-2 border-black dark:border-white
                   shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]
                   transform-gpu"
      >
        <div className="flex flex-col gap-4">
          <span className="text-2xl md:text-3xl font-bold">{skill.name}</span>
          <div className="space-y-3">
            <div className="h-2 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-black dark:bg-white rounded-full"
              />
            </div>
            <span className="text-sm font-medium text-black/60 dark:text-white/60">
              {skill.level}% Proficiency
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const SkillCategory = ({ title, skills, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="mb-24"
    >
      <div className="relative mb-12">
        <motion.h3 
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <motion.div
          className="absolute -bottom-4 left-0 h-1 bg-black dark:bg-white"
          initial={{ width: 0 }}
          animate={{ width: "40%" }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
            category={title}
          />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const [mounted, setMounted] = useState(false)

  const skillsData = {
    "Frontend Development": [
      { name: "React & Next.js", level: 95, icon: "react" },
      { name: "TypeScript", level: 90, icon: "typescript" },
      { name: "Tailwind CSS", level: 95, icon: "tailwind" },
      { name: "Framer Motion", level: 85, icon: "framer" },
      { name: "Three.js", level: 80, icon: "threejs" },
      { name: "WebGL", level: 75, icon: "webgl" },
    ],
    "Backend Architecture": [
      { name: "Node.js", level: 90, icon: "node" },
      { name: "Express.js", level: 85, icon: "express" },
      { name: "GraphQL", level: 85, icon: "graphql" },
      { name: "MongoDB", level: 90, icon: "mongodb" },
      { name: "PostgreSQL", level: 85, icon: "postgresql" },
      { name: "Redis", level: 80, icon: "redis" },
    ],
    "Development & DevOps": [
      { name: "Git & GitHub", level: 95, icon: "git" },
      { name: "Docker", level: 85, icon: "docker" },
      { name: "AWS Services", level: 80, icon: "aws" },
      { name: "CI/CD", level: 85, icon: "cicd" },
      { name: "System Design", level: 90, icon: "system" },
      { name: "Testing", level: 85, icon: "testing" },
    ]
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-32 px-8 relative">
      {/* Header */}
      <div className="text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative inline-block"
        >
          <h2 className="text-7xl md:text-8xl font-bold mb-6">Expertise</h2>
          <motion.div
            className="absolute -bottom-4 left-1/2 w-1/2 h-1 bg-black dark:bg-white -translate-x-1/2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl mt-8 tracking-wide max-w-3xl mx-auto"
        >
          Mastering modern technologies to create exceptional digital experiences
        </motion.p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <SkillCategory
            key={category}
            title={category}
            skills={skills}
            delay={index * 0.3}
          />
        ))}
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-black/10 to-transparent dark:from-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-black/10 to-transparent dark:from-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  )
}

export default Skills
