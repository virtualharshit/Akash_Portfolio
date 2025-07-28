"use client";

import React from "react";
import dynamic from "next/dynamic";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfiniteCompaniesScroll from "./InfiniteCompaniesScroll";

// Dynamically import Slider to avoid SSR issues
// const Slider = dynamic(() => import("react-slick"), { ssr: false });

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const careerTestimonials = [
  {
    name: "Mark Henderson",
    designation: "VP of Product, DataFlow SaaS",
    comment:
      "Akash redesigned our B2B dashboard in 6 weeks – our power users now complete tasks 47% faster. He doesn’t just ‘make it pretty’ – he engineers revenue.",
    image: "./testmonial1.png",
    points: 5,
  },
  {
    name: "Priya Shah",
    designation: "CEO, LuxeCart Collective",
    comment:
      "After 3 failed redesigns, Akash found UX flaws costing us $18K/month. His checkout flow slashed cart abandonment by 61% – pure profit.",
    image: "./testmonial2.png",
    points: 5,
  },
  {
    name: "Dr. James Rivera",
    designation: "CTO, VitalCare HealthTech",
    comment:
      "Akash made our app usable for seniors – 83% retention rate in 65+ users. His accessibility-first approach isn’t ethical – it’s smart business.",
    image: "./testmonial3.png",
    points: 5,
  },
  {
    name: "Ryan Chen",
    designation: "Founder & CEO, NeoLogix AI",
    comment:
      "Akash delivered a pitch-ready prototype in 5 days that secured our $500K seed round. Investors called it ‘the most user-obsessed UX we’ve seen.",
    image: "./testmonial4.png",
    points: 5,
  },
  {
    name: "Elena Dubois",
    designation: "Head of CX, SwiftCapital FinTech",
    comment:
      "He transformed our 5-star rating from 3.2 to 4.8 in 90 days. How? By cutting support tickets by 72% with intuitive UI patterns. ROI: 4x.",
    image: "./testmonial5.png",
    points: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="p-8 py-[6rem] mt-6">
      {/* Your existing header content */}
      <div className="lg:w-1/2 m-auto flex flex-col items-center gap-2 text-center">
        <div className="flex items-center justify-center my-8">
          <div className="w-12 h-px bg-orange-500" />
          <h2 className="text-orange-500 text-2xl italic mx-4 whitespace-nowrap">
            Testimonial
          </h2>
          <div className="w-12 h-px bg-orange-500" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          Happy Words From Happy Customer
        </h2>
      </div>

      {/* Slider Container */}
      <div className="lg:w-[90%] xl:w-[70%] m-auto py-8">
        <Slider {...settings}>
          {careerTestimonials.map((testimonial, index) => (
            <div key={index} className=" p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-40 h-40 rounded-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.designation}</p>
              {/* Star Rating */}
              <div className="flex justify-center my-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.points
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 italic mb-4 lg:w-1/2 m-auto">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Your existing footer content */}
      <div className="lg:w-1/2 m-auto flex flex-col items-center gap-2 text-center my-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          More than 100+ companies trusted us worldwide
        </h2>
      </div>
      <InfiniteCompaniesScroll />
    </section>
  );
};

export default Testimonials;
