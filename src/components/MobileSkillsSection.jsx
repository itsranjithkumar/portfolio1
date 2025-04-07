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
        <h3 className="text-xl font-bold">{name}</h3>
        <span className="text-sm font-medium text-pink-500">{level}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-black rounded-full"
        />
      </div>
    </motion.div>
  )
}

const MobileSkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
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
    "Frontend Development": [
      { name: "React & Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ],
    "Backend Architecture": [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 90 },
    ],
    "Development & DevOps": [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS Services", level: 80 },
    ],
  }

  return (
    <div className="md:hidden w-full px-6 py-16">
      <h2 className="text-5xl font-bold text-center mb-16">Expertise</h2>

      <div>
        {Object.entries(skillsData).map(([category, skills], index) => (
          <MobileSkillCategory key={index} title={category} skills={skills} />
        ))}
      </div>
    </div>
  )
}

export default MobileSkillsSection

