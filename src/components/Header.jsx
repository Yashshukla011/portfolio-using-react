import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold hover:text-indigo-400 transition-colors">
          yash shukla
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-indigo-400 transition-colors  text-2xl">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-400 text-2xl transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-400 text-2xl transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 text-2xl transition-colors">Contact</a></li>
            
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;