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
import ContactForm from "@/components/ContactForm";

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
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
