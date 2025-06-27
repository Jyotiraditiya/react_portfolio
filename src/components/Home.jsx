import React from "react";

export default function Home() {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="p-8 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-2">HI,IT'S JYOTIRADITIYA MISRA </h1>
      <h2 className="text-4xl font-bold mb-2">Welcome to My Portfolio</h2>
      <p className="text-lg mb-6">Showcasing my projects and skills.</p>
      <button
        onClick={scrollToProjects}
        className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        View Projects
      </button>
    </section>
  );
}