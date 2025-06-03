
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBackground from '../components/HeroBackground';

interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  highlight?: string;
  detailedDescription?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: "data-analytics-hackathon",
    title: "Data Analytics Hackathon, Conagra Brands",
    description: "Presented data-driven business proposal to Conagra, utilizing multinomial regression and regression analysis to pinpoint key demographics.",
    highlight: "Achieved a projected 15% increase in brand engagement across target markets",
    skills: ["Data Analytics", "Regression Analysis", "Market Segmentation", "Business Strategy"],
    detailedDescription: "Led a team of four data scientists in a competitive hackathon sponsored by Conagra Brands. Our objective was to analyze large consumer datasets to identify untapped market segments for their frozen food products division.",
    challenge: "The challenge involved processing over 10GB of consumer data, including purchase histories, demographic information, and social media sentiment analysis. We needed to identify meaningful patterns that could translate to actionable marketing strategies.",
    solution: "We implemented a comprehensive data analysis approach using multinomial regression models to segment the market based on multiple variables. We utilized Python with pandas and scikit-learn for data processing and predictive modeling. Our approach involved feature engineering to identify key demographic indicators correlated with product preferences.",
    results: "Our analysis identified three key underserved market segments with high potential value. We projected a potential 15% increase in brand engagement across these segments if targeted with our proposed marketing strategy. The presentation received recognition for its depth of analysis and practical application of advanced statistical methods."
  },
  {
    id: "order-scheduling-system",
    title: "Order Scheduling Management System",
    description: "Developed an automated system that uses an Economic Order Quantity model, historical inventory data, and historical sales data to generate purchase orders.",
    highlight: "Resulted in a 2.34% Back-Order ratio in live business settings",
    skills: ["Operations Analytics", "Inventory Management", "Automation", "Economic Order Quantity"],
    detailedDescription: "Designed and implemented an automated order scheduling management system for a medium-sized retail business with multiple locations and over 5,000 SKUs.",
    challenge: "The client was struggling with inventory management issues including overstocking of slow-moving items and frequent stockouts of high-demand products. This resulted in capital being tied up in excess inventory while simultaneously missing sales opportunities.",
    solution: "Developed a sophisticated system implementing Economic Order Quantity (EOQ) models customized to each product category. The system integrated historical sales data, supplier lead times, and seasonal demand fluctuations to optimize order timing and quantities. We built a dashboard that provided real-time inventory insights and automated purchase order generation.",
    results: "Implementation resulted in a remarkably low 2.34% back-order ratio, reduced overall inventory costs by 21%, and increased inventory turnover by 18%. The system's ability to anticipate seasonal demand changes led to significant improvements in cash flow and customer satisfaction metrics."
  },
  {
    id: "stock-price-prediction",
    title: "Stock Price Prediction Project",
    description: "Developed a machine learning model to predict NVIDIA stock prices using historical data, Moving Averages, Bollinger Bands, Unemployment Rate, and Federal Funds Rate.",
    highlight: "Resulting in a 75% accuracy in predictions",
    skills: ["Machine Learning", "Time Series Analysis", "Financial Analytics", "Python"],
    detailedDescription: "Developed a sophisticated machine learning model aimed at predicting NVIDIA stock price movements by analyzing various technical indicators and macroeconomic factors.",
    challenge: "Stock price prediction requires processing multiple dimensions of data with different time scales and volatility patterns. The challenge was to create a model that could effectively synthesize technical stock indicators with broader economic metrics to generate actionable trading signals.",
    solution: "Implemented an ensemble machine learning approach combining Long Short-Term Memory (LSTM) neural networks with Random Forest classifiers. The model integrated moving averages, Bollinger bands, RSI indicators, and volume analysis along with macroeconomic factors such as unemployment rates and Federal Reserve interest rate decisions. We used Python with TensorFlow, pandas, and scikit-learn to process and analyze 5 years of historical data.",
    results: "The final model achieved 75% accuracy in predicting directional stock price movements over 1-week forecasting periods. When backtested over a 12-month period, the algorithm would have generated a theoretical return of 22.3% compared to the market's 8.7% during the same period. The model particularly excelled at identifying potential price reversals following earnings announcements."
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === projectId);
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-apple-black text-apple-text">
        <Navbar />
        <main className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Button asChild variant="default">
            <Link to="/#projects">Back to Projects</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-apple-black text-apple-text">
      <Navbar />
      <div className="relative">
        <HeroBackground />
        <div className="container py-20 relative z-10">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/#projects" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Projects
              </Link>
            </Button>
            
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="inline-block bg-apple-blue bg-opacity-20 text-apple-blue rounded-full px-3 py-1 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {project.highlight && (
              <div className="bg-apple-blue bg-opacity-10 border-l-4 border-apple-blue p-4 mb-8 rounded-r">
                <p className="text-lg font-medium text-apple-blue">{project.highlight}</p>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-apple-dark border-apple-highlight mb-8">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-6">{project.detailedDescription}</p>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card className="bg-apple-dark border-apple-highlight">
                  <CardHeader>
                    <CardTitle>Challenge</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{project.challenge}</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-apple-dark border-apple-highlight">
                  <CardHeader>
                    <CardTitle>Solution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{project.solution}</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="bg-apple-dark border-apple-highlight">
                <CardHeader>
                  <CardTitle>Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.results}</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="bg-apple-dark border-apple-highlight sticky top-24">
                <CardHeader>
                  <CardTitle>Project Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.description}</p>
                  <h4 className="text-lg font-medium mb-2">Technologies & Skills</h4>
                  <ul className="list-disc pl-5 mb-6">
                    {project.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to="/#contact">Contact About This Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
