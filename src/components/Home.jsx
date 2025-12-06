import React from 'react';
import myPic from "../assets/img.jpg";

const Home = () => {
  return (
    <section id="home" className="bg-gray text-white min-h-screen flex flex-col justify-center items-center text-center py-24 bg-gray-800 text-black min-h-screen w-full flex flex-col justify-center items-center text-center py-24">
      <div className="max-w-4xl px-4">
<img
  className="w-50 h-50 rounded-full object-cover mx-auto -mt-15"
  src={myPic}
  alt=""
/>


        <h1 className="text-5xl md:text-7xl font-extrabold mb-4" >
          👋 Hi, I'm <span className="text-indigo-400">yash shukla</span>
        </h1>
        <p className="text-xl md:text-xl font-light mb-8">
     Future Software Engineer and present Full Stack Developer . As a 2nd Year BCA student, I'm actively working on projects to bridge the gap between academic theory and industry-level web development.
        </p>
        <a 
          href="#projects" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-xl"
        >
          View My Work
        </a>
      </div>
    </section>
   
  );
};

export default Home;