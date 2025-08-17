import React from 'react';
import { motion } from 'framer-motion';
import prahlad_photo from '../../assets/prahlad_photo.3e04c38773bbc67d6d6e.jpg';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="overlay"></div>
        <div className="animated-bg"></div>
      </div>
      <motion.div 
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="hero-grid">
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 variants={itemVariants}>
              Hi, I'm <span className="highlight">Prahlad Pallav</span>
            </motion.h1>
            <motion.h2 variants={itemVariants}>
              Software Engineer
            </motion.h2>
            <motion.p variants={itemVariants}>
              IIT Delhi graduate specializing in Engineering Physics, 
              crafting innovative solutions through software development.
            </motion.p>

            <motion.div className="hero-cta" variants={itemVariants}>
              <motion.div 
                className="cta-buttons"
                variants={itemVariants}
              >
                <motion.a 
                  href="#projects" 
                  className="btn primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="btn secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>

              <motion.div 
                className="social-links"
                variants={itemVariants}
              >
                <motion.a 
                  href="https://github.com/prahlad-pallav" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="social-icon"
                >
                  <i className="fab fa-github"></i>
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/prahladpallav/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="social-icon"
                >
                  <i className="fab fa-linkedin"></i>
                </motion.a>
                <motion.a 
                  href="mailto:prahladpallav147@gamil.com"
                  whileHover={{ y: -5 }}
                  className="social-icon"
                >
                  <i className="fas fa-envelope"></i>
                </motion.a>
                <motion.a
                  href="https://medium.com/@prahladpallav" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="social-icon"
                >
                  <i className="fab fa-medium"></i>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            variants={imageVariants}
          >
            <div className="image-wrapper">
              <div className="image-background"></div>
              <motion.img 
                src={prahlad_photo}
                alt="Prahlad Pallav"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="image-shape"></div>
              <div className="floating-dots">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="dot"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <i className="fas fa-chevron-down"></i>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;