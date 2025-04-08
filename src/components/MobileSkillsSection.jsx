"use client"
import { motion } from "framer-motion"

const MobileSkillItem = ({ name, level }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold dark:text-light">{name}</h3>
        <span className="text-sm font-medium text-pink-500">{level}%</span>
      </div>
      <div className="h-2 w-full bg-white dark:bg-white/75 rounded-full overflow-hidden border border-black/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-black/80 dark:bg-black rounded-full"
        />
      </div>
    </motion.div>
  )
}

const MobileSkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-6 dark:text-light">{title}</h3>
      <div>
        {skills.map((skill, index) => (
          <MobileSkillItem key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  )
}

const MobileSkillsSection = () => {
  const skillsData = {
    "Languages & Frameworks": [
      { name: "Python", level: 95 },
      { name: "Flask & FastAPI", level: 90 },
      { name: "Django", level: 85 },
      { name: "React & React Native", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "Node.js & Express", level: 85 },
    ],
    "Database & Data Engineering": [
      { name: "PostgreSQL & Oracle", level: 90 },
      { name: "MySQL & SQLite", level: 85 },
      { name: "SQLAlchemy ORM", level: 90 },
      { name: "Pandas & NumPy", level: 90 },
      { name: "Redis & Celery", level: 85 },
      { name: "Data Visualization", level: 85 },
    ],
    "Architecture & DevOps": [
      { name: "MVC & RBAC", level: 90 },
      { name: "Microservices", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Azure DevOps", level: 85 },
      { name: "GitHub Actions", level: 85 },
      { name: "Linux & Shell", level: 90 },
    ],
    "Core Concepts": [
      { name: "Data Structures & Algorithms", level: 90 },
      { name: "OOP & Functional Programming", level: 90 },
      { name: "Asynchronous Programming", level: 85 },
      { name: "CI/CD Pipeline", level: 85 },
    ]
  }

  return (
    <div className="md:hidden w-full px-6 py-16 dark:bg-dark">
      <h2 className="text-5xl font-bold text-center mb-16 dark:text-light">Technical Skills</h2>

      <div>
        {Object.entries(skillsData).map(([category, skills], index) => (
          <MobileSkillCategory key={index} title={category} skills={skills} />
        ))}
      </div>
    </div>
  )
}

export default MobileSkillsSection

