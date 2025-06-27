import React from 'react';
const sections = ['Home', 'About', 'Projects', 'Contact'];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md shadow z-50">
      <div className="flex justify-center space-x-6 py-4">
        {sections.map(sec => (
          <a
            key={sec}
            href={`#${sec.toLowerCase()}`}
            className="hover:text-blue-400 transition text-lg font-medium"
          >
            {sec}
          </a>
        ))}
      </div>
    </nav>
  );
}