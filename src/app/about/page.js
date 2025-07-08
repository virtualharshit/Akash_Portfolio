import ContentTransition from "@/components/ContentTransition";
import InfiniteSkillsScroll from "@/components/InfiniteSkillsScroll";
import MultipleInfo from "@/components/MultipleInfo";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

import { Caveat } from "next/font/google";
import LetsWorkTogether from "@/components/LetsWorkTogether";
import Footer from "@/components/Footer";
import InfiniteCompaniesScroll from "@/components/InfiniteCompaniesScroll";
import Testimonials from "@/components/Testimonials";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"], // or 500, 600, 700
});

const members = [
  {
    title: "Brand Identity & Motion Design",
    category: "Product Design",
    image: "./member1.png",
  },
  {
    title: "Brand Identity & Motion Design",
    image: "./member2.png",
    category: "Product Design",
  },
  {
    title: "Brand Identity & Motion Design",
    image: "./member3.png",
    category: "Product Design",
  },
  {
    title: "Brand Identity & Motion Design",
    image: "./member4.png",
    category: "Product Design",
  },
  {
    title: "Brand Identity & Motion Design",
    image: "./member5.png",
    category: "Product Design",
  },
  {
    title: "Brand Identity & Motion Design",
    image: "./member6.png",
    category: "Product Design",
  },
];

const services = [
  {
    title: "Graphic & Illustration Design ",
    category: "Design",
    subtitle: "Creative Graphics and Illustrations That Speak for Your Brand",
    desc: " I craft visually compelling designs tailored to communicate your brand story effectively. From custom illustrations to striking marketing materials, I ensure every graphic leaves a lasting impression.",
    url: "",
  },
  {
    title: "Graphic & Illustration Design ",
    category: "Design",
    subtitle: "Creative Graphics and Illustrations That Speak for Your Brand",
    desc: " I craft visually compelling designs tailored to communicate your brand story effectively. From custom illustrations to striking marketing materials, I ensure every graphic leaves a lasting impression.",
    url: "",
  },
  {
    title: "Graphic & Illustration Design ",
    category: "Design",
    subtitle: "Creative Graphics and Illustrations That Speak for Your Brand",
    desc: " I craft visually compelling designs tailored to communicate your brand story effectively. From custom illustrations to striking marketing materials, I ensure every graphic leaves a lasting impression.",
    url: "",
  },
  {
    title: "Graphic & Illustration Design ",
    category: "Design",
    subtitle: "Creative Graphics and Illustrations That Speak for Your Brand",
    desc: " I craft visually compelling designs tailored to communicate your brand story effectively. From custom illustrations to striking marketing materials, I ensure every graphic leaves a lasting impression.",
    url: "",
  },
];

