import React from 'react';
import prahlad from '../../assets/prahlad.jpg';
import withSection from '../withSection';
import './About.css';

const About = ({ isStandalone }) => {
  const educationData = [
    {
      school: "Indian Institute of Technology Delhi",
      degree: "B.Tech in Engineering Physics",
      year: "2019 - 2023",
      icon: "fa-university",
      description: "Specialized in quantum mechanics, solid-state physics, and computational methods."
    },
    {
      school: "Park Mount Public School, Patna",
      degree: "Class 12 Senior Secondary (CBSE)",
      year: "2019",
      icon: "fa-school",
      description: "Focused on Physics, Mathematics, and Computer Science."
    },
    {
      school: "Radiant International School, Patna",
      degree: "Class 10 Secondary (CBSE)",
      year: "2017",
      icon: "fa-graduation-cap",
      description: "Strong foundation in sciences and mathematics."
    }
  ];

  const experienceData = [
    {
        role: "Software Engineer",
        company: "Genista Biosciences",
        location: "California, United States (Remote)",
        period: "May 2025 - Present",
        icon: "fa-laptop-code",
        description: "Working on cutting-edge software development projects and research initiatives."
    },
    {
      role: "Junior Research Engineer",
      company: "Brigosha Technologies Private Limited",
      location: "Bangalore, India",
      period: "September 2023 - May 2025",
      icon: "fa-laptop-code",
      description: "Working on cutting-edge software development projects and research initiatives."
    },
    {
      role: "Front End Developer",
      company: "Mobishaala Edutech Private Limited",
      location: "Bangalore, India",
      period: "June 2022 - July 2022",
      icon: "fa-code",
      description: "Developed responsive web applications using modern frontend technologies."
    }
  ];

  const extracurricularData = [
    {
      role: "Creative Executive",
      organization: "Blood Connect Foundation",
      location: "India",
      period: "October 2021 - December 2022",
      icon: "fa-heart",
      description: "Led creative initiatives and digital campaigns for blood donation awareness. Designed promotional materials, managed social media campaigns, and organized blood donation drives across multiple cities."
    },
    {
      role: "Design Executive",
      organization: "Hindi Samiti, BRCA, IIT Delhi",
      location: "IIT Delhi",
      period: "July 2021 - May 2022",
      icon: "fa-palette",
      description: "Spearheaded design and creative direction for cultural events and literary publications. Created visual identities for major cultural festivals and managed a team of designers."
    }
  ];

  const skills = [
    {
      category: "Frontend Development",
      items: ["React.js", "Next.js", "JavaScript/TypeScript", "HTML/CSS", "Redux"]
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express.js", "Python", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Database & Cloud",
      items: ["MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes"]
    }
  ];

  return (
    <section id="about" className={`about ${isStandalone ? 'standalone' : ''}`}>
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-header">
              <div className="profile-image">
                <img src={prahlad} alt="Prahlad Pallav" />
              </div>
              <div className="profile-intro">
                <h3>Prahlad Pallav</h3>
                <p className="title"><i className="fas fa-laptop-code"></i> Software Engineer</p>
                <p className="location">
                  <i className="fas fa-map-marker-alt"></i> Bangalore, India
                </p>
              </div>
            </div>
            
            <div className="profile-description">
              <p>
              I am a skilled Research Engineer with a degree in Engineering Physics from the renowned Indian Institute of Technology (IIT) Delhi, class of 2023. My areas of expertise lie in software and web development, where I apply my robust technical knowledge to drive innovation and progress. By integrating the principles of physics and engineering, I have proven my ability to devise solutions that maximize the efficacy of existing systems while also developing new technologies. My unique blend of an elite educational background and specialized skill set enables me to make significant, pioneering contributions in my field of research and practice.
              </p>
            </div>

            <div className="quick-info">
              <span>
                <i className="fas fa-code"></i>
                Full Stack Development
              </span>
              <span>
                <i className="fas fa-graduation-cap"></i>
                IIT Delhi Graduate
              </span>
              <span>
                <i className="fas fa-laptop-code"></i>
                Problem Solver
              </span>
            </div>
          </div>

          <div className="journey-section">
            <h3 className="section-subtitle">Professional Journey</h3>
            <div className="journey-grid">
              {/* Experience Section */}
              <div className="experience-section">
                <h4 className="journey-title">
                  <i className="fas fa-briefcase"></i> Experience
                </h4>
                <div className="timeline">
                  {experienceData.map((exp, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-icon">
                        <i className={`fas ${exp.icon}`}></i>
                      </div>
                      <div className="timeline-content">
                        <h4>{exp.role}</h4>
                        <div className="company-info">
                          <div className="company">{exp.company}</div>
                          <div className="location-badge">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <p className="description">{exp.description}</p>
                        <span className="timeline-period">{exp.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="education-section">
                <h4 className="journey-title">
                  <i className="fas fa-graduation-cap"></i> Education
                </h4>
                <div className="timeline">
                  {educationData.map((edu, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-icon">
                        <i className={`fas ${edu.icon}`}></i>
                      </div>
                      <div className="timeline-content">
                        <h4>{edu.school}</h4>
                        <p className="degree">{edu.degree}</p>
                        <p className="description">{edu.description}</p>
                        <span className="timeline-period">{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Extra Curricular Activities Section */}
          <div className="extracurricular-section">
            <h3 className="section-subtitle">Leadership & Extra Curricular Activities</h3>
            <div className="extracurricular-grid">
              {/* Creative Executive */}
              <div className="activity-section">
                <h4 className="journey-title">
                  <i className="fas fa-heart"></i> Creative Leadership
                </h4>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-icon">
                      <i className="fas fa-heart"></i>
                    </div>
                    <div className="timeline-content">
                      <h4>{extracurricularData[0].role}</h4>
                      <div className="company-info">
                        <div className="company">{extracurricularData[0].organization}</div>
                        <div className="location-badge">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>{extracurricularData[0].location}</span>
                        </div>
                      </div>
                      <p className="description">{extracurricularData[0].description}</p>
                      <span className="timeline-period">{extracurricularData[0].period}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Executive */}
              <div className="activity-section">
                <h4 className="journey-title">
                  <i className="fas fa-palette"></i> Design Leadership
                </h4>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-icon">
                      <i className="fas fa-palette"></i>
                    </div>
                    <div className="timeline-content">
                      <h4>{extracurricularData[1].role}</h4>
                      <div className="company-info">
                        <div className="company">{extracurricularData[1].organization}</div>
                        <div className="location-badge">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>{extracurricularData[1].location}</span>
                        </div>
                      </div>
                      <p className="description">{extracurricularData[1].description}</p>
                      <span className="timeline-period">{extracurricularData[1].period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <h3 className="section-subtitle">Technical Expertise</h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-category">
                  <h4>{skillGroup.category}</h4>
                  <div className="skill-items">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withSection(About, 'about'); 