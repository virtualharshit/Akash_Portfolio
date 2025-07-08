"use client"; // Mark as Client Component since we&apos;re using hooks and interactivity

import { useEffect, useRef, useState } from "react";
// import Logo from "../assets/logo.png"; // Update the import path if needed
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";
import { VscRobot } from "react-icons/vsc";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    // Add event listener when the dropdown is visible
    if (dropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible]);

  return (
    <>
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
            aria-expanded={navbarVisible}
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
              <Link
                href="/"
                className={`block py-2 px-3 text-white uppercase rounded md:p-0 hover:underline hover:scale-105 ${
                  pathname === "/" ? "underline font-bold" : ""
                }`}
                aria-current="page"
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block py-2 px-3 text-white uppercase rounded md:p-0 hover:underline hover:scale-105 ${
                  pathname === "/about" ? "underline font-bold" : ""
                }`}
              >
                About Us
              </Link>
              {/* <li className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center justify-center text-center w-full py-2 px-3 md:p-0 text-white uppercase rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:w-auto"
                  onClick={() => setDropdownVisible(!dropdownVisible)}
                >
                  Services
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {dropdownVisible && (
                  <ul className="lg:absolute lg:top-[150%] lg:left-12 lg:-translate-x-1/2 z-10 font-normal lg:bg-white divide-y divide-gray-100 rounded-lg shadow p-4 text-sm flex flex-col gap-3 text-center text-gray-700">
                    <Link
                      href="/webdevelopment"
                      className={`flex items-center gap-2 px-2 pr-4 py-2 hover:bg-gray-400 rounded text-white lg:text-black ${
                        pathname === "/webdevelopment"
                          ? "underline font-bold"
                          : ""
                      }`}
                    >
                      <TbDeviceDesktopAnalytics className="text-xl" /> Web
                      Development
                    </Link>

                    <Link
                      href="/mobileappdevelopment"
                      className={`flex items-center gap-2 w-max px-2 pr-4 py-2 hover:bg-gray-400 rounded text-white lg:text-black ${
                        pathname === "/mobileappdevelopment"
                          ? "underline font-bold"
                          : ""
                      }`}
                    >
                      <TbDeviceMobileCode className="text-xl" />
                      Mobile App Development
                    </Link>

                    <Link
                      href="/digitalmarketing"
                      className={`flex items-center gap-2 px-2 pr-4 py-2 hover:bg-gray-400 rounded text-white lg:text-black ${
                        pathname === "/digitalmarketing"
                          ? "underline font-bold"
                          : ""
                      }`}
                    >
                      <FaGlobe className="text-xl" />
                      Digital Marketing
                    </Link>
                    <Link
                      href="/aiwebdevelopment"
                      className={`flex items-center gap-2 px-2 pr-4 py-2 hover:bg-gray-400 rounded text-white lg:text-black ${
                        pathname === "/aiwebdevelopment"
                          ? "underline font-bold"
                          : ""
                      }`}
                    >
                      <VscRobot className="text-xl" /> AI Development
                    </Link>
                    <Link
                      href="/webdesign"
                      className={`flex items-center gap-2 px-2 pr-4 py-2 hover:bg-gray-400 rounded text-white lg:text-black ${
                        pathname === "/webdesign" ? "underline font-bold" : ""
                      }`}
                    >
                      <MdOutlineDesignServices className="text-xl" /> Web Design
                    </Link>
                  </ul>
                )}
              </li> */}

              <Link
                href="/service"
                className={`block py-2 px-3 text-white uppercase rounded md:p-0 hover:underline hover:scale-105 ${
                  pathname === "/hireresources" ? "underline font-bold" : ""
                }`}
              >
                Services
              </Link>

              <Link
                href="/contact"
                className={`block py-2 px-3 text-white uppercase rounded md:p-0 hover:underline hover:scale-105 ${
                  pathname === "/career" ? "underline font-bold" : ""
                }`}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className={`flex items-center gap-2 py-2 px-6 text-sm text-white rounded bg-[#FF5E00] hover:text-black hover:bg-gray-300 hover:scale-105 mx-2 ${
                  pathname === "/contact" ? "underline font-bold" : ""
                }`}
              >
                Let&apos;s Talk <FaArrowRightLong />
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
