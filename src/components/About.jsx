import React from "react";

export default function About() {
  return (
    <section id="about" className="p-8 bg-white rounded shadow my-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
Hi, I’m Jyotiraditya Misra, a passionate web developer with hands-on experience in building modern, responsive web applications using React, Tailwind CSS, and other cutting-edge technologies. I thrive on solving problems and crafting clean, intuitive, and visually appealing user interfaces.

From dynamic single-page apps to full-stack solutions, I love turning ideas into interactive experiences. My focus is always on writing maintainable code, improving performance, and enhancing user experience with thoughtful design and smooth functionality.

This portfolio showcases some of my work, projects, and the journey I’m taking as I grow as a developer. I’m always learning, building, and pushing the limits of what the web can do.

Let’s connect and create something impactful!
      </p>
      <a
        href="/jyotiraditiya_misra.pdf"
        download
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