const processes = [
  {
    title: "Concept",
    points: [
      "Discovery session & goal setting",
      "Competitor & audience research",
      "Establishing brand tone and visual direction",
    ],
  },
  {
    title: "Design",
    points: [
      "Wireframing & prototyping",
      "UI/UX for mobile & web",
      "Brand-aligned visual design",
    ],
  },
  {
    title: "Webflow",
    points: [
      "Clean, responsive coding",
      "CMS & SEO setup",
      "Testing & deployment",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#141410]font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="">
        <div className="mx-auto container text-center flex flex-col items-center gap-8 md:gap-12 pb-12 md:pb-16 px-4">
          <div className="relative w-full max-w-7xl">
            <div className="m-auto bg-[#FF5E00] rounded-lg overflow-hidden">
              <ContentTransition
                type="fadeIn"
                duration={1.5}
                viewport={{ once: true, margin: "-100px" }}
              >
                <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-8 relative p-6 md:p-8">
                  {/* Image Section */}
                  <ContentTransition
                    type="leftToRight"
                    duration={1.2}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="flex justify-center items-center p-4 md:p-8">
                      <Image
                        src="./home_personalinfo.png"
                        className="h-auto max-h-[280px] md:max-h-[350px] lg:max-h-none w-auto max-w-full"
                        alt="Creative Director portrait"
                      />
                    </div>
                  </ContentTransition>

                  {/* Content Section */}
                  <ContentTransition
                    type="rightToLeft"
                    duration={1.2}
                    delay={0.2}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="w-full text-left mx-auto flex flex-col justify-center items-center lg:items-start">
                      <h2 className="text-center lg:text-left text-2xl md:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                        Creative Director
                      </h2>

                      <h3 className="font-bold text-lg md:text-xl mb-3">
                        About Me
                      </h3>

                      <div className="text-center lg:text-left text-sm md:text-base text-white space-y-3 md:space-y-4">
                        <p>
                          Brands often struggle to stand out and connect with
                          their audience in a competitive market. My mission is
                          to turn ideas into meaningful, visually impactful
                          stories that leave a lasting impression.
                        </p>

                        <p>
                          With a Bachelor&apos;s in Fashion from Pearl Academy,
                          a Post-Graduate degree in Visual Design from IIIT
                          Hyderabad, and an MBA in Marketing, I bring a unique
                          fusion of creativity, business insight, and strategic
                          design thinking to every project.
                        </p>

                        <p>
                          For over 5 years, I&apos;ve collaborated with brands
                          across industries to craft:
                        </p>

                        <ul className="list-disc flex flex-col gap-2 pl-5 mt-2 mb-3">
                          <li>Memorable brand identities</li>
                          <li>Intuitive digital experiences</li>
                          <li>High-converting websites</li>
                          <li>Visually stunning UI designs</li>
                        </ul>

                        <p>
                          From logos and brand kits to fully responsive web
                          platforms and mobile UI design, I help businesses
                          speak clearly, look professional, and connect
                          authentically.
                        </p>

                        <p>Let&apos;s make your brand unforgettable.</p>
                      </div>
                    </div>
                  </ContentTransition>
                </section>
              </ContentTransition>
            </div>
          </div>
        </div>

        {/* Services Showcase */}
        <section className="p-8 py-[6rem] mt-6">
          <div className="w-[90%] m-auto relative grid grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {members.map((member, index) => (
              <div key={index} className="flex flex-col justify-center gap-2 ">
                <Image
                  src={member.image}
                  className="w-full rounded-lg"
                  alt=""
                />
                <div className="text-xl"> {member.title}</div>
                <div className="text-sm text-[#FF5E00]">{member.category}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Working Process Showcase */}
        <section className="px-4 py-16 md:py-24 bg-[#1C1C16]">
          <ContentTransition
            type="fadeInScale"
            duration={1.5}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center">
              <div className="flex items-center justify-center my-6 md:my-8">
                <div className="w-8 md:w-12 h-px bg-orange-500" />
                <h2
                  className={`text-orange-500 text-xl md:text-2xl italic mx-3 md:mx-4 whitespace-nowrap ${caveat.className}`}
                >
                  Working Process
                </h2>
                <div className="w-8 md:w-12 h-px bg-orange-500" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
                Our Workflow
              </h2>
            </div>
          </ContentTransition>

          <div className="max-w-6xl mx-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {processes.map((process, index) => (
              <ContentTransition
                key={index}
                type="fadeIn"
                duration={0.8}
                delay={index * 0.2}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex flex-col gap-4 rounded-xl p-4 md:p-6 hover:bg-[#2A2A20] transition-colors duration-300">
                  <div className="font-bold italic text-orange-500">
                    STEP {index + 1}
                  </div>

                  {/* Process line indicator */}
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white"></div>
                    <div className="h-px border-t border-white bg-white flex-grow"></div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {process.title}
                  </h3>

                  <ul className="list-disc pl-5 mt-2 space-y-3 md:space-y-4">
                    {process?.points.map((point, index) => (
                      <li
                        key={index}
                        className="text-sm md:text-base text-[#FFFFFFAA]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </ContentTransition>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
