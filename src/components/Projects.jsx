import React from 'react';

const projectData = [
  { id: 1, title: 'E-commerce Platform', description: 'Built a full-stack e-commerce website with authentication & payment gateway', tech: ['html', 'css', 'js'], link: 'https://e-commerse-first.vercel.app/' },
  { id: 2, title: 'Quize Battle game', description: 'Building a Quiz Battle Game in React (work in progress) with timer, scoring & dynamic questions.', tech: ['React', 'tailwindcss'], link: 'https://quizegame-cyan.vercel.app/ ' },
  { id: 3, title: 'Weather app', description: 'Built a weather forecast app using API with real-time data & responsive design.', tech: ['react', 'Tailwind CSS', 'context'], link: 'https://weather-app-using-react-alpha-one.vercel.app/' },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gradient-to-b from-slate-950 to-slate-950
       text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          🚀 Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-amber-50">
          {projectData.map(project => (
            <div 
              key={project.id} 
              
              className="text-amber-50 group relative bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-indigo-400">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-amber-50">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="text-xs font-medium bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;