import React from 'react';
import Link from 'next/link';
import {ArrowRight } from 'lucide-react';

const tools = [
  { 
    name: 'Tutoring Center Queuing System',
    description: 'A project we initially made for the MESA Space and STEM Study Room at the college. It allows students to \'queue\' for a tutor they want help from. This allows tutors to better pay attention to students who have waited for longer, and allows students to keep their spots on the queue when leaving the center e.g. for a toilet break.',
    href: 'https://ticketing.up.railway.app/',
  },
  { 
    name: 'Volunteer Tracking App',
    description: '',
    href: '/tools/quick-clip',
  },
];

export default function Tools() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-12 text-cyan-400">Projects We've Built</h1>
        
        <div className="space-y-24">
          {tools.map((tool, index) => (
            <div key={tool.name} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
              <div className="flex-1 space-y-4">
                <div className="mb-2">
                  <h2 className="text-2xl font-bold">{tool.name}</h2>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                  <p className="text-gray-300">
                    {tool.description}
                  </p>
                </div>
                
                <Link href={tool.href}>
                  <div className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ArrowRight className="mr-2" size={16} />
                    <span>View Project</span>
                  </div>
                </Link>
              </div>
              
              <div className="flex-1">
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="" //check how to do website snippet  
                    alt={tool.name}
                    className="w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}