import Image from "next/image";
import Section from "./components/section";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-offwhite text-black text-sm md:text-lg">
      {/* Hero Section */}
      <div className="relative bg-black text-white flex items-center justify-center h-screen">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-20 gap-10">
          {/* Text Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-5xl md:text-8xl font-extrabold leading-tight">
              CS FOR CHANGE
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed">
              Whether you're a seasoned developer or just starting your coding
              journey, we're here to help. Our goal is to foster a welcoming
              community that's all about supporting one another on the road to
              success in the digital age. Join us to learn, share, and grow your
              tech skills!
            </p>
            <a
              href="https://forms.gle/QRNT34DaesvMFJUR9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6"
            >
              <button
                type="button"
                className="font-semibold bg-[#F9A826] px-5 py-3 mt-3 rounded-full w-1/4 h-1/3"
              >
                <span className="flex items-center justify-center">Join</span>
              </button>
            </a>
          </div>

          {/* Image */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src="coding_pair.svg"
              alt="Coding Pair"
              className="w-4/5 md:w-full aspect-square"
            />
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-white py-16">
        <Section>
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-20">
            <Image
              src={"/developer-activity.png"}
              width={400}
              height={100}
              alt="Developer Activity"
              className="rounded-md shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-semibold mb-4">About Us</h1>
              <p className="text-lg leading-relaxed">
                CS FOR CHANGE is a vibrant club where computer enthusiasts
                gather to explore the fascinating world of Computer Science and
                programming. Together, we'll tackle exciting projects, discover
                industry-grade technologies, and unlock your full potential.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* Scope and Objectives Section */}
      <div className="bg-gray-50 py-16">
        <Section>
          <div className="container mx-auto flex flex-col md:flex-row items-start gap-10 px-6 md:px-20">
            {/* Bullet Points */}
            <div className="flex-1">
              <h1 className="text-4xl font-semibold mb-8">
                Scope and Objectives
              </h1>
              <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
                <li>
                  To provide a platform for students to expand their knowledge
                  and skills in the field of Computer Science.
                </li>
                <li>
                  To foster a collaborative and supportive environment where
                  students can work together on projects and share ideas.
                </li>
                <li>
                  To explore and experiment with emerging technologies,
                  programming languages, and tools.
                </li>
                <li>
                  To encourage members to share their knowledge and expertise
                  with the club community through presentations and workshops.
                </li>
                <li>
                  To provide support and resources for students pursuing degrees
                  or careers in Computer Science.
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src={"/thinkers.png"}
                width={400}
                height={100}
                alt="Thinkers"
                className="rounded-md shadow-lg"
              />
            </div>
          </div>
        </Section>
      </div>

      {/* Call to Action Section */}
      
      <Footer />
    </main>
  );
}
