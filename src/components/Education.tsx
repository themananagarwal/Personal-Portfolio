
import React from 'react';

interface Education {
  institution: string;
  degree: string;
  graduation: string;
  gpa: string;
  details?: string[];
  courses?: string[];
}

const EducationCard = ({ education }: { education: Education }) => {
  return (
    <div className="apple-card mb-8">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div>
          <h3 className="text-xl font-medium">{education.institution}</h3>
          <p className="text-lg">{education.degree}</p>
        </div>
        <div className="text-right mt-2 md:mt-0">
          <p className="text-apple-darkgray">{education.graduation}</p>
          <p className="font-medium">GPA: {education.gpa}</p>
        </div>
      </div>
      
      {education.details && education.details.length > 0 && (
        <div className="mb-4">
          <ul className="space-y-1">
            {education.details.map((detail, index) => (
              <li key={index} className="text-apple-darkgray">{detail}</li>
            ))}
          </ul>
        </div>
      )}
      
      {education.courses && education.courses.length > 0 && (
        <div>
          <h4 className="text-sm font-medium mb-2">Relevant Coursework</h4>
          <p className="text-apple-darkgray">{education.courses.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

const Education = () => {
  const educationHistory: Education[] = [
    {
      institution: "The University of Texas at Dallas",
      degree: "Master of Science, Business Analytics",
      graduation: "December 2025",
      gpa: "4.0",
      details: ["Teaching Assistant Scholarship"],
      courses: ["Advanced Statistics", "Time Series and Econometrics", "Predictive Analytics", "Prescriptive Analytics", "Operations Analytics", "Customer Analytics and Insights"]
    },
    {
      institution: "Vellore Institute of Technology, Vellore",
      degree: "Bachelor of Technology, Mechanical Engineering",
      graduation: "May 2022",
      gpa: "3.1"
    }
  ];

  return (
    <section id="education" className="bg-background">
      <div className="container">
        <h2 className="section-title text-center">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          {educationHistory.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
