"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Section from "./components/section";
import Footer from "./components/footer";
import { motion } from "framer-motion";

const events = [
  {
    title: "Microsoft Campus Tour",
    description:
      "Visited the Microsoft Campus in Renton through a tour led by a current employee. Learned about their work culture and internship opportunities.",
    image: "/microsoft-tour.png",
    date: "March 2024",
  },
  {
    title: "Quarterly Potluck Party",
    description:
      "A quarterly event where we gather up and have fun with some food and bonding! Members each bring a selection of foods / drinks and we allocate club funds for UberEats / take out as well!",
    image: "/potluck.png",
    date: "January 2024",
  },
  {
    title: "Web Development Workshop",
    description:
      "A hands-on workshop where students learned modern full stack development + programming through frameworks i.e. React, Next.js, Docker, Django, MongoDB, Spring Boot, etc. All members are free to join.",
    image: "/meeting.jpg",
    date: "Ongoing. During club meetings / Weekly",
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-20 gap-10 pt-20 min-h-screen">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="md:w-2/3 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-8xl font-extrabold leading-tight font-spaceGrotesk">
            CS FOR CHANGE
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-300">
            CS FOR CHANGE is a community-driven club dedicated to using technology for positive impact. Our mission is to support nonprofits, 
            local businesses, and under-resourced organizations by creating free, professional-quality websites and apps that help them thrive. 
            These real-world projects allow our members to enhance their technical skills, 
            build impressive portfolios, and contribute meaningfully to the community.
            <br></br>
            <br></br>
            Whether you're a seasoned developer or just starting your coding
            journey, we're here to help. Our goal is to foster a welcoming
            community that's all about supporting one another on the road to
            success in the digital age.
          </p>

          {/* Button with Spacing */}
          <a
            href="https://forms.gle/QRNT34DaesvMFJUR9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8"
          >
            <button
              type="button"
              className="font-semibold bg-[#F9A826] text-black px-10 py-4 rounded-full text-xl 
                        hover:bg-[#fbb746] transition-colors duration-300"
            >
              Join Our Community
            </button>
          </a>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/3 flex justify-center"
        >
          <img
            src="coding_pair.svg"
            alt="Coding Pair"
            className="w-4/5 md:w-full aspect-square drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Past Events Section */}
      <div className="w-full flex flex-col md:flex-row items-center gap-10 px-6 md:px-20 py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <Image
            src="/developer-activity.png"
            width={500}
            height={300}
            alt="Developer Activity"
            className="rounded-2xl shadow-2xl"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-black">About Us</h2>
          <ul className="text-lg leading-relaxed text-gray-700 list-disc pl-5 space-y-2">
            <li>Hands-on workshops to learn and apply new programming skills.</li>
            <li>Bonding events and social activities to strengthen our community.</li>
            <li>Tours of tech campuses to explore industry work culture.</li>
            <li>Casual hangouts to connect and relax with fellow members.</li>
            <li>Exciting projects using industry-standard tec stack.</li>
            <li>Portfolio enhancement by creating free websites for nonprofits and small businesses.</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <Section>
          <div className="container mx-auto px-6 md:px-20">
            <h2 className="text-4xl font-bold text-black text-center mb-16">
              Past Events
            </h2>
            <div className="space-y-32">
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-12`}
                >
                  <div className="flex-1 space-y-4">
                    <span className="text-blue-600 font-semibold">
                      {event.date}
                    </span>
                    <h3 className="text-3xl font-bold text-black">{event.title}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex-1">
                    <Image
                      src={event.image}
                      width={600}
                      height={400}
                      alt={event.title}
                      className="rounded-2xl shadow-xl"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      <Footer />
    </main>
  );
}
