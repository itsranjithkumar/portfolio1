"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
// import { Plus, X, Edit, Save } from "lucide-react"

const Skills = () => {
  const [mounted, setMounted] = useState(false)

  // Initial skills data
  const [skills, setSkills] = useState([
    { id: 1, name: "Web", orbit: 0, angle: 0 }, // Center skill
    // First orbit
    { id: 2, name: "HTML", orbit: 1, angle: 0 },    // 0 degrees
    { id: 3, name: "CSS", orbit: 1, angle: 105 },    // 90 degrees
    // Second orbit
    { id: 6, name: "NextJS", orbit: 2, angle: 30 },  // 30 degrees
    { id: 8, name: "Tailwind CSS", orbit: 2, angle: 320 }, // 270 degrees
    // Third orbit
    { id: 9, name: "Github", orbit: 3, angle: 165 },   // 0 degrees
    { id: 10, name: "Firebase", orbit: 3, angle: 60 }, // 60 degrees
    { id: 11, name: "Javascript", orbit: 3, angle: 128 },  // 120 degrees
    { id: 7, name: "ReactJS", orbit: 2, angle: 180 }, // 150 degrees
    { id: 12, name: "Web Design", orbit: 3, angle: 210 }, // 210 degrees
    { id: 13, name: "Web Development", orbit: 3, angle: 255 }, // 270 degrees
  ])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Ensure the skills are properly aligned in the orbital structure
  const getPosition = (orbit, angle) => {
    const orbitSizes = [0, 120, 220, 320];
    const radius = orbitSizes[orbit];
    const radians = (angle * Math.PI) / 180;
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;
    return { x, y };
  };

  if (!mounted) return null

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white dark:bg-gray-900 py-20">
      {/* Title */}
      <div className="w-full flex justify-center items-center mb-8 relative">
        <h2 className="font-bold text-8xl mb-8 w-full text-center dark:text-white">Skills</h2>
      </div>

      {/* Orbital visualization */}
      <div className="relative w-[700px] h-[700px]">
        {/* Orbit circles */}
        {[1, 2, 3].map((orbit) => (
          <div
            key={`orbit-${orbit}`}
            className="absolute top-1/2 left-1/2 rounded-full border border-gray-300 dark:border-gray-700"
            style={{
              width: `${orbit * 240}px`,
              height: `${orbit * 240}px`,
              transform: "translate(-50%, -50%)",
              opacity: 0.7,
            }}
          />
        ))}

        {/* Skills */}
        {skills.map((skill) => {
          const { x, y } = getPosition(skill.orbit, skill.angle)

          // Special styling for the center "Web" skill
          if (skill.orbit === 0) {
            return (
              <motion.div
                key={`skill-${skill.id}`}
                className="absolute top-1/2 left-1/2 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="bg-black dark:bg-black text-white px-6 py-3 rounded-full font-medium text-lg">
                  {skill.name}
                </div>
              </motion.div>
            )
          }

          // Animation for orbital skills
          const orbitDelay = skill.orbit * 0.1 + skill.id * 0.05

          return (
            <motion.div
              key={`skill-${skill.id}`}
              className="absolute top-1/2 left-1/2"
              initial={{ opacity: 0, x, y }}
              animate={{
                opacity: 1,
                x,
                y,
              }}
              transition={{
                opacity: { duration: 0.8, delay: orbitDelay },
                x: { duration: 0.8, delay: orbitDelay },
                y: { duration: 0.8, delay: orbitDelay },
              }}
              style={{
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="bg-black dark:bg-black text-white px-5 py-2.5 rounded-full font-medium whitespace-nowrap shadow-lg">
                {skill.name}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
