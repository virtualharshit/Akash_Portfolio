import React from "react";
import ContentTransition from "./ContentTransition";
import { Caveat } from "next/font/google";
import { MdArrowOutward } from "react-icons/md";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"], // or 500, 600, 700
});

const Services = () => {
  const services = [
    {
      title: "Graphic & Illustration Design ",
      category: "Design",
      subtitle: "Creative Graphics and Illustrations That Speak for Your Brand",
      desc: "I craft visually compelling designs tailored to communicate your brand story effectively. From custom illustrations to striking marketing materials, I ensure every graphic leaves a lasting impression.",
      url: "https://www.behance.net/gallery/233231139/UIUX-Designs",
    },
    {
      title: "UI/UX Design",
      category: "Design",
      subtitle: "Intuitive and Engaging Interfaces for Web and Mobile Apps",
      desc: "User experience is at the heart of every digital product. I design clean, user-friendly interfaces that keep your audience engaged and make your product easy to navigate and enjoyable to use.",
      url: "",
      url: "https://www.behance.net/gallery/233231139/UIUX-Designs",
    },
    {
      title: "Web Design & Development",
      category: "Web",
      subtitle:
        "Fully Responsive and High-Performing Websites Built with Modern Tech",
      desc: " From landing pages to full-scale web platforms, I develop websites that are fast, secure, mobile-friendly, and tailored to meet your business objectives using the latest technologies.",
      url: "https://www.behance.net/gallery/233222815/BOLD-Capital",
    },
    {
      title: "Mobile App Design",
      category: "App",
      subtitle: "Pixel-Perfect and User-Friendly App Interfaces",
      desc: "I design mobile applications that are intuitive, consistent, and tailored for both iOS and Android platforms — ensuring your app not only looks great but functions flawlessly.",
      url: "https://www.behance.net/gallery/233059739/Mniami-Food-Delivery-App",
    },
  ];

  return (
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
              <div className="text-xl lg:text-3xl mt-2"> {project.title}</div>
            </div>
            <div className="flex justify-end items-center lg:hidden">
              <MdArrowOutward className="bg-[#262625] text-white hover:bg-[#FF5E00] hover:text-black text-lg w-10 h-10 p-2 " />
            </div>
          </div>

          <div>
            <div className="text-sm ">{project.subtitle}</div>
            <div className="text-sm text-[#FFFFFF80] mt-2"> {project.desc}</div>
          </div>
          <a
            href={project.url}
            target="_blank"
            className="hidden lg:flex justify-end items-center"
          >
            <MdArrowOutward className="bg-[#262625] text-white hover:bg-[#FF5E00] hover:text-black text-lg w-10 h-10 p-2 " />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Services;
