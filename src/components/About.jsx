import React from 'react';

const skills = [
  { name: 'React.js', icon: '⚛️' },
 
  { name: 'Data Structures & Algo', icon: '🧠' }, 
 
  { name: 'JavaScript (ES6+)', icon: '📜' },
  { name: 'Tailwind CSS/Sass', icon: '🎨' },

];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          🧠 About Me
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          
          <div className="md:w-1/2 text-2xl text-black">
            
            I am a dedicated 2nd-year BCA student and an aspiring Full Stack Developer with strong problem-solving skills. I’ve built multiple projects using React and have a solid foundation in Data Structures & Algorithms, enabling me to write efficient, high-quality code. I am currently seeking an internship opportunity where I can apply my DSA skills and grow as a software developer.
        
            <a 
              href="/path/to/your/resume.pdf" 
              download 
              className="mt-6 inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>

          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Skills & Core Strengths</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map(skill => (
                <div 
                  key={skill.name} 
                  className="p-4 bg-indigo-50 rounded-lg shadow-md flex items-center space-x-3"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="font-medium text-gray-800">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;