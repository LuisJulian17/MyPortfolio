import React from 'react';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a target={'_blank'} rel="noopener noreferrer" href='https://www.linkedin.com/in/julian-pena-rodriguez/'>
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a target={'_blank'} rel="noopener noreferrer" href='https://github.com/LuisJulian17'>
        <BsGithub />
      </a>
    </div>
    <div>
      <a target={'_blank'} rel="noopener noreferrer" href='https://www.instagram.com/julianp_98_/'>
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;