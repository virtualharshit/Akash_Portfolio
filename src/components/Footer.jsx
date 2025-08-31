import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/ajanoriya",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/akash_janoriya",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/akashjanoriya",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/akash-janoriya77/",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:w-[90%] lg:w-[80%] m-auto">
      {/* Hero Section */}
      <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl border border-[#FFFFFF1A] rounded-2xl text-center p-6 sm:p-8 md:p-10 lg:p-12 my-8 sm:my-12 md:my-14 lg:my-16">
        Get In Touch
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-[60%_40%] my-8 sm:my-10 md:my-12 gap-8">
        <div className="order-2 lg:order-1">
          <div className="text-base sm:text-lg md:text-xl mb-4 w-full xl:w-[70%]">
            Drop me a message anytime — I&apos;m just one click away!
          </div>
          <a
            href="mailto:akashjanoriya77@gmail.com"
            className="text-xl sm:text-2xl md:text-3xl underline mb-2"
          >
            akashjanoriya77@gmail.com
          </a>
          <div className="text-xl sm:text-2xl md:text-3xl underline">
            +91 88711 82688
          </div>
        </div>

        {/* Social Links */}
        <div className="order-1 lg:order-2 grid grid-cols-2 grid-rows-2 gap-3 p-2 h-fit">
          {socials.map((platform, i) => (
            <a
              href={platform.url}
              target="_blank"
              key={i}
              className="bg-[#FF5D00] hover:scale-105  p-2 sm:p-3 flex items-center justify-between gap-2 rounded text-sm sm:text-base"
            >
              {platform.name} <FaArrowRight className="text-xs sm:text-sm" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between border-t border-[#FFFFFF1A] py-6 sm:py-8 md:py-10 lg:py-12 px-2 gap-4 sm:gap-0">
        <div className="text-xs sm:text-sm">
          Copyright © 2025 <span className="text-[#FF5E00]">Portfolio</span>.
          All rights reserved.
        </div>
        <ul className="flex gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm">
          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
