import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}