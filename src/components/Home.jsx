export default function Home() {
  return (
    <section id="home" className="text-center py-20">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hi, I'm Jyotiraditya Misra</h1>
      <p className="text-xl text-gray-300 mb-6">Building beautiful & performant websites.</p>
      <a
        href="#projects"
        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition"
      >
        View My Work
      </a>
    </section>
  );
}