
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-apple-gray">
      <div className="container">
        <h2 className="section-title text-center">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-apple-darkgray mb-10">
            I'm currently looking for new opportunities in the field of business analytics and data science.
            Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:mananmanoj.agarwal@utdallas.edu" 
              className="apple-card flex flex-col items-center p-6 hover:scale-105 transition-transform"
            >
              <Mail className="h-8 w-8 text-apple-blue mb-4" />
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p className="text-apple-darkgray text-sm">mananmanoj.agarwal@utdallas.edu</p>
            </a>
            
            <a 
              href="tel:+14698319242" 
              className="apple-card flex flex-col items-center p-6 hover:scale-105 transition-transform"
            >
              <Phone className="h-8 w-8 text-apple-blue mb-4" />
              <h3 className="text-lg font-medium mb-2">Phone</h3>
              <p className="text-apple-darkgray text-sm">469-831-9242</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/agarwalmanan" 
              target="_blank"
              rel="noopener noreferrer"
              className="apple-card flex flex-col items-center p-6 hover:scale-105 transition-transform"
            >
              <Linkedin className="h-8 w-8 text-apple-blue mb-4" />
              <h3 className="text-lg font-medium mb-2">LinkedIn</h3>
              <p className="text-apple-darkgray text-sm">Connect with me</p>
            </a>
          </div>
          
          <div className="flex justify-center">
            <Button className="apple-button text-base px-8 py-6" asChild>
              <a 
                href="mailto:mananmanoj.agarwal@utdallas.edu"
                className="font-medium"
              >
                Send Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
