
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  skills: string[];
  highlight?: string;
  id: string; // Add ID for routing
}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const projectRef = useScrollAnimation({ delay: index * 0.2 });
  
  return (
    <Link 
      to={`/project/${project.id}`} 
      className="block h-full"
    >
      <div 
        ref={projectRef}
        className={`apple-card h-full flex flex-col transform transition-all duration-500 ${
          isHovered ? 'scale-105 shadow-lg shadow-apple-blue/20' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="text-xl font-medium mb-3">{project.title}</h3>
        <p className="text-apple-darkgray mb-4 flex-grow">{project.description}</p>
        {project.highlight && (
          <p className={`text-sm font-medium mb-4 transition-colors duration-300 ${
            isHovered ? 'text-white' : 'text-apple-blue'
          }`}>
            {project.highlight}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, i) => (
            <span 
              key={i} 
              className={`inline-block bg-apple-black rounded-full px-3 py-1 text-xs font-medium transition-colors duration-300 ${
                isHovered ? 'bg-apple-blue text-white' : 'text-apple-darkgray border border-apple-highlight'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  const titleRef = useScrollAnimation();
  
  useEffect(() => {
    // Check if we need to scroll to projects section
    if (window.location.hash === '#projects') {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        setTimeout(() => {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);
  
  const projects: Project[] = [
    {
      id: "data-analytics-hackathon",
      title: "Data Analytics Hackathon, Conagra Brands",
      description: "Presented data-driven business proposal to Conagra, utilizing multinomial regression and regression analysis to pinpoint key demographics.",
      highlight: "Achieved a projected 15% increase in brand engagement across target markets",
      skills: ["Data Analytics", "Regression Analysis", "Market Segmentation", "Business Strategy"]
    },
    {
      id: "order-scheduling-system",
      title: "Order Scheduling Management System",
      description: "Developed an automated system that uses an Economic Order Quantity model, historical inventory data, and historical sales data to generate purchase orders.",
      highlight: "Resulted in a 2.34% Back-Order ratio in live business settings",
      skills: ["Operations Analytics", "Inventory Management", "Automation", "Economic Order Quantity"]
    },
    {
      id: "stock-price-prediction",
      title: "Stock Price Prediction Project",
      description: "Developed a machine learning model to predict NVIDIA stock prices using historical data, Moving Averages, Bollinger Bands, Unemployment Rate, and Federal Funds Rate.",
      highlight: "Resulting in a 75% accuracy in predictions",
      skills: ["Machine Learning", "Time Series Analysis", "Financial Analytics", "Python"]
    }
  ];

  return (
    <section id="projects" className="bg-apple-gray">
      <div className="container">
        <h2 ref={titleRef} className="section-title text-center">Project Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
