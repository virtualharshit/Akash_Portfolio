"use client";
import { useState } from "react";
import { FaHtml5, FaStarOfLife } from "react-icons/fa";
import ContentTransition from "./ContentTransition";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"], // or 500, 600, 700
});

const LetsWorkTogether = () => {
  const [active, setactive] = useState(0);

  const sections = ["About", "Experience", "Education", "Skill"];

  const techStack = [
    { icon: <FaHtml5 className="text-orange-700" />, name: "HTML" },
  ];

  return (
    <div>
      <div className=" text-white bg-[#1C1C16]">
        <div className="w-[90%]  m-auto container  mx-auto text-center flex flex-col items-center gap-12 py-8 lg:px-6">
          <div className=" m-auto rounded-xl">
            <ContentTransition
              type="fadeIn"
              duration={1.5}
              viewport={{ once: true, margin: "-100px" }}
            >
              <section className="grid lg:grid-cols-2 items-center gap-[5%] relative p-4 py-8 lg:p-8 ">
                <ContentTransition
                  type="leftToRight"
                  duration={1.2}
                  delay={0.2}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="w-[90%] m-auto lg:w-auto flex flex-col justify-center items-center lg:items-start">
                    <div className="flex items-center justify-center my-8">
                      <div className="w-20 h-px bg-orange-500" />
                      <h2
                        className={`text-orange-500 text-lg italic mx-4  whitespace-nowrap ${caveat.className}`}
                      >
                        Need a Project?
                      </h2>
                      <div className="w-20 h-px bg-orange-500" />
                    </div>
                    <h2 className="text-center  lg:text-left text-2xl sm:text-3xl xl:text-4xl/tight font-bold mb-6">
                      Let’s Work Together. Schedule A Meeting.
                    </h2>
                    <p className="text-center lg:text-left text-base text-[#FFFFFF80]">
                      Bring your ideas to life with expert design, development,
                      and branding. Whether you need a website, mobile app, or a
                      brand identity I’m here to collaborate and deliver results
                      that matter.
                    </p>
                    <div className="mt-6 flex flex-col border-t border-[#FF5E00]  gap-4  wrap-break-word">
                      <div className=" flex gap-4 items-center border-b border-[#FFFFFF1A]  p-4 pr-20 text-left ">
                        <div className="bg-[#FF5E00] p-4 rounded-full text-black text-2xl">
                          <IoMailOutline />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="text-xs text-[#FFFFFF80]"
                          >
                            Email
                          </label>
                          <a
                            href="mailto:akashjanoriya77@gmail.com"
                            className="mt-1 block"
                          >
                            akashjanoriya77@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className=" flex gap-4 items-center border-b border-[#FFFFFF1A]  p-4 pr-20 text-left ">
                        <div className="bg-[#FF5E00] p-4 rounded-full text-black text-2xl">
                          <CiLocationOn />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="text-xs text-[#FFFFFF80]"
                          >
                            Location
                          </label>
                          <div id="email" className="mt-1">
                            India (Available Worldwide)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ContentTransition>

                <ContentTransition
                  type="leftToRight"
                  duration={1.2}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="hidden lg:flex justify-center items-center">
                    <img
                      src="./letswork.png"
                      className="h-[250px] lg:h-auto p-8"
                      alt=""
                    />
                  </div>
                </ContentTransition>
              </section>
            </ContentTransition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsWorkTogether;
