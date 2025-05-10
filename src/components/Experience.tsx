
import React from 'react';

const ExperienceItem = ({ role, company, period, achievements }: { 
  role: string; 
  company: string; 
  period: string; 
  achievements: string[] 
}) => {
  return (
    <div className="mb-12">
      <div className="mb-3">
        <h3 className="text-xl font-medium">{role}</h3>
        <div className="flex flex-col md:flex-row md:items-center text-apple-darkgray mb-2">
          <span className="font-medium">{company}</span>
          <span className="hidden md:inline mx-2">•</span>
          <span>{period}</span>
        </div>
      </div>
      <ul className="space-y-2 text-base text-apple-text">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex">
            <span className="mr-2">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
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
        <h2 className="section-title text-center">Professional Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              role={exp.role}
              company={exp.company}
              period={exp.period}
              achievements={exp.achievements}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
