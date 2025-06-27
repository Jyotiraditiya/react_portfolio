export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="mb-4">Feel free to reach out for collaborations or just to say hi!</p>
      <div className="flex justify-center space-x-6 text-2xl">
        <a href="mailto:jyotiraditiyamisra@gmail.com" className="hover:text-blue-400">
          📧
        </a>
        <a href="https://github.com/jyotiraditiya" className="hover:text-blue-400">
          🐙
        </a>
        <a href="https://linkedin.com/in/jyotiraditiya" className="hover:text-blue-400">
          🔗
        </a>
      </div>
    </section>
  );
}