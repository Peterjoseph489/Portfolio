import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion/dist/es/index';

import { images } from '../../constants';

import './About.scss';

const abouts = [
  { title: 'Web Development', description: 'I specialize in creating dynamic and user-friendly websites with the latest web technologies that meet your business needs.', imgUrl: images.about01 },
  { title: 'Frontend Development', description: 'I excel in crafting engaging user interfaces with modern technologies and responsive designs.', imgUrl: images.about02 },
  { title: 'Backend Development', description: 'I have a strong expertise in building robust server-side applications to support your web projects.', imgUrl: images.about03 },
  { title: 'MERN Stack', description: 'I am proficient in the MERN stack, a powerful combination for full-stack web development.', imgUrl: images.about04 }
];

const About = () => {
  return (
    <>
      <h2 className='head-text'>I know that <span>Good Apps</span> <br /> means <span>Good Business</span></h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About