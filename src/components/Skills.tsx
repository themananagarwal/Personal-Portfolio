import React, { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import gsap from 'gsap';

interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillWithLevel {
  name: string;
  level: number;
}

const SkillBar = ({ skill, index }: { skill: SkillWithLevel; index: number }) => {
  const barRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (barRef.current) {
      gsap.fromTo(
        barRef.current,
        { width: 0 },
        { 
          width: `${skill.level}%`,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: barRef.current,
            start: 'top bottom-=100',
          }
        }
      );
    }
  }, [skill.level]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-apple-text">{skill.name}</span>
        <span className="text-xs text-apple-darkgray">{skill.level}%</span>
      </div>
      <div className="w-full bg-apple-dark rounded-full h-2.5">
        <div 
          ref={barRef}
          className="bg-apple-blue h-2.5 rounded-full"
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const SkillSection = ({ category }: { category: SkillCategory }) => {
  const sectionRef = useScrollAnimation();
  
  return (
    <div ref={sectionRef} className="mb-8">
      <h3 className="text-xl font-medium mb-4">{category.title}</h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, index) => (
          <span 
            key={index} 
            className="inline-block bg-apple-dark rounded-full px-4 py-2 text-sm font-medium text-apple-text shadow-sm border border-apple-highlight hover:bg-apple-blue hover:text-white transition-colors duration-300 cursor-default glow-effect"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const titleRef = useScrollAnimation();
  const chartRef = useScrollAnimation({ delay: 0.3 });
  
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: ["C++", "Python", "R", "SQL", "MySQL", "NoSQL", "Postgre SQL"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Excel", "Tableau", "Power BI", "JMPro", "Google Analytics", "Oracle Analytics", "Cognos Analytics", "Streamlit", "GitHub", "Figma", "BigQuery", "Looker", "Alteryx"]
    },
    {
      title: "AWS Services",
      skills: ["AWS EC2", "AWS VPC", "AWS IAM", "AWS S3", "AWS RDS"]
    },
    {
      title: "Libraries",
      skills: ["NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "Plotly"]
    },
    {
      title: "Analytical Skills",
      skills: ["Data Analytics", "Feature Engineering", "Business Process Modelling", "Customer Relationship Management", "ERP"]
    }
  ];

  const coreSkills: SkillWithLevel[] = [
    { name: "Data Analysis", level: 95 },
    { name: "Business Intelligence", level: 90 },
    { name: "Machine Learning", level: 85 },
    { name: "Data Visualization", level: 92 },
    { name: "Statistical Modeling", level: 88 }
  ];

  const certifications = [
    "Google Cloud Data Analytics Professional",
    "Meta Data Analyst Professional"
  ];

  return (
    <section id="skills" className="bg-apple-gray">
      <div className="container">
        <h2 ref={titleRef} className="section-title text-center">Skills & Certifications</h2>
        
        <div className="max-w-4xl mx-auto">
          <div ref={chartRef} className="mb-12 apple-card">
            <h3 className="text-xl font-medium mb-4">Core Competencies</h3>
            {coreSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
          
          {skillCategories.map((category, index) => (
            <SkillSection key={index} category={category} />
          ))}
          
          <div ref={useScrollAnimation({ delay: 0.5 })}>
            <h3 className="text-xl font-medium mb-4">Certifications</h3>
            <div className="flex flex-col space-y-3">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-center apple-card hover:border-apple-blue hover:scale-[1.01] transition-all duration-300"
                >
                  <svg className="h-5 w-5 text-apple-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-apple-text">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
