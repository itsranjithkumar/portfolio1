"use client"
import Image from "next/image"
import AnimatedText from "@/components/AnimatedText"

const MobileAboutSection = ({ profilePic }) => {
  return (
    <div className="md:hidden w-full flex flex-col items-center px-4">
      {/* Heading */}
      <AnimatedText text="Passion Fuels Purpose!" className="mb-8 !text-4xl sm:!text-5xl" />

      {/* Profile Picture with border */}
      <div className="relative w-[85%] max-w-[320px] mb-8">
        <div className="rounded-2xl border-2 border-solid border-black bg-white p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)]">
          <Image
            src={profilePic || "/placeholder.svg"}
            alt="Profile Picture"
            className="w-full h-auto rounded-xl"
            priority
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      </div>

      {/* Biography Section */}
      <div className="w-full mb-12">
        <h2 className="text-4xl font-bold mb-6 text-left dark:text-light">BIOGRAPHY</h2>
        <div className="text-lg space-y-6 dark:text-light">
          <p>
            Hi, I&apos;m <span className="font-bold">Gokulakrishnan</span>, a passionate Full Stack Developer with expertise 
            in Python and modern web technologies. I specialize in building scalable applications and implementing efficient 
            backend solutions.
          </p>
          <p>
            With a strong foundation in both frontend and backend development, I excel at creating robust applications 
            using technologies like Python, Flask, FastAPI, React, and various database systems. I have extensive experience 
            in DevOps practices and microservices architecture.
          </p>
          <p>
            I&apos;m particularly passionate about optimizing application performance, implementing secure authentication systems, 
            and developing scalable solutions. My experience includes working with diverse teams and delivering high-quality 
            software solutions that meet business objectives.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full grid grid-cols-3 gap-4 text-center mb-16">
        <div>
          <h3 className="text-5xl font-bold mb-2">40+</h3>
          <p className="text-lg text-gray-600">Satisfied Clients</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold mb-2">50+</h3>
          <p className="text-lg text-gray-600">Projects Completed</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold mb-2">4+</h3>
          <p className="text-lg text-gray-600">Years Of Experience</p>
        </div>
      </div>
    </div>
  )
}

export default MobileAboutSection

