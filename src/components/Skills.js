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
        className="relative z-10 bg-white p-6 rounded-2xl border-2 border-black
                   shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                   transform-gpu"
      >
        <div className="flex flex-col gap-4">
          <span className="text-2xl md:text-3xl font-bold text-black">{skill.name}</span>
          <div className="space-y-3">
            <div className="h-2 w-full bg-black/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-black rounded-full"
              />
            </div>
            <span className="text-sm font-medium text-black/60">
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
          className="absolute -bottom-4 left-0 h-1 bg-black"
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
    "Languages & Frameworks": [
      { name: "Python", level: 95, icon: "python" },
      { name: "JavaScript", level: 90, icon: "javascript" },
      { name: "React & React Native", level: 85, icon: "react" },
      { name: "Flask & FastAPI", level: 90, icon: "flask" },
      { name: "Django", level: 85, icon: "django" },
      { name: "Vue.js", level: 80, icon: "vue" },
      { name: "Node.js & Express", level: 85, icon: "node" },
      { name: "Java & C++", level: 80, icon: "java" },
    ],
    "Database & Data Engineering": [
      { name: "PostgreSQL", level: 90, icon: "postgresql" },
      { name: "Oracle DB", level: 85, icon: "oracle" },
      { name: "MySQL", level: 85, icon: "mysql" },
      { name: "SQLAlchemy ORM", level: 90, icon: "sqlalchemy" },
      { name: "Pandas & NumPy", level: 90, icon: "pandas" },
      { name: "Data Visualization", level: 85, icon: "matplotlib" },
      { name: "Redis & Celery", level: 85, icon: "redis" },
    ],
    "Architecture & DevOps": [
      { name: "Microservices", level: 90, icon: "microservices" },
      { name: "MVC Pattern", level: 95, icon: "mvc" },
      { name: "Docker", level: 90, icon: "docker" },
      { name: "Azure DevOps", level: 85, icon: "azure" },
      { name: "GitHub Actions", level: 85, icon: "github" },
      { name: "Linux & Shell", level: 90, icon: "linux" },
      { name: "RBAC & Security", level: 85, icon: "security" },
    ]
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-32 px-8 relative bg-white dark:bg-dark">
      {/* Header */}
      <div className="text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative inline-block"
        >
          <h2 className="text-7xl md:text-8xl font-bold text-black dark:text-light mb-6">Technical Skills</h2>
          <motion.div
            className="absolute -bottom-4 left-1/2 w-1/2 h-1 bg-black dark:bg-light -translate-x-1/2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl mt-8 tracking-wide max-w-3xl mx-auto text-black dark:text-light/75"
        >
          Full Stack Development | Data Engineering | DevOps
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
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-black/10 to-transparent rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-black/10 to-transparent rounded-full blur-3xl"
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
