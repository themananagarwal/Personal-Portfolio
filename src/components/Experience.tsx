
import React, { useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ExperienceData {
  role: string; 
  company: string; 
  period: string; 
  achievements: string[];
}

const ExperienceItem = ({ experience, index }: { 
  experience: ExperienceData;
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);
  const itemRef = useScrollAnimation({ delay: index * 0.1 });
  
  return (
    <div 
      ref={itemRef}
      className={`mb-12 apple-card hover:border-apple-blue transition-all duration-300 ${expanded ? 'border-apple-blue' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="mb-3 cursor-pointer flex justify-between items-center">
        <div>
          <h3 className="text-xl font-medium">{experience.role}</h3>
          <div className="flex flex-col md:flex-row md:items-center text-apple-darkgray mb-2">
            <span className="font-medium">{experience.company}</span>
            <span className="hidden md:inline mx-2">•</span>
            <span>{experience.period}</span>
          </div>
        </div>
        <div className="text-apple-blue">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-6 w-6 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <ul className={`space-y-2 text-base text-apple-text overflow-hidden transition-all duration-500 ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="flex">
            <span className="mr-2 text-apple-blue">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const titleRef = useScrollAnimation();
  
  const experiences = [
    {
      role: "Graduate Teaching Assistant",
      company: "The University of Texas at Dallas",
      period: "August 2024 - Present",
      achievements: [
        "Mentored more than 150 students in Information Technology for Business and Business Analytics, covering topics such as Data Wrangling, Clustering, Association Rules, Forecasting, Business Communication, Customer Relationship Management, Enterprise Resource Planning, and Business Process Modelling",
        "Facilitated 4 workshops to enhance practical skills in Tableau, MS Excel, Oracle SQL, MySQL, and JMPro"
      ]
    },
    {
      role: "Business Operations Analyst",
      company: "Singhal Brothers",
      period: "November 2022 - December 2023",
      achievements: [
        "Analyzed the Customer Relationship Management database to identify market trends and produce reports, resulting in a 15% improvement in business campaign optimization by targeting areas such as customer acquisition",
        "Applied Customer Satisfaction Scores to improve services, leading to a 30% improvement in customer satisfaction",
        "Streamlined logistical planning and warehousing operations, improving procurement and delivery efficiency and achieving a 12.5% decrease in storage expenses"
      ]
    },
    {
      role: "Trainee Market Research Analyst",
      company: "Knowledge Sourcing Intelligence",
      period: "February 2023 - April 2023",
      achievements: [
        "Conducted analyses on more than 10 industries and gathered information to derive market insights",
        "Monitored key performance indicators like user engagement and retention rates for more than 50 organizations"
      ]
    },
    {
      role: "Associate Inside Sales Manager",
      company: "Edureka",
      period: "July 2022 - October 2022",
      achievements: [
        "Implemented Salesforce to identify target clients and optimize deals, increasing revenue by 10%"
      ]
    }
  ];

  return (
    <section id="experience" className="bg-apple-black">
      <div className="container">
        <h2 ref={titleRef} className="section-title text-center">Professional Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              experience={exp}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
