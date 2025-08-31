import React from "react";
import ContentTransition from "./ContentTransition";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"], // or 500, 600, 700
});

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

const WorkingProcess = () => {
  return (
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
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-8">
            Ready to bring your online vision to life? Here&apos;s how we design
            and build websites that truly stand out:
          </h2>
        </div>
      </ContentTransition>

      <div className="lg:w-[90%] xl:w-[70%] m-auto relative grid lg:grid-cols-3  gap-8 mt-12">
        {processes.map((process, index) => (
          <div
            key={index}
            className="relative border p-6 py-8 rounded-xl border-[#FFFFFF1A] hover:border-[#FF5E00] overflow-hidden group hover:scale-105 tansition-transform duration-300"
          >
            <div className="text-xl lg:text-3xl">{process.title}</div>

            <ul className="list-disc pl-5 mt-2">
              {process?.points.map((point, index) => (
                <li key={index} className="text-sm text-[#FFFFFF80] mt-1">
                  {point}
                </li>
              ))}
            </ul>

            <div className="h-[70px] w-[70px] rounded-full bg-[#FF5E00] absolute right-0 bottom-0 translate-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
