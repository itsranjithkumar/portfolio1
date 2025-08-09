"use client"

import { useEffect, useRef, useState } from "react"
import Head from "next/head"
import Layout from "@/components/Layout"
import profilepic from "../../public/images/profile/gokul.png"
import Image from "next/image"
import { useMotionValue, useSpring, useInView } from "framer-motion"
import AnimatedText from "@/components/AnimatedText"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import MobileAboutSection from "@/components/MobileAboutSection"
import MobileExperienceSection from "@/components/MobileExperienceSection"
import MobileEducationSection from "@/components/MobileEducationSection"
import MobileSkillsSection from "@/components/MobileSkillsSection"
import TransitionEffect from "@/components/TransitionEffect"

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref)

  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      motionValue.set(value)
      setHasAnimated(true)
    }
  }, [isInView, value, motionValue, hasAnimated])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>GokulKrishnan | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center overflow-visible">
        {/* Mobile-optimized sections - ONLY visible on mobile */}
        <div className="md:hidden w-full">
          <MobileAboutSection profilePic={profilepic} />
          <MobileSkillsSection />
          <MobileExperienceSection />
          <MobileEducationSection />
        </div>

        {/* Desktop layout - ONLY visible on desktop */}
        <div className="hidden md:block w-full">
          <Layout className="pt-8 sm:pt-16 relative z-0">
            <AnimatedText text="Passion Fuels Purpose!"               className="mb-6 sm:mb-10 !text-4xl sm:!text-5xl md:!text-5xl lg:!text-6xl"/>
            <div className="grid w-full grid-cols-1 md:grid-cols-8 gap-6 md:gap-16">
              {/* Biography section */}
              <div
                className="col-span-1 md:col-span-3 flex flex-col items-start justify-start order-2 md:order-1 
                px-4 md:px-0 mt-6 md:mt-0"
              >
                <h2 className="mb-4 text-xl font-bold uppercase text-black/75 dark:text-light/75 self-center md:self-start">Biography</h2>
                <p
                  className="font-medium text-base md:text-lg text-dark dark:text-light !leading-relaxed 
                  text-center md:text-left whitespace-normal"
                >
                  Hi, I&apos;m Gokulakrishnan, a passionate Full Stack Developer with expertise in Python and modern web technologies. 
                  I specialize in building scalable applications and implementing efficient backend solutions.
                </p>
                <p
                  className="my-4 font-medium text-base md:text-lg text-dark dark:text-light !leading-relaxed 
                  text-center md:text-left whitespace-normal"
                >
                  With a strong foundation in both frontend and backend development, I excel at creating robust applications 
                  using technologies like Python, Flask, FastAPI, React, and various database systems. I have extensive experience 
                  in DevOps practices and microservices architecture.
                </p>
                <p
                  className="font-medium text-base md:text-lg text-dark dark:text-light !leading-relaxed 
                  text-center md:text-left whitespace-normal"
                >
                  I&apos;m particularly passionate about optimizing application performance, implementing secure authentication systems, 
                  and developing scalable solutions. My experience includes working with diverse teams and delivering high-quality 
                  software solutions that meet business objectives.
                </p>
              </div>

              {/* Profile picture with updated border style */}
              <div className="col-span-1 md:col-span-3 flex items-center justify-center order-1 md:order-2">
                <div className="relative h-max rounded-2xl 
                  border-[3px] border-solid border-black bg-white p-6 sm:p-8 
                  w-[85%] md:w-full
                  shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                  hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                  hover:translate-x-[-3px] hover:translate-y-[-3px]
                  transition-all duration-300">
                  <Image 
                    src={profilepic || "/placeholder.svg"} 
                    alt="GokulKrishnan" 
                    className="w-full h-auto rounded-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Stats section - full width on mobile, 2 cols on larger screens */}
              <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-end justify-between gap-6 md:gap-0 order-3">
                <div className="flex flex-col items-center md:items-end justify-center">
                  <span className="inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-dark">
                    <AnimatedNumbers value={50} />+
                  </span>
                  <h2 className="text-sm sm:text-base md:text-base font-medium capitalize text-black/75 text-center md:text-right">
                    satisfied clients
                  </h2>
                </div>

                <div className="flex flex-col items-center md:items-end justify-center">
                  <span className="inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-dark">
                    <AnimatedNumbers value={40} />+
                  </span>
                  <h2 className="text-sm sm:text-base md:text-base font-medium capitalize text-black/75 text-center md:text-right">
                    projects completed
                  </h2>
                </div>

                <div className="flex flex-col items-center md:items-end justify-center">
                  <span className="inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-dark">
                    <AnimatedNumbers value={4} />+
                  </span>
                  <h2 className="text-sm sm:text-base md:text-base font-medium capitalize text-black/75 text-center md:text-right">
                    years of experience
                  </h2>
                </div>
              </div>
            </div>
          </Layout>

          <Skills />
          <Experience />
          <Education />
        </div>
      </main>
    </>
  )
}

export default about
