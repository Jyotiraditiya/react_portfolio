export default function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-lg leading-relaxed">
        I'm a full-stack developer specializing in React, Node.js, and MongoDB. I create responsive, accessible, and visually appealing web applications.
      </p>
      <a
        href="/jyotiraditiya_misra.pdf"
        download
        className="mt-4 inline-block text-blue-400 hover:underline"
      >
        Download Resume
      </a>
    </section>
  );
}