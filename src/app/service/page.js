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
import Services from "@/components/Services";
import WorkingProcess from "@/components/WorkingProcess";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"], // or 500, 600, 700
});

const servicesimgs = [
  "./service1.png",
  "./service6.png",
  "./service2.png",
  "./service5.png",
  "./services6.png",
  "./portfolio1.png",
];

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
    title: "Discovery & Strategic Blueprint",
    points: [
      "Uncover your unique business goals.",
      "Pinpoint your perfect audience.",
      "Map out your website's success.",
    ],
  },
  {
    title: "Design & Develop Your Vision",
    points: [
      "Craft captivating visual mockups.",
      "Build intuitive, responsive layouts.",
      "Integrate powerful features.",
    ],
  },
  {
    title: "Refine & Launch Your Online Presence",
    points: [
      "Your valuable feedback is key.",
      "Perfect with unlimited revisions.",
      "Launch your stunning website!",
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
                All Services
              </h2>
              <div className="flex items-center justify-center my-8">
                <h2
                  className={` text-2xl  italic mx-4  whitespace-nowrap ${caveat.className}`}
                >
                  <Link className="hover:underline" href="/">
                    {" "}
                    Home{" "}
                  </Link>{" "}
                  <span className="text-orange-500"> / Services </span>
                </h2>
              </div>
            </div>
          </ContentTransition>

          <div className="w-[90%] m-auto relative grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
            {servicesimgs.map((img, index) => (
              <img
                key={index}
                src={img}
                className="w-full h-full max-h-[300px] object-cover overflow-hidden"
              />
            ))}
          </div>

          <Services />
        </section>

        <LetsWorkTogether />

        <WorkingProcess />

        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
