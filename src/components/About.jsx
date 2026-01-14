import React from "react";

import myResume from "../assets/reume.pdf";
const skills = [
  { name: "React.js", icon: "⚛️" },
  { name: "JavaScript (ES6+)", icon: "📜" },
  { name: "Data Structures & Algorithms", icon: "🧠" },
  { name: "Tailwind CSS / Sass", icon: "🎨" },
  { name: "Git & GitHub", icon: "🔧" },
  { name: "Problem Solving", icon: "💡" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white"
    >
      {/* Title */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
        About <span className="text-indigo-400">Me</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left Content */}
        <div className="text-slate-300 text-lg leading-relaxed">
          <p>
            I am a dedicated <span className="text-indigo-400 font-semibold">2nd-year BCA student</span>{" "}
            and an aspiring <span className="text-indigo-400 font-semibold">
              Full Stack Developer
            </span>{" "}
            with a strong passion for problem-solving and building scalable web
            applications.
          </p>

          <p className="mt-6">
            I have built multiple projects using{" "}
            <span className="text-indigo-400">React</span> and modern web
            technologies. My solid foundation in{" "}
            <span className="text-indigo-400">Data Structures & Algorithms</span>{" "}
            allows me to write efficient, clean, and optimized code.
          </p>

          <p className="mt-6">
            Currently, I am seeking an{" "}
            <span className="text-indigo-400 font-semibold">internship opportunity</span>{" "}
            where I can apply my technical skills, gain industry exposure, and
            grow as a software developer.
          </p>

      <a
       href={myResume} 
        download="Yash_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 px-8 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 font-semibold shadow-lg shadow-indigo-500/30"
      >
        Download Resume
      </a>
        </div>

        {/* Right Skills */}
        <div className="grid grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-slate-200 font-medium group-hover:text-indigo-400 transition">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;