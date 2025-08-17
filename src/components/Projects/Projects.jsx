import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import withSection from '../withSection';
import './Projects.css';

const Projects = ({ isStandalone }) => {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Ed-Tech Platform",
      description: "Developed an immersive edtech platform using the MERN stack, improving accessibility and boosting user engagement. Built a education platform for leaners using MERN, enabling seamless collaboration and knowledge sharing.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "MERN Stack"],
      image: "/images/projects/edtech-platform.jpg",
      link: "#",
      github: "#",
      color: "#4F46E5" // Indigo
    },
    {
      id: 2,
      title: "Stock Analysis App",
      description: "Led the development of a sophisticated Streamlit web application for in-depth, real-time analysis of NIFTY 50 stocks, leveraging Python, Pandas, Plotly, and Finance. Enhanced user engagement through interactive features and customizable visualizations, providing an intuitive and comprehensive analysis experience.",
      technologies: ["Python", "Streamlit", "Pandas", "Plotly", "Finance APIs"],
      image: "/images/projects/stock-analysis.jpg",
      link: "#",
      github: "#",
      color: "#059669" // Emerald
    },
    {
      id: 3,
      title: "LLM Elevation Platform",
      description: "Built and optimized a LLM evaluation platform with a React.js frontend and a Python backend using FastAPI, enabling seamless model inference and evaluation. Successfully integrated and evaluated multiple AI models, including Groq, Gemini, and LLaMA 3, while setting up and troubleshooting Ollama for efficient execution and deployment.",
      technologies: ["React.js", "Python", "FastAPI", "LLM", "Groq", "Gemini", "LLaMA 3", "Ollama"],
      image: "/images/projects/llm-platform.jpg",
      link: "#",
      github: "#",
      color: "#DC2626" // Red
    },
    {
      id: 4,
      title: "Link Shortener",
      description: "Built a dynamic Link in Bio application using Next.js, showcasing portfolios, projects, and social links. Implemented responsive UI, SEO optimization, and social media previews using Tailwind CSS & Open Graph.",
      technologies: ["Next.js", "Tailwind CSS", "SEO", "Open Graph"],
      image: "/images/projects/link-shortener.jpg",
      link: "#",
      github: "#",
      color: "#2563EB" // Blue
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className={`projects-section ${isStandalone ? 'standalone' : ''}`}>
      <motion.div
        className="projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              className="project-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              onClick={() => setSelectedId(project.id)}
              style={{
                backgroundColor: `${project.color}15`,
                borderColor: `${project.color}30`
              }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay" style={{ backgroundColor: `${project.color}80` }}>
                  <span>View Details</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title" style={{ color: project.color }}>{project.title}</h3>
                <p className="project-description">{project.description.split('.')[0]}.</p>
                <div className="project-tech-stack">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index} 
                      className="tech-badge"
                      style={{
                        backgroundColor: `${project.color}20`,
                        color: project.color
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge more-tech">+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div 
                className="project-modal-overlay"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setSelectedId(null)}
              />
              <motion.div 
                className="project-modal"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedId);
                  return (
                    <>
                      <button 
                        className="modal-close-button"
                        onClick={() => setSelectedId(null)}
                      >
                        ×
                      </button>
                      <div className="modal-content">
                        <h3 style={{ color: project.color }}>{project.title}</h3>
                        <img src={project.image} alt={project.title} className="modal-image" />
                        <p>{project.description}</p>
                        <div className="modal-tech-stack">
                          {project.technologies.map((tech, index) => (
                            <span 
                              key={index}
                              className="tech-badge"
                              style={{
                                backgroundColor: `${project.color}20`,
                                color: project.color
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="modal-links">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="modal-link"
                            style={{ backgroundColor: project.color }}
                          >
                            <i className="fab fa-github"></i> View Code
                          </a>
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="modal-link"
                            style={{ backgroundColor: project.color }}
                          >
                            <i className="fas fa-external-link-alt"></i> Live Demo
                          </a>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default withSection(Projects, 'projects'); 