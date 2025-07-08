"use client";

import React from "react";
import dynamic from "next/dynamic";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    name: "Anshul (3+ years)",
    designation: "Graphic & UI/UX Designers",
    comment:
      "Working at Technisum has allowed me to grow creatively and lead high-impact projects. The trust and freedom here push me to deliver my best every day.",
    image: "./profile_man.png",
    points: 4,
  },
  {
    name: "Afraz (1+ year)",
    designation: "Graphic & UI/UX Designers",
    comment:
      "Technisum has been a great platform to express my design vision and collaborate with a team that truly values aesthetics and innovation.",
    image: "./profile_man.png",
    points: 5,
  },
  {
    name: "Aditi (2 years)",
    designation: "Graphic & UI/UX Designers",
    comment:
      "The environment at Technisum encourages out-of-the-box thinking. I’ve refined my UI/UX skills while working on diverse, user-focused products.",
    image: "./profile_woman.png",
    points: 5,
  },
  {
    name: "Bajrangi (1.5 years)",
    designation: "Graphic & UI/UX Designers",
    comment:
      "It’s inspiring to work in a team that challenges and supports each other. Technisum is a perfect place for a designer to grow.",
    image: "./profile_man.png",
    points: 4,
  },
  {
    name: "Deepak (2+ years)",
    designation: "Web Development & Design",
    comment:
      "Technisum has given me the opportunity to work across platforms like Shopify and WordPress, all while being part of a motivated and visionary team.",
    image: "./profile_man.png",
    points: 4,
  },
  {
    name: "Govind (3+ years)",
    designation: "Web Development & Design",
    comment:
      "I’ve handled complex projects using modern tech stacks at Technisum. The collaborative culture here makes innovation a daily habit.",
    image: "./profile_man.png",
    points: 5,
  },
  {
    name: "Animesh (1.5 years)",
    designation: "Web Development & Design",
    comment:
      "As a designer, I value the creative freedom I get at Technisum. It’s helped me learn fast and contribute meaningfully to each project.",
    image: "./profile_man.png",
    points: 5,
  },
  {
    name: "Shivam (1 year)",
    designation: "Web Development & Design",
    comment:
      "I’m thankful to Technisum for the hands-on learning and real-world experience I’ve gained in web design. Every day feels like a step forward.",
    image: "./profile_shivam.jpg",
    points: 5,
  },
  {
    name: "Harshit (2 years)",
    designation: "Web Development & Design",
    comment:
      "Technisum’s trust in my abilities helped me take ownership of my work and improve as a developer. The tech stack and mentorship are top-notch.",
    image: "https://www.virtualharshit.com/virtualharshit.png",
    points: 4,
  },
  {
    name: "Isha (2 years)",
    designation: "Content & Strategy",
    comment:
      "Technisum gives content creators like me the space to craft meaningful narratives. It’s a workplace that genuinely values good writing.",
    image: "./profile_woman.png",
    points: 5,
  },
  {
    name: "Sachin (1 year)",
    designation: "Content & Strategy",
    comment:
      "From SEO blogs to campaign scripts, I’ve had the chance to write diverse content at Technisum. It’s a great learning curve!",
    image: "./profile_man.png",
    points: 5,
  },
  {
    name: "Aarohi (3 years)",
    designation: "HR & Operations",
    comment:
      "From day one, I’ve felt empowered in my role at Technisum. It’s more than just managing people—it’s about building a strong culture together.",
    image: "./profile_woman.png",
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
            <div key={index} className="px-4">
              <div className=" p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover"
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
                <p className="text-gray-600 italic mb-4 w-1/2 m-auto">
                  "{testimonial.comment}"
                </p>
              </div>
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
    </section>
  );
};

export default Testimonials;
