const projects = [
  { title: 'Netflix Clone', desc: 'React, TMDB, Firebase', img: '/netflix.jpg' },
  { title: 'EventAI Planner', desc: 'Next.js, OpenAI, MongoDB', img: '/event.jpg' },
  { title: 'Smart Parking', desc: 'React, Node.js, Maps', img: '/parking.jpg' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(p => (
          <div
            key={p.title}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition"
          >
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}