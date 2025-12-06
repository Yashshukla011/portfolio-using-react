import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
function App() {
  return (
    <div className="bg-white min-h-screen font-sans bg-gray-800 min-h-screen font-sans">
      <Header />
      <main>
        <Home />
     
        <About /> 
        <Projects />
        <Contact />
      </main>
      <Footer /> 
    </div>
  );
}

export default App;