import { useState } from 'react'
import './App.css'
import { MagicCard } from './components/ui/magic-card'

function Roadmap() {
  const roadmaps = [
    { title: 'Frontend Development', description: 'Learn HTML, CSS, JavaScript, React, etc.' },
    { title: 'Backend Development', description: 'Learn Node.js, Express, Databases, etc.' },
    { title: 'DevOps', description: 'Learn CI/CD, Docker, Kubernetes, etc.' },
    { title: 'Data Science', description: 'Learn Python, R, Machine Learning, etc.' },
    { title: 'Cybersecurity', description: 'Learn Network Security, Cryptography, etc.' },
    { title: 'Mobile Development', description: 'Learn Flutter, React Native, etc.' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoadmaps = roadmaps.filter(roadmap =>
    roadmap.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

 

  return (
    <div className="flex items-center justify-center p-4 sm:p-8 min-h-screen overflow-y-auto">
      <div className="w-full max-w-4xl">
        <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b mb-6 sm:mb-10 from-gray-800 to-gray-200 bg-clip-text text-center text-5xl sm:text-8xl font-semibold leading-none text-transparent">
          Roadmaps
        </p>
        <p className="text-center text-gray-400 mb-6 sm:mb-8">
          Explore various IT fields and find the best study plans to advance your career.
        </p>
        <div className="mb-6 sm:mb-8 text-center">
          <input
            type="text"
            placeholder="Search Roadmaps..."
            className="p-2 rounded-lg bg-gray-700 text-gray-300 mr-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredRoadmaps.map((roadmap, index) => (
            <MagicCard key={index} className="roadmap-card shadow-lg rounded-lg p-1 sm:p-6 mb-1 transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in">
              <div className="h-8 flex items-center justify-center">
                <h2 className="text-lg sm:text-xl font-extrabold text-blue-400 text-center">
                  {roadmap.title}
                </h2>
              </div>
              <hr className="border-gray-600 my-2 sm:my-4" />
              <p className="text-gray-300 text-sm sm:text-base">{roadmap.description}</p>
            </MagicCard>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Roadmap />
    </>
  )
}

export default App
