import AnimatedText from '@/components/AnimatedText'
import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import profilepic from '../../public/images/profile/developer-pic-2.jpg'
import Image from 'next/image'
import { useMotionValue, useSpring, useInView } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref);

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            motionValue.set(value);
            setHasAnimated(true);
        }
    }, [isInView, value, motionValue, hasAnimated]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
}

const about = () => {
  return (
    <>
    <Head>
        <title>Ranjithkumar | About Page</title>
        <meta name="description" content="any description" />
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='!pt-16'>
        <AnimatedText text="Passion Fuels Purpose!" className='mb-16'/>
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-black/75'>Biography</h2>
                <p className='font-medium'>
                    Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                    and user-centered digital experiences. With 4 years of experience in the field, I am always looking for 
                    new and innovative ways to bring my clients&apos; visions to life.
                </p>
                <p className='my-4 font-medium'> 
                    I believe that design is about more than just making things look pretty – it&apos;s about solving problems and 
                    creating intuitive, enjoyable experiences for users.
                </p>
                <p className='font-medium'>
                    Whether I&apos;m working on a website, mobile app, or 
                    other digital product, I bring my commitment to design excellence and user-centered thinking to 
                    every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                </p>
            </div>
            <div className='col-span-3 flex items-center justify-center'>
                <div className='relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8'>
                    <Image src={profilepic} alt="Ranjithkumar" className='w-full h-auto' />
                </div>
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                        <AnimatedNumbers value={50} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-black/75'>
                        satisfied clients
                    </h2>
                </div>

                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                        <AnimatedNumbers value={40} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-black/75'>
                    projects completed
                    </h2>
                </div>

                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                        <AnimatedNumbers value={1} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-black/75'>
                        years of experience 
                    </h2>
                </div>
            </div>
        </div>
        </Layout>
        <Skills />
        <Experience />
        <Education />
    </main>
    </>
  )
}

export default about