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
import { FaInstagram } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"], // or 500, 600, 700
});

const projects = [
  {
    title: "Brand Identity & Motion Design",
    category: "Product Design",
    image: "./project1.png",
  },
  {
    title: "Brand Identity & Motion Design",
    image: "./project1.png",
    category: "Product Design",
  },
  {
    title: "Brand Identity & Motion Design",
    image: "./project1.png",
    category: "Product Design",
  },
  {
    title: "Brand Identity & Motion Design",
    image: "./project1.png",
    category: "Product Design",
  },
  {
    title: "Brand Identity & Motion Design",
    image: "./project1.png",
    category: "Product Design",
  },
  {
    title: "Brand Identity & Motion Design",
    image: "./project1.png",
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
    desc: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
    points: [
      "Reviewing any existing branding",
      "Target audience and competitors research",
      "Developing a strategy",
    ],
  },
  {
    title: "Design",
    desc: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
    points: [
      "Reviewing any existing branding",
      "Target audience and competitors research",
      "Developing a strategy",
    ],
  },
  {
    title: "Webflow",
    desc: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
    points: [
      "Reviewing any existing branding",
      "Target audience and competitors research",
      "Developing a strategy",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#141410]font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="">
        <header className="relative">
          {/* FOLLOW ME section with animation */}
          <ContentTransition
            type="rightToLeft"
            duration={0.8}
            delay={0.2}
            className="hidden absolute right-[5%] xl:right-[10%] top-1/2 rotate-90  translate-1/2 -translate-y-1/2 text-lg lg:flex items-center gap-4"
          >
            <div className="whitespace-nowrap">FOLLOW ME</div>

            {/* Long arrow */}
            <div className="relative mx-2 h-8 w-32">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-current transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 h-3 w-3 border-r-2 border-t-2 border-current transform rotate-45 -translate-y-1/2"></div>
            </div>

            <div className="flex gap-4">
              <FaInstagram className="-rotate-90 hover:text-[#FF5E00] transition-colors" />
              <FaFacebook className="-rotate-90 hover:text-[#FF5E00] transition-colors" />
              <FaXTwitter className="-rotate-90 hover:text-[#FF5E00] transition-colors" />
            </div>
          </ContentTransition>

          {/* Background image */}
          <img
            src="./headerbg.png"
            className="absolute h-full w-full object-cover z-[-1]"
            alt="Header background"
          />

          <div className="min-h-[80vh] grid lg:grid-cols-[50%_50%] items-center w-[90%] xl:w-[80%] mx-auto relative">
            {/* Left content */}
            <ContentTransition
              type="leftToRight"
              duration={0.8}
              className="w-[90%] m-auto lg:w-auto flex flex-col justify-center items-center lg:items-start"
            >
              <p className="text-center md:text-left border-b-[1px] text-xl flex items-center gap-2 border-b-white py-2 mb-4">
                Currently Available for Freelance Worldwide <MdArrowOutward />
              </p>

              <h2 className="text-center lg:text-left text-2xl sm:text-3xl xl:text-8xl font-bold mb-4">
                Hi, I'm <span className="text-[#FF5E00]">Akash</span> Janoriya
              </h2>

              <p className="text-center md:text-left">
                I craft user-focused digital experiences through clean code and
                captivating design. Let's build your brand, website, or mobile
                app — professionally and passionately.
              </p>

              <ContentTransition
                type="fadeInScale"
                duration={0.6}
                delay={0.4}
                className="mt-12 flex justify-center gap-4 w-full md:w-fit"
              >
                <a
                  href="#about"
                  className="bg-[#FF5E00] text-center text-white flex items-center gap-2 py-3 px-6 lg:px-10 capitalize rounded-sm shadow-lg hover:scale-105 hover:underline transition-transform"
                >
                  Let's Start <FaLongArrowAltRight />
                </a>
              </ContentTransition>
            </ContentTransition>

            {/* Right image */}
            <ContentTransition type="fadeIn" duration={1} delay={0.3}>
              <img
                src="./headerright.png"
                className="hidden lg:block w-[53%] object-cover absolute right-0 bottom-0"
                alt="Akash Janoriya"
              />
            </ContentTransition>
          </div>
        </header>
        <InfiniteSkillsScroll />

        <MultipleInfo />
        <InfiniteSkillsScroll />

        {/* Services Showcase */}
        <section className="p-8 py-[6rem] mt-6">
          <ContentTransition
            type="fadeInScale"
            duration={1.5}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-1/2 m-auto flex flex-col items-center gap-2 text-center">
              <div className="flex items-center justify-center my-8">
                <div className="w-12 h-px bg-orange-500" />
                <h2
                  className={`text-orange-500  italic mx-4  whitespace-nowrap ${caveat.className}`}
                >
                  Complete Project
                </h2>
                <div className="w-12 h-px bg-orange-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Look At My Portfolio And Give Me Your Feedback
              </h2>
              <p className="text-sm sm:text-base">
                 Here are a few selected works that reflect my expertise in
                design, development, and branding.
              </p>
            </div>
          </ContentTransition>

          <div className="w-[90%] m-auto relative grid grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col justify-center gap-2 ">
                <img src={project.image} className="w-full rounded-lg" alt="" />
                <div className="text-sm text-[#FF5E00]">{project.category}</div>
                <div className="text-xl"> {project.title}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 relative flex flex-col items-center justify-center gap-4 w-[200px] h-[200px] rounded-full text-md text-black m-auto bg-[#FF5E00]">
            <div className="w-full h-full absolute border-2 border-[#FF5E00] rounded-full top-2 left-[-5%]">
              {" "}
            </div>
            <FaArrowRight />
            <div className=""> Click More Work</div>
          </div>
        </section>

        <LetsWorkTogether />

        {/* Services Showcase */}
        <section className="p-8 py-[6rem] mt-6">
          <ContentTransition
            type="fadeInScale"
            duration={1.5}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="lg:w-1/2 m-auto flex flex-col items-center gap-2 text-center">
              <div className="flex items-center justify-center my-8">
                <div className="w-12 h-px bg-orange-500" />
                <h2
                  className={`text-orange-500 text-2xl  italic mx-4  whitespace-nowrap ${caveat.className}`}
                >
                  Services That i Provide
                </h2>
                <div className="w-12 h-px bg-orange-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
                My Special Service For Your Business Development
              </h2>
            </div>
          </ContentTransition>

          <div className="w-[90%] m-auto relative grid gap-8 mt-12">
            {services.map((project, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-[5%_40%_40%_10%] justify-center gap-4  border-b py-4 border-[#FFFFFF1A] hover:border-[#FF5E00]"
              >
                <div className="text-xl">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div className="flex  justify-between gap-2">
                  <div>
                    <div className="text-sm">{project.category}</div>
                    <div className="text-xl lg:text-3xl mt-2">
                      {" "}
                      {project.title}
                    </div>
                  </div>
                  <div className="flex justify-end items-center lg:hidden">
                    <MdArrowOutward className="bg-[#262625] text-white hover:bg-[#FF5E00] hover:text-black text-lg w-10 h-10 p-2 " />
                  </div>
                </div>

                <div>
                  <div className="text-sm ">{project.subtitle}</div>
                  <div className="text-sm text-[#FFFFFF80] mt-2">
                    {" "}
                    {project.desc}
                  </div>
                </div>
                <div className="hidden lg:flex justify-end items-center">
                  <MdArrowOutward className="bg-[#262625] text-white hover:bg-[#FF5E00] hover:text-black text-lg w-10 h-10 p-2 " />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Working Process Showcase */}
        <section className="p-8 py-[6rem] mt-6 bg-[#1C1C16]">
          <ContentTransition
            type="fadeInScale"
            duration={1.5}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="lg:w-1/2 m-auto flex flex-col items-center gap-2 text-center">
              <div className="flex items-center justify-center my-8">
                <div className="w-12 h-px bg-orange-500" />
                <h2
                  className={`text-orange-500 text-2xl  italic mx-4  whitespace-nowrap ${caveat.className}`}
                >
                  Working Process
                </h2>
                <div className="w-12 h-px bg-orange-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
                Your Dream Website In Just Few Steps
              </h2>
            </div>
          </ContentTransition>

          <div className="lg:w-[90%] xl:w-[70%] m-auto relative grid lg:grid-cols-3  gap-8 mt-12">
            {processes.map((process, index) => (
              <div
                key={index}
                className=" border p-6 py-8 rounded-xl border-[#FFFFFF1A] hover:border-[#FF5E00]"
              >
                <div className="text-3xl">{process.title}</div>
                <div className="text-sm text-[#FFFFFF80] mt-4">
                  {" "}
                  {process.desc}
                </div>
                <ul className="list-disc pl-5 mt-2">
                  {process?.points.map((point, index) => (
                    <li key={index} className="text-sm text-[#FFFFFF80] mt-1">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
