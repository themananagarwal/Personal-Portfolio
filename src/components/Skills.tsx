
import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const SkillSection = ({ category }: { category: SkillCategory }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-medium mb-4">{category.title}</h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, index) => (
          <span 
            key={index} 
            className="inline-block bg-white rounded-full px-4 py-2 text-sm font-medium text-apple-text shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
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

  const certifications = [
    "Google Cloud Data Analytics Professional",
    "Meta Data Analyst Professional"
  ];

  return (
    <section id="skills" className="bg-apple-gray">
      <div className="container">
        <h2 className="section-title text-center">Skills & Certifications</h2>
        
        <div className="max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillSection key={index} category={category} />
          ))}
          
          <div>
            <h3 className="text-xl font-medium mb-4">Certifications</h3>
            <div className="flex flex-col space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center apple-card">
                  <svg className="h-5 w-5 text-apple-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{cert}</span>
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
