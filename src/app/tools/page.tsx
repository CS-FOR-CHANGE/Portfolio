import React from 'react';
import Link from 'next/link';

const ToolIcon = () => <div className="text-4xl">🛠️</div>;

const tools = [
  { name: 'Tool 1', description: 'Description of Tool 1', href: '/tools/tool1' },
  { name: 'Tool 2', description: 'Description of Tool 2', href: '/tools/tool2' },
  { name: 'Tool 3', description: 'Description of Tool 3', href: '/tools/tool3' },
  { name: 'Tool 4', description: 'Description of Tool 4', href: '/tools/tool4' },
];

export default function Tools() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tools Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link href={tool.href} key={tool.name}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <ToolIcon />
                <h2 className="text-xl font-semibold ml-4">{tool.name}</h2>
              </div>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}