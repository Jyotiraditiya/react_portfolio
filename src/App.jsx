import React from "react";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
=======
<<<<<<< HEAD
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
>>>>>>> e943e9c (Add animated Skills section with framer-motion and Tailwind gradients)

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
<<<<<<< HEAD
}
=======
}

const projectData = [
  {
    title: "Netflix Clone",
    image: "/netflix-clone.jpg",
    description: "Built with React, Firebase Auth, TMDB API.",
    stack: "React.js, TMDB, Firebase"
  },
  {
    title: "EventAI Planner",
    image: "/event-ai.jpg",
    description: "AI-based event assistant using Next.js & MongoDB.",
    stack: "Next.js, OpenAI, MongoDB"
  },
  {
    title: "Smart Parking System",
    image: "/parking.jpg",
    description: "Real-time slot tracker with maps integration.",
    stack: "React, Node.js, MongoDB"
  }
];
=======
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
>>>>>>> 8262672 (Initial commit with Skills and About sections)
>>>>>>> e943e9c (Add animated Skills section with framer-motion and Tailwind gradients)
