import React from "react";
import SkillList from "../components/SkillList";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "HTML",
  "CSS",
  "Git",
  "RESTful APIs",
  "Express.js",
  "Framer Motion"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-4">My Skills</h2>
      <SkillList skills={skills} />
    </section>
  );
}