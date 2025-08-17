import React from 'react';
import { RadarChart } from '@mui/x-charts/RadarChart';
import './Skills.css';

const Skills = () => {
  const interestsData = [
    { label: 'System Design', value: 85 },
    { label: 'Cloud Architecture', value: 80 },
    { label: 'DevOps', value: 75 },
    { label: 'Performance Optimization', value: 90 },
    { label: 'Security', value: 82 }
  ];

  const coreData = [
    { label: 'JavaScript/ES6+', value: 95 },
    { label: 'TypeScript', value: 88 },
    { label: 'Node.js', value: 92 },
    { label: 'Python', value: 85 },
    { label: 'Java', value: 80 }
  ];

  const modernWebData = [
    { label: 'React.js', value: 92 },
    { label: 'Next.js', value: 85 },
    { label: 'Express.js', value: 90 },
    { label: 'MongoDB', value: 88 },
    { label: 'PostgreSQL', value: 82 }
  ];

  // Convert data for MUI X Charts format
  const convertToMuiFormat = (data) => {
    return {
      series: [{
        label: 'Skills',
        data: data.map(item => item.value),
        fillArea: true,
        hideMark: false
      }],
      radar: {
        max: 100,
        metrics: data.map(item => item.label)
      }
    };
  };

  const interestsChartData = convertToMuiFormat(interestsData);
  const coreChartData = convertToMuiFormat(coreData);
  const modernWebChartData = convertToMuiFormat(modernWebData);



  const frontendSkills = [
    {
      name: 'React.js',
      icon: 'fab fa-react',
      description: 'Advanced React with hooks, context, and performance optimization'
    },
    {
      name: 'TypeScript',
      icon: 'fab fa-js-square',
      description: 'Type-safe JavaScript development with advanced patterns'
    },
    {
      name: 'Next.js',
      icon: 'fas fa-bolt',
      description: 'Full-stack React framework with SSR and SSG capabilities'
    },
    {
      name: 'Redux/Context',
      icon: 'fas fa-sync-alt',
      description: 'State management and data flow architecture'
    },
    {
      name: 'Tailwind CSS',
      icon: 'fas fa-palette',
      description: 'Utility-first CSS framework for rapid UI development'
    },
    {
      name: 'Jest/Testing',
      icon: 'fas fa-vial',
      description: 'Unit testing, integration testing, and test-driven development'
    }
  ];

  const backendSkills = [
    {
      name: 'Node.js',
      icon: 'fab fa-node-js',
      description: 'Server-side JavaScript with Express.js and middleware'
    },
    {
      name: 'Python',
      icon: 'fab fa-python',
      description: 'Backend development with Django/Flask and data processing'
    },
    {
      name: 'Java',
      icon: 'fab fa-java',
      description: 'Enterprise applications with Spring Boot and microservices'
    },
    {
      name: 'REST APIs',
      icon: 'fas fa-globe',
      description: 'Design and implementation of scalable RESTful services'
    },
    {
      name: 'GraphQL',
      icon: 'fas fa-project-diagram',
      description: 'Modern API development with Apollo Server'
    },
    {
      name: 'Authentication',
      icon: 'fas fa-shield-alt',
      description: 'JWT, OAuth, and secure authentication systems'
    }
  ];

  const toolsSkills = [
    {
      name: 'Docker',
      icon: 'fab fa-docker',
      description: 'Containerization and microservices deployment'
    },
    {
      name: 'AWS/Azure',
      icon: 'fab fa-aws',
      description: 'Cloud infrastructure and serverless architecture'
    },
    {
      name: 'Git/GitHub',
      icon: 'fab fa-github',
      description: 'Version control, CI/CD pipelines, and collaboration'
    },
    {
      name: 'MongoDB',
      icon: 'fas fa-database',
      description: 'NoSQL database design and optimization'
    },
    {
      name: 'PostgreSQL',
      icon: 'fas fa-server',
      description: 'Relational database design and complex queries'
    },
    {
      name: 'Redis',
      icon: 'fas fa-bolt',
      description: 'Caching, session management, and performance optimization'
    }
  ];

  return (
    <div className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-description">
          <p>
            I specialize in modern web development with expertise across various technologies and frameworks. 
            My skills span from core web technologies to cutting-edge modern frameworks, enabling me to 
            create robust, scalable, and user-friendly applications.
          </p>
        </div>

        {/* Radar Charts Section */}
        <div className="radar-charts-section">
          <div className="radar-charts-grid">
            <div className="radar-chart-wrapper">
              <h3 className="radar-chart-title">INTERESTS</h3>
              <RadarChart
                height={300}
                series={interestsChartData.series}
                radar={interestsChartData.radar}
                slotProps={{
                  legend: { hidden: true },
                  tooltip: { trigger: 'axis' }
                }}
                sx={{
                  '& .MuiChartsAxis-line': {
                    stroke: '#D2691E',
                    strokeWidth: 2
                  },
                  '& .MuiChartsAxis-tick': {
                    stroke: '#D2691E'
                  },
                  '& .MuiChartsAxis-label': {
                    fill: '#333',
                    fontSize: '12px'
                  },
                  '& .MuiChartsGrid-line': {
                    stroke: '#e0e0e0',
                    strokeWidth: 1
                  },
                  '& .MuiChartsSeries-root': {
                    fill: '#D2691E',
                    fillOpacity: 0.3,
                    stroke: '#D2691E',
                    strokeWidth: 2
                  }
                }}
              />
            </div>
            <div className="radar-chart-wrapper">
              <h3 className="radar-chart-title">CORE</h3>
              <RadarChart
                height={300}
                series={coreChartData.series}
                radar={coreChartData.radar}
                slotProps={{
                  legend: { hidden: true },
                  tooltip: { trigger: 'axis' }
                }}
                sx={{
                  '& .MuiChartsAxis-line': {
                    stroke: '#228B22',
                    strokeWidth: 2
                  },
                  '& .MuiChartsAxis-tick': {
                    stroke: '#228B22'
                  },
                  '& .MuiChartsAxis-label': {
                    fill: '#333',
                    fontSize: '12px'
                  },
                  '& .MuiChartsGrid-line': {
                    stroke: '#e0e0e0',
                    strokeWidth: 1
                  },
                  '& .MuiChartsSeries-root': {
                    fill: '#228B22',
                    fillOpacity: 0.3,
                    stroke: '#228B22',
                    strokeWidth: 2
                  }
                }}
              />
            </div>
            <div className="radar-chart-wrapper">
              <h3 className="radar-chart-title">MODERN WEB</h3>
              <RadarChart
                height={300}
                series={modernWebChartData.series}
                radar={modernWebChartData.radar}
                slotProps={{
                  legend: { hidden: true },
                  tooltip: { trigger: 'axis' }
                }}
                sx={{
                  '& .MuiChartsAxis-line': {
                    stroke: '#4169E1',
                    strokeWidth: 2
                  },
                  '& .MuiChartsAxis-tick': {
                    stroke: '#4169E1'
                  },
                  '& .MuiChartsAxis-label': {
                    fill: '#333',
                    fontSize: '12px'
                  },
                  '& .MuiChartsGrid-line': {
                    stroke: '#e0e0e0',
                    strokeWidth: 1
                  },
                  '& .MuiChartsSeries-root': {
                    fill: '#4169E1',
                    fillOpacity: 0.3,
                    stroke: '#4169E1',
                    strokeWidth: 2
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Skills Categories with Icons and Descriptions */}
        <div className="main-skills-grid">
          <div className="skill-category">
            <div className="category-header">
              <i className="fas fa-code"></i>
              <h3>Frontend Development</h3>
            </div>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => {
                return (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <i className={skill.icon}></i>
                      </div>
                      <div className="skill-details">
                        <h4 className="skill-name">{skill.name}</h4>
                        <p className="skill-description">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <i className="fas fa-server"></i>
              <h3>Backend Development</h3>
            </div>
            <div className="skills-list">
              {backendSkills.map((skill, index) => {
                return (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <i className={skill.icon}></i>
                      </div>
                      <div className="skill-details">
                        <h4 className="skill-name">{skill.name}</h4>
                        <p className="skill-description">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <i className="fas fa-tools"></i>
              <h3>Tools & Technologies</h3>
            </div>
            <div className="skills-list">
              {toolsSkills.map((skill, index) => {
                return (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <i className={skill.icon}></i>
                      </div>
                      <div className="skill-details">
                        <h4 className="skill-name">{skill.name}</h4>
                        <p className="skill-description">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="additional-skills">
          <h3 className="subsection-title">Additional Skills</h3>
          <div className="additional-skills-grid">
            <div className="additional-skill-category">
              <div className="category-header">
                <i className="fas fa-palette"></i>
                <h4>Design & UI/UX</h4>
              </div>
              <ul className="skill-tags">
                <li className="skill-tag">Figma</li>
                <li className="skill-tag">Adobe XD</li>
                <li className="skill-tag">Sketch</li>
                <li className="skill-tag">Responsive Design</li>
                <li className="skill-tag">Material Design</li>
                <li className="skill-tag">Bootstrap</li>
                <li className="skill-tag">Tailwind CSS</li>
              </ul>
            </div>

            <div className="additional-skill-category">
              <div className="category-header">
                <i className="fas fa-mobile-alt"></i>
                <h4>Mobile & PWA</h4>
              </div>
              <ul className="skill-tags">
                <li className="skill-tag">React Native</li>
                <li className="skill-tag">Progressive Web Apps</li>
                <li className="skill-tag">Mobile-First Design</li>
                <li className="skill-tag">Service Workers</li>
                <li className="skill-tag">App Store Optimization</li>
                <li className="skill-tag">Cross-Platform Development</li>
              </ul>
            </div>

            <div className="additional-skill-category">
              <div className="category-header">
                <i className="fas fa-chart-line"></i>
                <h4>Performance & SEO</h4>
              </div>
              <ul className="skill-tags">
                <li className="skill-tag">Web Performance</li>
                <li className="skill-tag">SEO Optimization</li>
                <li className="skill-tag">Google Analytics</li>
                <li className="skill-tag">Lighthouse</li>
                <li className="skill-tag">Core Web Vitals</li>
                <li className="skill-tag">Digital Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 