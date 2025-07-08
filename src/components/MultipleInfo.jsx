"use client";
import { useState } from "react";
import { FaHtml5, FaStarOfLife } from "react-icons/fa";
import ContentTransition from "./ContentTransition";
import Link from "next/link";

const MultipleInfo = () => {
  const [active, setactive] = useState(0);

  const sections = ["About", "Experience", "Education", "Skill"];

  const techStack = [
    { icon: <FaHtml5 className="text-orange-700" />, name: "HTML" },
  ];

  return (
    <div id="about">
      <div className=" text-white ">
        <div className="w-[90%] md:w-[80%]  m-auto container  mx-auto text-center flex flex-col items-center gap-12 py-16 px-6">
          <FaStarOfLife className="text-3xl" />
          <h2 className="md:text-3xl ">
            I&apos;m a Creative Professional with a Passion htmlFor Design.
            Currently based in India, I collaborate with global clients to
            transhtmlForm ideas into powerful digital experiences. I specialize
            in UI/UX Design, Graphic Design, Branding, and Full-Stack Web
            Development. My focus is on building meaningful, user-centered
            solutions that not only look great but also drive real results and
            provide measurable value.
          </h2>
          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {sections.map((section, index) => (
              <div
                key={index}
                onClick={() => setactive(index)}
                className={` p-2 lg:p-4 px-8 uppercase rounded  ${
                  active === index ? "bg-[#FF5E00] font-bold" : "bg-[#323131] "
                }`}
              >
                {section}
              </div>
            ))}
          </div>

          <div className="relative flex">
            {/* <div className="absolute left-[50%] -translate-x-1/2 w-[calc(100%-150px)] h-1 bg-white border-2 border-white"></div> */}

            <div className=" m-auto bg-[#262625] rounded-xl">
              <ContentTransition
                type="fadeIn"
                duration={1.5}
                viewport={{ once: true, margin: "-100px" }}
              >
                <section className="grid lg:grid-cols-2 items-center gap-[5%] relative p-4 py-8 lg:p-8 ">
                  <ContentTransition
                    type="leftToRight"
                    duration={1.2}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="hidden lg:flex justify-center items-center">
                      <img
                        src="./home_personalinfo.png"
                        className="h-[250px] lg:h-auto p-8"
                        alt=""
                      />
                    </div>
                  </ContentTransition>
                  <ContentTransition
                    type="rightToLeft"
                    duration={1.2}
                    delay={0.2}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="w-[90%] m-auto lg:w-auto flex flex-col justify-center items-center lg:items-start">
                      <h2 className="text-center uppercase lg:text-left text-2xl sm:text-3xl xl:text-4xl/tight font-bold mb-6">
                        Personal Info
                      </h2>
                      <p className="text-center lg:text-left text-base text-[#FFFFFF80]">
                        I&apos;m passionate about solving real-world problems
                        through intuitive design and scalable development.
                        Whether you&apos;re a startup or an established
                        business, I can help you deliver seamless digital
                        experiences.
                      </p>
                      <div className="mt-6 grid grid-cols-2 gap-4 w-full wrap-break-word">
                        <div className="bg-[#141410] p-4 text-left rounded-xl">
                          <label
                            htmlFor="email"
                            className="text-xs text-[#FFFFFF80]"
                          >
                            Email
                          </label>
                          <div id="email" className="mt-2">
                            akash@technisum.com
                          </div>
                        </div>
                        <div className="bg-[#141410] p-4 text-left rounded-xl">
                          <label
                            htmlFor="email"
                            className="text-xs text-[#FFFFFF80]"
                          >
                            Experience
                          </label>
                          <div id="email" className="mt-2">
                            4+ Years
                          </div>
                        </div>
                        <div className="bg-[#141410] p-4 text-left rounded-xl">
                          <label
                            htmlFor="email"
                            className="text-xs text-[#FFFFFF80]"
                          >
                            Location
                          </label>
                          <div id="email" className="mt-2">
                            India
                          </div>
                        </div>
                        <div className="bg-[#141410] p-4 text-left rounded-xl">
                          <label
                            htmlFor="email"
                            className="text-xs text-[#FFFFFF80]"
                          >
                            Languages
                          </label>
                          <div id="email" className="mt-2">
                            English, Hindi
                          </div>
                        </div>
                      </div>
                    </div>
                  </ContentTransition>
                </section>
              </ContentTransition>
            </div>
          </div>

          {/* <div className="flex gap-2 mb-8">
            {sections.map((skill, index) => (
              <div
                onClick={() => setactive(index)}
                className={` p-1 px-4 lg:px-8 rounded-full  ${
                  active === index
                    ? "bg-white text-black font-bold"
                    : "bg-[#323131]"
                }`}
              ></div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MultipleInfo;
