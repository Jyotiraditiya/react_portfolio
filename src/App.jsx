import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="pt-20 px-4 max-w-5xl mx-auto space-y-24">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}