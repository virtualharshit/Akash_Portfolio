"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  // Initialize navbarVisible as false consistently
  const [navbarVisible, setNavbarVisible] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    if (dropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible]);

  // Close navbar when route changes (for mobile)
  useEffect(() => {
    setNavbarVisible(false);
  }, [pathname]);

  return (
    <nav className="bg-black w-full border-gray-200">
      <div className="w-[95%] xl:w-[90%] flex flex-wrap gap-8 lg:gap-0 items-center justify-between mx-auto p-4 py-8">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img src={Logo.src} className="h-8 lg:h-11" alt="Flowbite Logo" /> */}
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded={navbarVisible ? "true" : "false"}
          onClick={() => setNavbarVisible(!navbarVisible)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            navbarVisible ? "block" : "hidden"
          } w-full h-screen lg:h-auto lg:block lg:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col items-center font-medium mt-4 rounded-lg lg:flex-row gap-4 xl:gap-8 md:border-0 text-white text-sm xl:text-base text-center">
            <li>
              <a
                href="/"
                className={`block py-2 px-3 text-white uppercase rounded md:p-0 hover:underline hover:scale-105 ${
                  pathname === "/" ? "underline font-bold" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`block py-2 px-3 text-white uppercase rounded md:p-0 hover:underline hover:scale-105 ${
                  pathname === "/about" ? "underline font-bold" : ""
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/service"
                className={`block py-2 px-3 text-white uppercase rounded md:p-0 hover:underline hover:scale-105 ${
                  pathname === "/service" ? "underline font-bold" : ""
                }`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`block py-2 px-3 text-white uppercase rounded md:p-0 hover:underline hover:scale-105 ${
                  pathname === "/contact" ? "underline font-bold" : ""
                }`}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`flex items-center gap-2 py-2 px-6 text-sm text-white rounded bg-[#FF5E00] hover:text-black hover:bg-gray-300 hover:scale-105 mx-2 ${
                  pathname === "/contact" ? "underline font-bold" : ""
                }`}
              >
                Let&apos;s Talk <FaArrowRightLong />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
