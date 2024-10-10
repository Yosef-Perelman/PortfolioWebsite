"use client"

import React, { useTransition, useState, useRef } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { motion, useInView } from 'framer-motion';

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><span className='font-bold'>Bar-Ilan University</span> - B.Sc, Computer Science</li>
        <li>Udemi, YouTube, Lectures, Books, meetup's and anywhere I can learn and improve</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>Sql</li>
        <li>Node</li>
        <li>React</li>
        <li>Flask</li>
        <li>Spring</li>
      </ul>
    ),
  },
  {
    title: "Frameworks",
    id: "frameworks",
    content: (
      <ul className="list-disc pl-2">
        <li>MySql</li>
        <li>MongoDB</li>
        <li>Git</li>
        <li>Docker</li>
        <li>AWS</li>
        <li>GCP</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" ref={ref} className="bg-secondary text-accent">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        className='md:grid md:grid-cols-2 gap-8 py-8 px-4 items-start xl:gap-16 sm:py-16 xl:px-16'
      >
        <Image 
        src='/assets/images/aboutpic.jpeg' 
        width={500} 
        height={500} 
        className="rounded-lg"
        // style={{ objectFit: 'cover', aspectRatio: 1 }} 
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className='text-4xl font-bold mb-4 text-primary'>About Me</h2>
          <p className='text-base lg:text-lg text-gray-300'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frameworks")}
              active={tab === "frameworks"}
            >
              Frameworks
            </TabButton>
          </div>
          <div className=" p-1 rounded-md">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection