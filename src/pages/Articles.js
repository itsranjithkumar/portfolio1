import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import Article1 from '../../public/images/articles/pagination component in reactjs.jpg'
// import Article2 from '../../public/images/articles/create loading screen in react js.jpg'
import { motion, useMotionValue } from 'framer-motion'
import article3 from '../../public/images/articles/create modal component in react using react portals.png';
import article4 from '../../public/images/articles/form validation in reactjs using custom react hook.png';
import article5 from '../../public/images/articles/smooth scrolling in reactjs.png';
import MobileArticlesView from '@/components/MobileArticlesView'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image); 

const MovingImg = ({title, img, link}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event){
    imgRef.current.style.display = "inline-block";
    x.set(event.clientX - 100);
    y.set(-150);
  }

  function handleMouseLeave(event){
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} target="_blank"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}
    className="relative">
      <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
      <FramerImage 
        style={{
          x:x, 
          y:y,
          position: 'fixed',
        }}
        ref={imgRef} 
        src={img} 
        alt={title} 
        className='z-50 w-96 h-auto hidden absolute rounded-lg bg-white
        shadow-[0px_5px_10px_rgba(0,0,0,0.3)]'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        priority
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </Link>
  )
}

const Articles = ({img, title, date, link}) => {
  return (
    <motion.li 
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
    viewport={{once:true}}
    
    className='relative w-full p-4 py-4 rounded-xl flex items-center
    justify-between bg-white text-black 
    border-[3px] border-solid border-black
    shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
    hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
    hover:translate-x-[-3px] hover:translate-y-[-3px]
    transition-all duration-300
    mb-4'>
      <MovingImg title={title} img={img} link={link}/>
      <span className='text-pink-500 font-semibold pl-4'>{date}</span>
    </motion.li>
  )
}

const FeatureArticle = ({img, title, time, summary, link}) => {
  return (
    <li className='col-span-1 w-full p-4 bg-white 
    rounded-2xl border-[3px] border-solid border-black
    shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
    hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
    hover:translate-x-[-3px] hover:translate-y-[-3px]
    transition-all duration-300'>
      <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale: 1.05}}
                transition={{duration: 0.2}}
                />
            </Link>
            <Link href={link} target="_blank">
              <h2 className='capitalize inline-block text-2xl font-bold my-2 mt-4 hover:underline rounded-lg'>{title}</h2>
            </Link>

            <p className='text-sm mb-2'>
              {summary}
            </p>
            <span className='text-pink-500 font-semibold'>
              {time}
            </span>
    </li>
  )
}

const articles = () => {
  // Data for featured articles
  const featuredArticlesData = [
    {
      title: "Build A Custom Pagination Component In Reactjs From Scratch",
      summary: "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.",
      time: "9 min read",
      link: "/",
      img: Article1
    },
    {
      title: "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",
      summary: "Learn how to build a custom form validation hook in ReactJS from scratch. Follow this step-by-step guide to integrate form validation in your ReactJS project.",
      time: "9 min read",
      link: "/",
      img: article4
    }
  ];

  // Data for regular articles
  const articlesData = [
    {
      title: "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",
      img: article5,
      date: "2025-01-01",
      link: "/"
    },
    {
      title: "Creating An Efficient Modal Component In React Using Hooks And Portals",
      img: article3,
      date: "2025-01-01",
      link: "/"
    },
    {
      title: "Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers",
      img: article3,
      date: "2025-01-01",
      link: "/"
    },
    {
      title: "Creating A Loading Screen In React: Improve User Experience",
      img: article3,
      date: "2025-01-01",
      link: "/"
    },
    {
      title: "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",
      img: article3,
      date: "2025-01-01",
      link: "/"
    },
    {
      title: "Build A Custom Pagination Component In Reactjs From Scratch",
      img: article3,
      date: "2025-01-01",
      link: "/"
    }
  ];

  return (
    <>
      <Head>
        <title>Ranjithkumar | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main>
        {/* Mobile View - Only visible on mobile */}
        <MobileArticlesView 
          featuredArticles={featuredArticlesData} 
          articles={articlesData} 
        />
        
        {/* Desktop View - Only visible on desktop */}
        <div className="hidden md:block">
          <Layout className='w-full pt-16 flex flex-col items-center justify-center overflow-hidden'>
            <AnimatedText text="Words Can Change The World!" className='mb-8 sm:mb-16 !text-4xl sm:!text-6xl md:!text-7xl lg:!text-8xl'/>
            <ul className='grid grid-cols-2 gap-16'>
              {featuredArticlesData.map((article, index) => (
                <FeatureArticle
                  key={index}
                  title={article.title}
                  summary={article.summary}
                  time={article.time}
                  link={article.link}
                  img={article.img}
                />
              ))}
            </ul>
            <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>

            <ul className='w-full flex flex-col items-center gap-4'>
              {articlesData.map((article, index) => (
                <Articles 
                  key={index}
                  title={article.title}
                  img={article.img}
                  date={article.date}
                  link={article.link}
                />
              ))}
            </ul>
          </Layout>
        </div>
      </main>
    </>
  )
}

export default articles
