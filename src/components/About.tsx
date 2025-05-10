
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center">About Me</h2>
          
          <div className="space-y-6 text-lg">
            <p>
              I'm a Master's student in Business Analytics at the University of Texas at Dallas with a strong foundation in 
              data analysis, machine learning, and business operations. Currently serving as a Graduate Teaching Assistant,
              I help students master essential analytics tools and concepts.
            </p>
            
            <p>
              With professional experience spanning business operations analysis, market research, and sales management,
              I bring a diverse skill set to solving complex business challenges through data-driven approaches.
            </p>
            
            <p>
              My expertise includes Python, SQL, R, and various analytics tools like Tableau and Power BI. I'm passionate 
              about transforming raw data into actionable insights that drive strategic business decisions.
            </p>
            
            <div className="pt-8">
              <h3 className="text-xl font-medium mb-4">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="apple-card">
                  <h4 className="font-medium text-lg mb-2">Data Analysis</h4>
                  <p className="text-apple-darkgray">Transform complex datasets into clear, actionable business insights.</p>
                </div>
                <div className="apple-card">
                  <h4 className="font-medium text-lg mb-2">Machine Learning</h4>
                  <p className="text-apple-darkgray">Develop predictive models to solve business problems and identify opportunities.</p>
                </div>
                <div className="apple-card">
                  <h4 className="font-medium text-lg mb-2">Business Intelligence</h4>
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
