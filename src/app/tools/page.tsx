"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const tools = [
  {
    name: "Tutoring Center Queuing System",
    description:
      'A project we initially made for the MESA Space and STEM Study Room at the college. It allows students to "queue" for a tutor they want help from. This allows tutors to better pay attention to students who have waited for longer, and allows students to keep their spots on the queue when leaving the center e.g. for a toilet break.',
    href: "https://ticketing.up.railway.app/",
    image: "/websitetutor.png",
    tags: ["React", "Node.js", "MongoDB"],
    status: "Live",
  },
  {
    name: "Volunteer Tracking App",
    description:
      "An app designed for the House Of Wisdom to track volunteer hours and manage community projects effectively.",
    href: "/tools/quick-clip",
    image: "/inProgress.jpg",
    tags: ["Next.js", "TypeScript", "Prisma"],
    status: "In Progress",
  },
];

export default function Tools() {
  // Updated useState to accept `string | null` to resolve type mismatch error
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Projects We&aposve Built
          </h1>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl">
            Explore our collection of projects built to solve real-world
            problems and make a positive impact in our community.
          </p>
        </motion.div>

        <div className="space-y-32">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } justify-between items-center gap-12`}
              onMouseEnter={() => setHoveredProject(tool.image)} // Assign `tool.image` to state
              onMouseLeave={() => setHoveredProject(null)} // Reset state to `null`
            >
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-bold">{tool.name}</h2>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        tool.status === "Live"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {tool.status}
                    </span>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                    <p className="text-gray-300 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <Link href={tool.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg transition-colors"
                    >
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </motion.div>
                  </Link>
                </div>
              </div>

              <motion.div
                className="flex-1 relative w-full aspect-video rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={tool.image}
                  alt={tool.name || "Project Image"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl shadow-2xl"
                />
                {hoveredProject === tool.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
