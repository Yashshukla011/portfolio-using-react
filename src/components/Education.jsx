import React from 'react'


 const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-20 bg-gradient-to-b from-slate-950 to-slate-950
       text-white"
    >
      <h2 className="text-center text-4xl font-bold mb-16">
        <span className="text-indigo-400">Education</span>
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        
       
        <div className="group relative bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500">
          <div className="absolute -top-4 -right-4 w-14 h-14 bg-indigo-500/20 rounded-full blur-2xl"></div>

          <h3 className="text-2xl font-semibold text-indigo-400">
            Bachelor of Computer Applications
          </h3>
          <p className="text-slate-300 mt-2">
JIMS, Rohini Sector-3  Delhi</p>
          <span className="inline-block mt-3 px-4 py-1 text-sm rounded-full bg-indigo-500/10 text-indigo-300">
            2024 – Present
          </span>

          <p className="mt-5 text-slate-300 leading-relaxed">
            Currently pursuing BCA (2nd Year) with strong focus on Data
            Structures, OOPs, DBMS and Full Stack Web Development.
          </p>
        </div>

        {/* 12th */}
        <div className="group relative bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500">
          <div className="absolute -top-4 -right-4 w-14 h-14 bg-indigo-500/20 rounded-full blur-2xl"></div>

          <h3 className="text-2xl font-semibold text-indigo-400">
            Higher Secondary (12th)
          </h3>
          <p className="text-slate-300 mt-2">Seva Mandir Inter College Kanpur UtterPredesh</p>
          <span className="inline-block mt-3 px-4 py-1 text-sm rounded-full bg-indigo-500/10 text-indigo-300">
            2022 – 2024
          </span>

          <p className="mt-5 text-slate-300 leading-relaxed">
            Completed higher secondary education with Mathematics and Computer
            Science as core subjects.
          </p>
        </div>

      </div>
    </section>
  );
};


export default Education
