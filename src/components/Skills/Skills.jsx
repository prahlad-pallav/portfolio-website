import React from 'react';
import { motion } from 'framer-motion';
import withSection from '../withSection';
import './Skills.css';

const Skills = ({ isStandalone }) => {
  const skillCategories = [
    {
      category: "Software Development",
      icon: "fas fa-code",
      skills: [
        { name: "Java & C++", level: 90 },
        { name: "Python", level: 90 },
        { name: "Git & Version Control", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "Data Structures", level: 90 }
      ]
    },
    {
      category: "Web Development",
      icon: "fas fa-globe",
      skills: [
        { name: "React.js & Node.js", level: 90 },
        { name: "HTML5, CSS3 & JavaScript", level: 95 },
        { name: "Express.js & MongoDB", level: 85 },
        { name: "Bootstrap & Tailwind", level: 90 },
        { name: "Redux & State Management", level: 85 }
      ]
    },
    {
      category: "Machine Learning",
      icon: "fas fa-brain",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 85 },
        { name: "Deep Learning", level: 80 },
        { name: "Data Analysis", level: 85 }
      ]
    }
  ];

  const additionalSkills = [
    {
      title: "Development Tools",
      icon: "fas fa-tools",
      items: [
        "Git & GitHub",
        "VS Code",
        "Postman",
        "NPM",
        "MongoDB Compass"
      ]
    },
    {
      title: "Design Tools",
      icon: "fas fa-palette",
      items: [
        "Figma",
        "Adobe Creative Cloud",
        "UI/UX Design",
        "Responsive Design",
        "Wireframing"
      ]
    },
    {
      title: "Additional Expertise",
      icon: "fas fa-plus-circle",
      items: [
        "API Development",
        "Database Design",
        "System Architecture",
        "Performance Optimization",
        "Technical Documentation"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className={`skills ${isStandalone ? 'standalone' : ''}`}>
      <motion.div 
        className="skills-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Technical Expertise
        </motion.h2>

        <motion.div className="skills-description" variants={itemVariants}>
          <p>
            As a Research Engineer specializing in software and web development, I command a robust technical repertoire. 
            For software development, my proficiency lies in Java, C++, and Python, combined with version control using Git 
            and data management using MySQL. In the realm of web development, I'm adept at HTML, CSS, and JavaScript, and 
            leverage frameworks and libraries like Bootstrap, Tailwind CSS, Express, ReactJS, and NodeJS.
          </p>
          <p>
            In addition to my proficiency in software and web development, I have a solid foundation in machine learning 
            and data science. I leverage TensorFlow, scikit-learn, and PyTorch for building and training machine learning 
            models. These frameworks enable me to implement a wide range of algorithms and models for tasks such as 
            classification, regression, clustering, and deep learning.
          </p>
        </motion.div>

        <div className="main-skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category"
              variants={itemVariants}
            >
              <div className="category-header">
                <i className={category.icon}></i>
                <h3>{category.category}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="additional-skills"
          variants={containerVariants}
        >
          <h3 className="subsection-title">Additional Expertise</h3>
          <div className="additional-skills-grid">
            {additionalSkills.map((skillSet, index) => (
              <motion.div 
                key={index} 
                className="additional-skill-category"
                variants={itemVariants}
              >
                <div className="category-header">
                  <i className={skillSet.icon}></i>
                  <h4>{skillSet.title}</h4>
                </div>
                <ul className="skill-tags">
                  {skillSet.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="skill-tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default withSection(Skills, 'skills'); 