import Image from "next/image";
import Section from "./components/section";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-offwhite text-black text-sm md:text-lg">
      <div className="aspect-video bg-black bg-center bg-cover bg-no-repeat items-center flex">
        <div className="container mx-auto px-20 h-2/5 flex gap-3 text-white ">
          <h1 className="text-8xl font-semibold">CS FOR CHANGE</h1>
          <p className="text-md row-span-2 col-start-1 row-start-2 text-pretty pt-5 pl-5">
            Whether you're a seasoned developer or just starting your coding
            journey, we're here to help. Our goal is to foster a welcoming
            community that's all about supporting one another on the road to
            success in the digital age. Join us to learn, share, and grow your
            tech skills!
            <br />
            <a href="https://forms.gle/QRNT34DaesvMFJUR9">
            <button
              type="button"
              className="font-semibold bg-[#F9A826] px-5 py-3 mt-3 rounded-full w-1/4 h-1/3"
            >
              {<span className="flex items-center justify-center">Join</span>}
            </button>
            </a>
          </p>

          <div className="col-span-1 row-span-4 col-start-2 row-start-1 container flex justify-center">
            <img
              src="coding_pair.svg"
              alt=""
              className=" aspect-square w-3/5 row-start-1"
            />
          </div>
        </div>
      </div>
      <div className="pt-10 rounded-t-lg bg-white mx-auto">
        <Section>
          <Image
            src={"/developer-activity.png"}
            width={400}
            height={100}
            className="relative col-span-2"
            alt=""
          />
          <div className="mx-5 sm:mx-20 flex flex-col gap-5 px-20">
            <h1 className="text-3xl">About Us</h1>
            <p className="leading-">
              CS FOR CHANGE is a vibrant club where computer enthusiasts gather to
              explore the fascinating world of Computer Science and programming.
              Together, we'll tackle exciting projects, discover industry-grade
              technologies, and . Come be a part of EdmondsCS and unlock your
              full potential.
            </p>
          </div>
        </Section>

        <Section>
          <div className="mx-20">
            <h1 className="text-3xl py-5">Scope and Objectives</h1>
            <ul className="list-disc list-inside px-10 leading-8">
              <li>
                To provide a platform for students to expand their knowledge and
                skills in the field of Computer Science.
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
                To encourage members to share their knowledge and expertise with
                the club community through presentations and workshops.
              </li>
              <li>
                To provide support and resources for students pursuing degrees
                or careers in Computer Science.
              </li>
            </ul>
          </div>
          <Image src={"/thinkers.png"} width={400} height={100} alt="" />
        </Section>
        <div className="bg-triton text-white">
          <br />
          <hr className="mx-20" />
          <div className="flex justify-center p-10">
            <h1 className="text-3xl">Interested in Joining?</h1>
            {}
          </div>
          <hr className="mx-20" />
          <br className="" />
        </div>
      </div>
      <Footer/>
    </main>
  );
}
