"use client";

import React from 'react'
import SectionHeading from './section-heading'
import {motion} from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView("About");
  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' 
    initial={{opacity:0, y:100}} animate={{opacity:1,y:0}} transition={{delay:0.175}}
    id="about">
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
            Hello there! I'm a passionate Computer Science student currently pursuing an undergraduate degree in Computer Science at{" "}
            <span className="font-medium">the Georgia Insitute of Technolgy</span>, with a focus on Information Internetworks and Artificial Intelligence.
            As a second year student, I have delving into the basics of programming and computer science by taking classes in introductory programming and object-oriented programming, 
            and I am continueing to learning more in {" "}
            <span className="font-medium">full-stack development</span> and <span className="font-medium">data structures/algorithms</span>.{" "}{" "}
            Currently I am self-teaching myself more JavaScript and the React framework as well as learning more about the M.E.R.N stack in general.
            I am looking to expand my skill set even further as I love to learn the new technologies. I am currently looking for a{" "}
            <span className="font-medium">entry-level internship position</span> as a software
            developer.
        </p>
        <p>
            <span className="italic">When I'm not coding</span>, I enjoy playing
            video games, watching movies, and playing with my dog. I am also learning to cook more to get a taste of home even when I am far away from it in college.
        </p>
    </motion.section>
  )
}
