import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants'

const abouts = [
  { tittle: 'Desarrollador web', description: 'Soy un buen desarrollador web.', imgUrl: images.about01 },
  { tittle: 'Desarrollador Backend', description: 'Soy un buen desarrollador Backend.', imgUrl: images.about02 },
  { tittle: 'Desarrollador Frontend', description: 'Soy un buen desarrollador Frontend.', imgUrl: images.about03 },
  { tittle: 'Bases de datos', description: 'Manejo bien las bases de datos.', imgUrl: images.about04 },
  { tittle: 'Git y Github', description: 'Manejo muy bien Git y Github para el control de versiones.', imgUrl: images.about01 }
]
import './About.scss';
const About = () => {
  return (
    <>
      <h2 className='head-text'>
        La funcion de un buen
        <span>Software</span>
        <br />
        es hacer que lo complejo aparente ser
        <span>Simple</span>
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
