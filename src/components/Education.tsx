
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from "@/components/ui/card";

interface Education {
  institution: string;
  degree: string;
  graduation: string;
  gpa: string;
  details?: string[];
  courses?: string[];
  logoUrl: string;
}

const EducationCard = ({ education }: { education: Education }) => {
  return (
    <Card className="mb-8 relative overflow-hidden border border-apple-highlight bg-apple-dark p-8">
      <div 
        className="absolute top-0 right-0 opacity-[0.15] z-0" 
        style={{
          backgroundImage: `url(${education.logoUrl})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right top',
          backgroundRepeat: 'no-repeat',
          filter: 'grayscale(1) brightness(1.8)',
          width: '65%',
          height: '110%'
        }}
      />
      
      <div className="relative z-10">
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
    </Card>
  );
};

const Education = () => {
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ delay: 0.2 });
  
  const educationHistory: Education[] = [
    {
      institution: "The University of Texas at Dallas",
      degree: "Master of Science, Business Analytics",
      graduation: "December 2025",
      gpa: "4.0",
      details: ["Teaching Assistant Scholarship"],
      courses: ["Advanced Statistics", "Time Series and Econometrics", "Predictive Analytics", "Prescriptive Analytics", "Operations Analytics", "Customer Analytics and Insights"],
      logoUrl: "/lovable-uploads/d22eb8cd-a6e5-43a8-ab9c-ceafc685f7d7.png"
    },
    {
      institution: "Vellore Institute of Technology, Vellore",
      degree: "Bachelor of Technology, Mechanical Engineering",
      graduation: "May 2022",
      gpa: "3.1",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/1200px-Vellore_Institute_of_Technology_seal_2017.svg.png"
    }
  ];

  return (
    <section id="education" className="bg-apple-black">
      <div className="container">
        <h2 ref={titleRef} className="section-title text-center">Education</h2>
        
        <div ref={contentRef} className="max-w-3xl mx-auto space-y-6">
          {educationHistory.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
