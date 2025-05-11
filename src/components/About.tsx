
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CuboidIcon, RotateIcon, Scale3dIcon } from 'lucide-react';

const About = () => {
  const titleRef = useScrollAnimation();
  const text1Ref = useScrollAnimation({ delay: 0.1 });
  const text2Ref = useScrollAnimation({ delay: 0.2 });
  const text3Ref = useScrollAnimation({ delay: 0.3 });
  const subtitleRef = useScrollAnimation({ delay: 0.4 });
  const card1Ref = useScrollAnimation({ delay: 0.5 });
  const card2Ref = useScrollAnimation({ delay: 0.6 });
  const card3Ref = useScrollAnimation({ delay: 0.7 });
  
  return (
    <section id="about" className="bg-apple-gray py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 ref={titleRef} className="section-title text-center">About Me</h2>
          
          <div className="space-y-6 text-lg">
            <p ref={text1Ref} className="text-apple-text">
              I'm a Master's student in Business Analytics at the University of Texas at Dallas with a strong foundation in 
              data analysis, machine learning, and business operations. Currently serving as a Graduate Teaching Assistant,
              I help students master essential analytics tools and concepts.
            </p>
            
            <p ref={text2Ref} className="text-apple-text">
              With professional experience spanning business operations analysis, market research, and sales management,
              I bring a diverse skill set to solving complex business challenges through data-driven approaches.
            </p>
            
            <p ref={text3Ref} className="text-apple-text">
              My expertise includes Python, SQL, R, and various analytics tools like Tableau and Power BI. I'm passionate 
              about transforming raw data into actionable insights that drive strategic business decisions.
            </p>
            
            <div className="pt-8">
              <h3 ref={subtitleRef} className="text-xl font-medium mb-4">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div 
                  ref={card1Ref} 
                  className="apple-card hover:scale-105 transition-transform hover:shadow-apple-blue/20 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center mb-3">
                    <CuboidIcon className="h-8 w-8 text-apple-blue" />
                  </div>
                  <h4 className="font-medium text-lg mb-2 text-center">Data Analysis</h4>
                  <p className="text-apple-darkgray">Transform complex datasets into clear, actionable business insights.</p>
                </div>
                <div 
                  ref={card2Ref} 
                  className="apple-card hover:scale-105 transition-transform hover:shadow-apple-blue/20 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center mb-3">
                    <RotateIcon className="h-8 w-8 text-apple-blue" />
                  </div>
                  <h4 className="font-medium text-lg mb-2 text-center">Machine Learning</h4>
                  <p className="text-apple-darkgray">Develop predictive models to solve business problems and identify opportunities.</p>
                </div>
                <div 
                  ref={card3Ref} 
                  className="apple-card hover:scale-105 transition-transform hover:shadow-apple-blue/20 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center mb-3">
                    <Scale3dIcon className="h-8 w-8 text-apple-blue" />
                  </div>
                  <h4 className="font-medium text-lg mb-2 text-center">Business Intelligence</h4>
                  <p className="text-apple-darkgray">Create intuitive dashboards that visualize key metrics and performance indicators.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
