"use client";

import React from "react";

const InfiniteCompaniesScroll = () => {
  const companies = [
    "./company1.png",
    "./company2.png",
    "./company3.png",
    "./company4.png",
  ];

  // Duplicate the array for seamless looping (3 times for better continuity)
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <div className="relative overflow-hidden py-4 w-full">
      <div className="flex items-center">
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-8 md:gap-12 items-center whitespace-nowrap"
            style={{
              animation: "infinite-scroll 20s linear infinite",
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`company-${index}`}
                className="inline-flex items-center flex-shrink-0"
              >
                <Image
                  src={company}
                  alt="Company logo"
                  className="h-8 md:h-10 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes infinite-scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default InfiniteCompaniesScroll;
