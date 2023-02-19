import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants'

const abouts = [
  { title: 'Desarrollador web', description: 'Soy buen desarrollador web.', imgUrl: images.desarrollo },
  { title: 'Desarrollador Backend', description: 'Soy buen desarrollador Backend.', imgUrl: images.desarrolloback },
  { title: 'Desarrollador Frontend', description: 'Soy buen desarrollador Frontend.', imgUrl: images.desarrollofront },
  { title: 'Bases de datos', description: 'Buen manejo de bases de datos.', imgUrl: images.basesdedatos },
  { title: 'Git y Github', description: 'Buen manejo de Git y Github.', imgUrl: images.gitygithub }
]
import './About.scss';
const About = () => {
  return (
    <>
      <h2 className='head-text'>
        La funcion de un buen
        <span> Software</span>
        <br />
        es hacer que lo complejo aparente ser
        <span> Simple</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.tittle} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
