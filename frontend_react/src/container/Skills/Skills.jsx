import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss'


const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);


  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        setExperience(data);
      })

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
  }, [])

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion className="app__skills-lists">
          {skills.map((skill) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              {/* <div className=''>

              </div> */}
            </motion.div>
          ))}
        </motion>
      </div>
    </>
  )
}

export default Skills