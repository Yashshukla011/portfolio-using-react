import React from 'react';
import Contact from "./Contact"
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // 
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/feed/' },
    { name: 'Email', icon: FaEnvelope, url: 'yashshuklashuklas6@gmail.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-indigo-700">
      <div className="container mx-auto px-6 text-center">
        
      
        
        

        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label={link.name}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>


        <p className="text-sm text-gray-500">
          &copy; {currentYear} yash shukla. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;