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
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"], // or 500, 600, 700
});

const members = [
  {
    image: "./about1.png",
  },
  {
    image: "./about2.png",
  },
  {
    image: "./about3.png",
  },
  {
    image: "./about4.png",
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

const processes1 = [
  {
    points: [
      "Outdated Design: Their current website looks old and fails to attract new customers.",
      "Confused Vision: They struggle to define what their website should truly achieve for their business.",
      "Poor Mobile Experience: Their site doesn't work well on phones, losing potential audience engagement.",
    ],
  },
  {
    points: [
      "Uncertain Costs: They worry about unexpected expenses and exceeding their budget.",
      "Low Online Visibility: Their fantastic website isn't being found by anyone on search engines.",
      "Lack of Support: They fear being left without help for updates after the site is launched.",
    ],
  },
];

const expertise = [
  {
    title: "Design & Development",
    desc: "Creative Interfaces and Functional Code Tailored for Seamless Digital Experiences.",
    skills: [
      "UI/UX Design",
      "Frontend Development",
      "Responsive Design",
      "Design Systems",
    ],
  },

  {
    title: "Product Prototyping",
    desc: "Turning Ideas into Interactive Prototypes That Showcase Real User Journeys.",
    skills: [
      "Wireframing Tools",
      "Interactive Mockups",
      "Figma & XD",
      "User Flows",
    ],
  },
  {
    title: "Web & App Optimization",
    desc: "Speed, SEO, and Usability Tweaks That Drive Performance and Retention.",
    skills: [
      "Mobile Optimization",
      "Page Speed Tuning",
      "SEO-Friendly Code",
      "Cross-Browser Testing",
    ],
  },
];

const technicalskills = [
  {
    title: "Design",
    skills: [
      {
        title: "UI/UX Design",
        level: 95,
      },
      {
        title: "Interaction Design (IxD)",
        level: 95,
      },
      {
        title: "User Research & Usability Testing",
        level: 95,
      },
      {
        title: "Prototyping & Wireframing",
        level: 95,
      },
    ],
  },

  {
    title: "Development",
    skills: [
      {
        title: "React/Next.js",
        level: 95,
      },
      {
        title: "TypeScript",
        level: 95,
      },
      {
        title: "Node.js",
        level: 95,
      },
      {
        title: "PostgreSQL",
        level: 95,
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#141410]font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="">
        <header className="relative">
          {/* Background image */}
          {/* <img
            src="./headerbg.png"
            className="absolute h-full w-full object-cover z-[-1]"
            alt="Header background"
          /> */}

          <div className="lg:min-h-[80vh] grid lg:grid-cols-2 items-center w-[90%] xl:w-[80%] mx-auto relative py-8">
            {/* Left content */}
            <ContentTransition
              type="leftToRight"
              duration={0.8}
              className="w-[90%] m-auto lg:w-auto flex flex-col justify-center items-center lg:items-start text-sm lg:text-base"
            >
              <h2 className="text-center lg:text-left text-2xl sm:text-3xl xl:text-5xl font-bold mb-4">
                Creative Director
              </h2>
              <p className="text-center md:text-left text-lg mb-4">About Me</p>
              <p className="text-center md:text-left mb-2">
                I&apos;m Akash Janoriya, the founder of Technisum Web Solutions,
                and I&apos;m a seasoned expert in crafting visually stunning and
                high-performing digital solutions. I combine a passion for
                innovation with a robust skill set spanning web design,
                development, and graphic design.
              </p>
              <p className="text-center md:text-left mb-2">
                Whether you need a responsive website that captivates your
                audience, a dynamic web application that streamlines your
                operations, or impactful brand assets that elevate your
                identity, I bring a user-centric approach to every project. I
                leverage a comprehensive toolkit including HTML, CSS,
                JavaScript, Bootstrap, WordPress, React.js, and Node.js to build
                solutions that not only look great but also drive tangible
                results for your business.
              </p>{" "}
              <p className="text-center md:text-left">
                Beyond coding, I excel at creating compelling visual stories.
                With expertise in tools like Photoshop, Illustrator, Corel Draw,
                and Adobe XD, I ensure your brand stands out with impactful
                logos, brochures, and other essential graphics.
              </p>
            </ContentTransition>

            {/* Right image */}
            <ContentTransition type="fadeIn" duration={1} delay={0.3}>
              <img
                src="./headerright.png"
                className="hidden opacity-20 lg:block w-[53%] object-cover absolute right-0 bottom-0"
                alt="Akash Janoriya"
              />
            </ContentTransition>
          </div>
        </header>

        {/* Services Showcase */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 md:p-8 md:py-[6rem]">
          <div className="w-[90%] md:w-[80%] m-auto relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12">
            {members.map((member, index) => (
              <div
                key={index}
                className="flex flex-col justify-center gap-2 sm:gap-3"
              >
                <img
                  src={member.image}
                  className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:h-[300px] lg:h-[500px] object-cover rounded-lg"
                  alt={member.name || "Team member"}
                />
                {/* Add responsive text/content for member info if needed */}
              </div>
            ))}
          </div>
        </section>

        {/* Working Process Showcase */}
        <section className="px-4 py-16 md:py-24 bg-[#1C1C16]">
          <div className="max-w-6xl mx-auto">
            <ContentTransition
              type="fadeInScale"
              duration={1.5}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex items-center justify-center my-6 md:my-8">
                  <div className="w-8 md:w-12 h-px bg-orange-500" />
                  <h2
                    className={`text-orange-500 text-xl md:text-2xl italic mx-3 md:mx-4 whitespace-nowrap ${caveat.className}`}
                  >
                    Problems
                  </h2>
                  <div className="w-8 md:w-12 h-px bg-orange-500" />
                </div>
                <h2 className="text-3xl  md:text-3xl  lg:text-4xl font-bold mb-6 md:mb-8">
                  How I Fix Your Online Issues
                </h2>
              </div>
            </ContentTransition>

            <div className="w-full p-4 md:p-6 text-lg font-bold">
              My clients typically come to me with specific challenges that are
              holding back their digital growth:
            </div>

            <div className=" relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {processes1.map((process, index) => (
                <ContentTransition
                  key={index}
                  type="fadeIn"
                  duration={0.8}
                  delay={index * 0.2}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex flex-col gap-4 rounded-xl p-4 md:p-6 hover:bg-[#2A2A20] transition-colors duration-300">
                    <ul className="pl-5 mt-2 space-y-3 md:space-y-4">
                      {process?.points.map((point, index) => (
                        <li
                          key={index}
                          className="text-sm flex gap-3 items-center md:text-base text-[#FFFFFFAA]"
                        >
                          <FaArrowRightLong className="text-[#FF5E00] text-3xl" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ContentTransition>
              ))}
            </div>

            <div className="w-full p-4 md:p-6 lg:text-lg ">
              My approach : I&apos;m Akash Janoriya, founder of Technisum Web
              Solutions. I craft impactful websites that drive results, ensuring
              you&apos;re visible and supported, every step of the way.
            </div>
          </div>
        </section>

        <div className="text-white">
          <div className="w-full md:w-[90%] m-auto container mx-auto text-center flex flex-col items-center gap-6 md:gap-12 py-4 md:py-8 px-4 md:px-6">
            <div className="w-full m-auto rounded-xl">
              <ContentTransition
                type="fadeIn"
                duration={1.5}
                viewport={{ once: true, margin: "-100px" }}
              >
                <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-[5%] relative p-2 md:p-4 py-4 md:py-8 lg:p-8">
                  <ContentTransition
                    type="rightToLeft"
                    duration={1.2}
                    delay={0.2}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="w-full md:w-[90%] m-auto lg:w-auto flex flex-col justify-center items-center lg:items-start">
                      <h2 className="text-center lg:text-left text-xl sm:text-2xl md:text-3xl xl:text-4xl/tight font-bold mb-4 md:mb-6">
                        My Expertise
                      </h2>

                      <div className="mt-4 md:mt-6 flex flex-col gap-3 md:gap-4 wrap-break-word">
                        {expertise.map((obj, i) => (
                          <div
                            key={i}
                            className="flex flex-col gap-3 md:gap-4 border rounded-lg border-[#FFFFFF50] p-3 md:p-4 lg:p-6 text-left"
                          >
                            <div className="mt-1 text-base md:text-lg">
                              {obj.title}
                            </div>
                            <p className="text-xs md:text-sm text-[#ffffff50]">
                              {obj.desc}
                            </p>
                            <ul className="flex gap-1 md:gap-2 flex-wrap">
                              {obj.skills.map((skill, i) => (
                                <li
                                  key={i}
                                  className="bg-[#141410] text-xs md:text-sm p-1 md:p-2 px-2 md:px-4 rounded-lg"
                                >
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ContentTransition>

                  <ContentTransition
                    type="leftToRight"
                    duration={1.2}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="hidden lg:flex lg:justify-center items-center mt-6 lg:mt-0">
                      <img
                        src="./about_expertise.png"
                        className="h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:h-auto lg:max-h-none p-4 md:p-8 rounded-3xl overflow-hidden w-full object-contain"
                        alt="Expertise illustration"
                      />
                    </div>
                  </ContentTransition>
                </section>
              </ContentTransition>
            </div>
          </div>
        </div>

        <div className="text-white bg-[#1C1C16] mb-4">
          <div className="w-full md:w-[90%] m-auto container mx-auto text-center flex flex-col items-center gap-6 md:gap-12 py-6 md:py-8 px-4 md:px-6">
            <div className="w-full m-auto rounded-xl">
              <ContentTransition
                type="fadeIn"
                duration={1.5}
                viewport={{ once: true, margin: "-100px" }}
              >
                <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-[5%] relative p-2 md:p-4 py-4 md:py-8 lg:p-8">
                  {/* Images Section - Now visible on all screens but stacked on mobile */}
                  <ContentTransition
                    type="leftToRight"
                    duration={1.2}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="hidden lg:flex flex-col justify-center items-center gap-4 md:gap-6 order-1 lg:order-none">
                      <img
                        src="./about_technical1.png"
                        className="h-auto max-h-[180px] sm:max-h-[220px] md:max-h-[350px] lg:h-auto w-full object-contain p-1 md:p-2 rounded-3xl"
                        alt="Technical skills illustration"
                      />
                      <img
                        src="./about_technical1.png"
                        className="h-auto max-h-[180px] sm:max-h-[220px] md:max-h-[350px] lg:h-auto w-full object-contain p-1 md:p-2 rounded-3xl"
                        alt="Technical skills illustration"
                      />
                    </div>
                  </ContentTransition>

                  {/* Skills Content Section */}
                  <ContentTransition
                    type="rightToLeft"
                    duration={1.2}
                    delay={0.2}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="w-full md:w-[90%] m-auto lg:w-auto flex flex-col justify-center items-center lg:items-start">
                      <h2 className="text-center lg:text-left text-xl sm:text-2xl md:text-3xl xl:text-4xl/tight font-bold mb-4 md:mb-6">
                        Technical Skills
                      </h2>

                      <div className="mt-4 md:mt-6 w-full flex flex-col gap-6 md:gap-8 lg:gap-12 wrap-break-word">
                        {technicalskills.map((obj, i) => (
                          <div
                            key={i}
                            className="w-full flex flex-col gap-3 md:gap-4 rounded-lg text-left"
                          >
                            <div className="mt-1 text-base md:text-lg font-medium">
                              {obj.title}
                            </div>

                            <ul className="w-full flex flex-col gap-4 md:gap-6 flex-wrap">
                              {obj.skills.map((skill, i) => (
                                <li
                                  key={i}
                                  className="w-full flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm rounded-lg"
                                >
                                  <div className="grow flex flex-col gap-1 sm:gap-2">
                                    <span>{skill.title}</span>
                                    <div className="border-[2px] sm:border-[3px] rounded border-[#FF5E00] w-full"></div>
                                  </div>
                                  <div className="text-right sm:text-left min-w-[40px]">
                                    {skill.level}%
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ContentTransition>
                </section>
              </ContentTransition>
            </div>
          </div>
        </div>

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
