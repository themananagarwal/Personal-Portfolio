
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Education {
  institution: string;
  degree: string;
  graduation: string;
  gpa: string;
  details?: string[];
  courses?: string[];
  logoUrl: string; // Added for university logos
}

const EducationCard = ({ education }: { education: Education }) => {
  return (
    <div className="mb-8 relative">
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
  const titleRef = useScrollAnimation();
  const tabsRef = useScrollAnimation({ delay: 0.2 });
  
  const educationHistory: Education[] = [
    {
      institution: "The University of Texas at Dallas",
      degree: "Master of Science, Business Analytics",
      graduation: "December 2025",
      gpa: "4.0",
      details: ["Teaching Assistant Scholarship"],
      courses: ["Advanced Statistics", "Time Series and Econometrics", "Predictive Analytics", "Prescriptive Analytics", "Operations Analytics", "Customer Analytics and Insights"],
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/University_of_Texas_at_Dallas_logo.svg/1200px-University_of_Texas_at_Dallas_logo.svg.png"
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
        
        <div ref={tabsRef} className="max-w-3xl mx-auto">
          <Tabs defaultValue="utd" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="utd" className="data-[state=active]:text-apple-blue">UT Dallas</TabsTrigger>
              <TabsTrigger value="vit" className="data-[state=active]:text-apple-blue">VIT Vellore</TabsTrigger>
            </TabsList>
            
            {educationHistory.map((edu, index) => (
              <TabsContent 
                key={index} 
                value={index === 0 ? "utd" : "vit"}
                className="relative overflow-hidden apple-card border border-apple-highlight p-8"
              >
                <div 
                  className="absolute inset-0 opacity-[0.08] z-0" 
                  style={{
                    backgroundImage: `url(${edu.logoUrl})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'grayscale(0.5)',
                    animation: 'pulse 8s infinite ease-in-out'
                  }}
                />
                <div className="relative z-10">
                  <EducationCard education={edu} />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Education;
