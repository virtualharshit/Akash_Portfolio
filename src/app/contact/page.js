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
        <section className="px-4 py-12 md:py-24 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Let&apos;s Start Something
            </h2>
          </div>

          <div className="bg-white text-black max-w-6xl mx-auto p-6 md:p-8 rounded-2xl flex flex-col gap-6">
            <div className="font-bold text-xl md:text-2xl border-b border-[#00000033] py-4">
              GET IN TOUCH
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label>Your Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                  className="bg-[#EDEDED] p-3 md:p-4 rounded"
                />
              </div>

              {/* Organization */}
              <div className="flex flex-col gap-2">
                <label>Your Organization&apos;s Name</label>
                <input
                  name="organization"
                  type="text"
                  placeholder="Enter Organization Name"
                  className="bg-[#EDEDED] p-3 md:p-4 rounded"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label>Your Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  className="bg-[#EDEDED] p-3 md:p-4 rounded"
                />
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-2">
                <label>Your Contact</label>
                <input
                  name="contact"
                  type="tel"
                  placeholder="Enter Contact Number"
                  className="bg-[#EDEDED] p-3 md:p-4 rounded"
                />
              </div>

              {/* Website */}
              <div className="flex flex-col gap-2">
                <label>Website / Social Media Link</label>
                <input
                  name="website"
                  type="url"
                  placeholder="Enter URL"
                  className="bg-[#EDEDED] p-3 md:p-4 rounded"
                />
              </div>

              {/* Services */}
              <div className="flex flex-col gap-2">
                <label>What services are you interested in?</label>
                <select
                  name="services"
                  className="bg-[#EDEDED] p-3 md:p-4 rounded"
                >
                  <option value="">Select a service</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                </select>
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-2">
                <label>
                  How much are you looking to invest on this project?
                </label>
                <select
                  name="budget"
                  className="bg-[#EDEDED] p-3 md:p-4 rounded"
                >
                  <option value="">Select budget range</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $15,000</option>
                  <option>$15,000+</option>
                </select>
              </div>

              {/* Referral */}
              <div className="flex flex-col gap-2">
                <label>How did you hear about us?</label>
                <select
                  name="referral"
                  className="bg-[#EDEDED] p-3 md:p-4 rounded"
                >
                  <option value="">Select an option</option>
                  <option>Google Search</option>
                  <option>Social Media</option>
                  <option>Referral</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="w-full">
              <div className="flex flex-col gap-2">
                <label>
                  Anything you&apos;d like to mention before we give you a call?
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Enter your message"
                  className="bg-[#EDEDED] p-3 md:p-4 rounded"
                />
              </div>
            </div>

            {/* Submit Button - Added for better UX */}
            <button
              type="submit"
              className="w-full bg-black text-white py-4 px-6 rounded-lg mt-4 text-2xl hover:bg-gray-800 transition-colors self-end"
            >
              Let&apos;s Contact
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
