"use client";

import React from "react";
import { FaStarOfLife } from "react-icons/fa6";

const InfiniteSkillsScroll = () => {
  const companies = [
    "Website Design & Logo",
    "Mobile Application Logo",
    "Business Branding",
    "UI/UX Mobile Design",
  ];

  // Duplicate for seamless looping
  const duplicatedSkills = [...companies, ...companies];

  return (
    <div className="relative overflow-hidden py-4 bg-[#FF5E00] text-white w-full">
      <div className="flex items-center">
        {/* Scrolling container */}
        <div className="relative flex-1 overflow-hidden">
          {/* Animate using Tailwind's animate-[keyframes] with inline keyframes */}
          <div
            className="whitespace-nowrap flex items-center"
            style={{
              animation: "infinite-scroll 25s linear infinite",
              display: "inline-flex",
            }}
          >
            {duplicatedSkills.map((company, index) => (
              <div
                key={`${company}-${index}`}
                className=" text-2xl font-medium inline-flex items-center"
              >
                {company}
                {index < duplicatedSkills.length - 1 && (
                  <span className="mx-8 ">
                    <FaStarOfLife />
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Define keyframes directly in style tag */}
          <style jsx>{`
            @keyframes infinite-scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default InfiniteSkillsScroll;
