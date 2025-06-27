import React from "react";

const projects = [
  {
    name: "SPMOS - Smart Parking Management",
    description: "Role-based access control, slot optimization using Dijkstra’s algorithm.",
    link: "#"
  },
  {
    name: "EventPlanner AI",
    description: "Built with Next.js, Tailwind & MongoDB. AI suggests venues, tasks, and themes.",
    link: "#"
  },
  {
    name: "Netflix Clone",
    description: "Full-stack UI clone in progress, features video streaming and user auth.",
    link: "#"
  },
  {
    name: "Responsive Landing Page",
    description: "Mobile-first design with cross-browser compatibility for all screen sizes.",
    link: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="p-8 bg-gray-50 rounded shadow my-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, index) => (
          <a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded bg-white shadow hover:shadow-lg hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
            <p>{proj.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}