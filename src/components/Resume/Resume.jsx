import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

const Resume = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, staggerChildren: 0.2 }
  };

  const projects = [
    {
      title: "Ed-Tech Platform",
      description: [
        "Developed an immersive edtech platform using the MERN stack, improving accessibility and boosting user engagement.",
        "Built a education platform for leaners using MERN, enabling seamless collaboration and knowledge sharing."
      ],
      links: { code: "#", live: "#" }
    },
    {
      title: "Stock Analysis App",
      description: [
        "Led the development of a sophisticated Streamlit web application for in-depth, real-time analysis of NIFTY 50 stocks, leveraging Python, Pandas, Plotly, and Finance.",
        "Enhanced user engagement through interactive features and customizable visualizations, providing an intuitive and comprehensive analysis experience."
      ],
      links: { code: "#", live: "#" }
    },
    {
      title: "LLM Elevation Platform",
      description: [
        "Built and optimized a LLM evaluation platform with a React.js frontend and a Python backend using FastAPI, enabling seamless model inference and evaluation.",
        "Successfully integrated and evaluated multiple AI models, including Groq, Gemini, and LLaMA 3, while setting up and troubleshooting Ollama for efficient execution and deployment."
      ],
      links: { code: "#" }
    },
    {
      title: "Link Shortner",
      description: [
        "Built a dynamic Link in Bio application using Next.js, showcasing portfolios, projects, and social links.",
        "Implemented responsive UI, SEO optimization, and social media previews using Tailwind CSS & Open Graph."
      ],
      links: { code: "#" }
    }
  ];

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <motion.section
      id="resume"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="resume-section min-h-screen flex items-center justify-center py-10 px-4"
    >
      <div className="resume-container w-full bg-white rounded-xl shadow-2xl p-8 md:p-12">
        {/* Header */}
        <motion.div 
          className="header-section mb-12 text-center"
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            PRAHLAD PALLAV
          </h1>
          <h2 className="text-xl text-gray-700 mb-4">Genista Biosciences, United States | Indian Institute of Technology Delhi</h2>
          <div className="contact-grid">
            <a href="mailto:prahladpallav147@gmail.com" className="contact-item">
              <i className="fas fa-envelope text-blue-600"></i>
              <span>prahladpallav147@gmail.com</span>
            </a>
            <a href="tel:+918826626035" className="contact-item">
              <i className="fas fa-phone text-blue-600"></i>
              <span>+91-8826626035</span>
            </a>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt text-blue-600"></i>
              <span>Bengaluru, India</span>
            </div>
          </div>
          <div className="social-links">
            <Link to="/" className="social-link">
              <i className="fas fa-globe" style={{marginRight: '0.75rem'}}></i>
              <span>Portfolio</span>
            </Link>
            <a 
              href="https://github.com/prahlad-pallav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-github" style={{marginRight: '0.75rem'}}></i>
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/prahladpallav/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin" style={{marginRight: '0.75rem'}}></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div 
          className="section-container"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Experience</h2>
          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Software Engineer</h3>
                <div className="company-info">
                  <span className="text-blue-600 font-semibold">Brigosha Technologies Private Limited</span>
                  <span className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    Bengaluru, India
                  </span>
                </div>
              </div>
              <span className="date-badge">September 2023 - May 2025</span>
            </div>
            <ul className="achievement-list">
              <li>Developed a Streamlit webapp that enables users to upload PDFs and images of handwritten notes for content extraction, achieving approximately 87% accuracy.</li>
              <li>Engineered advanced machine learning algorithms to accurately extract handwritten text from images, optimizing the user experience and increasing data processing efficiency by 40%</li>
              <li>Pioneered a global educator platform using the MERN stack, enabling seamless connections and knowledge sharing, leading to 40% user growth and increased engagement.</li>
              <li>Implemented innovative features in React.js such as personalized learning paths and interactive assessments, resulting in a 50% increase in user satisfaction and a 20% decrease in dropout rates.</li>
              <li>Leveraged HTML, CSS, JavaScript, ReactJS, Tailwind CSS, APIs, JSON, Node.js, Express, MongoDB, AI/ML</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Front End Developer</h3>
                <div className="company-info">
                  <span className="text-blue-600 font-semibold">Mobishaala Edutech Private Limited</span>
                  <span className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    Bengaluru, India
                  </span>
                </div>
              </div>
              <span className="date-badge">June 2022 - July 2022</span>
            </div>
            <ul className="achievement-list">
              <li>Coordinated the development of a fully functional multi-tiered web application with 5 levels and 20 sublevels, significantly elevating user experience and performance metrics by 40% overall</li>
              <li>Consolidated Axios API calls, reducing data retrieval time by 30% and achieving a 50% improvement in application responsiveness through efficient data caching and optimized request handling</li>
              <li>Harnessed HTML, CSS, JavaScript, ReactJS, Bootstrap, APIs, JSON, and NPM packages to develop web apps</li>
            </ul>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          className="section-container"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Education</h2>
          <div className="education-item">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-800">B.Tech. (Engg. Physics) - 7.577 CGPA</h3>
                <p className="text-blue-600 font-semibold">Indian Institute of Technology Delhi</p>
              </div>
              <span className="date-badge">July 2019 - August 2023</span>
            </div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div 
          className="section-container"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Projects</h2>
          <div className="project-grid">
            {currentProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <div className="project-links">
                    {project.links.code && (
                      <a href={project.links.code} className="project-link">[Code]</a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} className="project-link">[Live]</a>
                    )}
                  </div>
                </div>
                <ul className="achievement-list">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination-container">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Relevant Courses Section */}
        <motion.div 
          className="section-container"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Relevant Courses</h2>
          <div className="courses-grid">
            <div className="course-category">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">CS Courses</h3>
              <p>Intro to Operating Systems, Networks, DBMS, Data Structures and Algorithms, Machine Learning, Deep Learning.</p>
            </div>
            <div className="course-category">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Finance Courses</h3>
              <p>Intro to Equity Market, Technical Analysis, Fundamental Analysis, Derivative Market, Financial Modelling and
              Valuation.</p>
            </div>
          </div>
        </motion.div>

        {/* Extra Curricular Activities Section */}
        <motion.div 
          className="section-container"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Extra Curricular Activities</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <h3 className="text-lg font-semibold text-blue-600">Design Executive, Hindi Samiti, BRCA, IIT Delhi</h3>
              <p>Conceptualized and executed innovative designs and creative activities, fostering cultural and literary engagement through impactful events and initiatives.</p>
            </div>
            <div className="activity-card">
              <h3 className="text-lg font-semibold text-blue-600">Executive, Blood Connect Foundation, India</h3>
              <p>Organized and led
impactful awareness campaigns and blood donation drives, creatively engaging communities to promote the mission of saving
lives.</p>
            </div>
          </div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div 
          className="section-container"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Python</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Web Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Redux</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Node</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">APIs</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Artificial Intelligence</h3>
              <div className="skill-tags">
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">Scikit Learn</span>
                <span className="skill-tag">Keras</span>
                <span className="skill-tag">OpenCV</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons at the end */}
        <div className="navigation-container">
          <Link 
            to="/" 
            className="back-button"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Portfolio
          </Link>
          <a 
            href="/src/assets/Prahlad_cv (1).pdf" 
            download 
            className="download-button"
          >
            <i className="fas fa-download mr-2"></i>
            Download PDF
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume; 