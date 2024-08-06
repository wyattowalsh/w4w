import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider, Button } from 'shadcn-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faMedium, faKaggle, faSpotify, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons';

const links = [
  {
    name: 'GitHub',
    url: 'https://www.github.com/wyattowalsh',
    icon: faGithub,
    color: '#181717',
    bgcolor: '#ffffff',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/wyattowalsh',
    icon: faLinkedin,
    color: '#0A66C2',
    bgcolor: '#c2500a',
  },
  {
    name: 'X',
    url: 'https://www.x.com/wyattowalsh',
    icon: faXTwitter,
    color: '#000000',
    bgcolor: '#ffffff',
  },
  {
    name: 'Medium',
    url: 'https://www.medium.com/@wyattowalsh',
    icon: faMedium,
    color: '#000000',
    bgcolor: '#ffffff',
  },
  {
    name: 'Kaggle',
    url: 'https://www.kaggle.com/wyattowalsh',
    icon: faKaggle,
    color: '#20BEFF',
    bgcolor: '#ff6720',
  },
  {
    name: 'Spotify',
    url: 'https://www.spotify.com/wyattowalsh',
    icon: faSpotify,
    color: '#1DB954',
    bgcolor: '#b92a1d',
  },
  {
    name: 'CodePen',
    url: 'https://codepen.io/wyattowalsh',
    icon: faCodepen,
    color: '#000000',
    bgcolor: '#ffffff',
  },
  {
    name: 'Email',
    url: 'mailto:wyattowalsh@gmail.com',
    icon: faEnvelopeSolid,
    color: '#b5a76a',
    bgcolor: '#996ab5',
  },
];

const LinkTree = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Wyatt Owalsh's LinkTree</h1>
      <div className="w-full max-w-md">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 mb-4 rounded-lg shadow-lg"
            style={{ backgroundColor: link.bgcolor, color: link.color }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={link.icon} className="mr-4" />
            <span className="text-lg font-medium">{link.name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default LinkTree;
