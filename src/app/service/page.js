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
    title: "Concept",
    desc: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
    points: [
      "Reviewing any existing branding",
      "Target audience and competitors research",
      "Developing a strategy",
    ],
  },
  {
    title: "Concept",
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
        {/* Services Showcase */}
        <section className="p-8 py-[6rem] mt-6">
          <ContentTransition
            type="fadeInScale"
            duration={1.5}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="lg:w-1/2 m-auto flex flex-col items-center gap-2 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-7xl font-bold mb-8">
                Services All
              </h2>
              <div className="flex items-center justify-center my-8">
                <h2
                  className={` text-2xl  italic mx-4  whitespace-nowrap ${caveat.className}`}
                >
                  Home <span className="text-orange-500"> / Service All </span>
                </h2>
              </div>
            </div>
          </ContentTransition>

          <div className="w-[90%] m-auto relative grid md:grid-cols-2 xl:grid-cols-3 gap-6 py-12">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="h-[300px] bg-[#D9D9D9] grid justify-center gap-4  border-b py-4 border-[#FFFFFF1A] hover:border-[#FF5E00]"
                >
                  <div className="text-xl">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                </div>
              ))}
          </div>

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

        <LetsWorkTogether />

        {/* Working Process Showcase */}
        <section className="p-8 py-[6rem] mt-8 bg-[#1C1C16]">
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
