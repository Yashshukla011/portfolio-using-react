import React from "react";
import "../App.css";

const experiences = [
  {
    role: "Full Stack Project Developer",
    company: "Personal Projects",
    duration: "2024 - Present",
    points: [
      "Built multiple responsive projects using React.js and Tailwind CSS.",
      "Integrated Firebase for real-time database and authentication.",
    ]
  },
  {
    role: "DSA & Problem Solving",
    company: "LeetCode / GeeksforGeeks",
    duration: "Ongoing",
    points: [
      "Solved 100+ problems on LeetCode focusing on Arrays and Strings.",
      "Active participant in weekly coding contests.",
    ],
    leetcodeUrl: "https://leetcode.com/u/yashshukla8796/",
    gfgcodeurl:"https://www.geeksforgeeks.org/profile/yashshuklahie6?tab=activity"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="exp-section">
      <div className="container">
        <h2 className="exp-title">My <span className="text-indigo">Journey</span></h2>

        <div className="exp-grid">
          {experiences.map((item, index) => (
            <div key={index} className="exp-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{item.role}</h3>
                  <p className="exp-company">{item.company}</p>
                </div>
                <span className="exp-tag">{item.duration}</span>
              </div>
              <ul className="exp-list">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {item.leetcodeUrl && (
                <a 
                  href={item.leetcodeUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="leetcode-btn"
                >
                  View LeetCode Profile 🚀
                </a>
              )}<br></br>
              <br></br>
               
              {item.leetcodeUrl && (
                <a 
                  href={item.gfgcodeurl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="leetcode-btn"
                >
                  View Gfg Profile 🚀
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;