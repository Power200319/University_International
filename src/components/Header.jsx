import React from "react";
import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import Cam from "../assets/cam.png";
import logo from "../assets/logoscool.png";
import cambodia from "../assets/cambodia.png";
import english from "../assets/English.png";
import { cn } from "../lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "./ui/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: <Home size={25} />, path: "/" },
    {
      name: "About Us",
      path: "/about",
      children: [
        { name: "Our School", path: "/about/school" },
        { name: "Message from Principal", path: "/about/principal" },
        { name: "Our Team", path: "/about/team" },
      ],
    },
    { name: "Admissions", path: "/admissions" },
    { name: "Accredition", path: "/accredition" },
    { name: "New & Event", path: "/new-event" },
    { name: "Beyond the classroom", path: "/beyond-the-classroom" },
    { name: "WISC Career", path: "/wisc-career" },
    { name: "Contact us", path: "/contact-us" },
  ];
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div
        className="hidden lg:flex flex-wrap items-center justify-between  md:p-1.5 text-white text-sm"
        style={{
          background: "linear-gradient(-45deg, #0066CC 34%, #F2F2F2 29%)",
        }}
      >
        <div className="text-black flex flex-wrap justify-center md:justify-start gap-4 md:gap-25 w-full md:w-auto ">
          <a
            href="mailto:samnang200319@gmail.com"
            className="flex items-center hover:text-blue-400 transition-colors ml-26"
          >
            <Mail size={20} className="mr-1" />
            <span>samnang200319@gmail.com</span>
          </a>
          <a
            href="tel:+855963488464"
            className="flex items-center hover:text-blue-400 transition-colors"
          >
            <Phone size={20} className="mr-1" />
            <span>+855 963488464</span>
          </a>
        </div>
        {/* Social & Language Selection */}
        <div className="flex items-center gap-4 md:gap-35 mt-2 md:mt-0">
          {/* Social Media Icons */}
          <div className="flex gap-3 items-center">
            <a
              href="#"
              className="hover:text-white/80 transition-colors "
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white/80 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white/80 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>

          {/* Language Selection */}
          <div className="flex items-center gap-2 text-sm mr-26">
            <div className="flex gap-2">
              <a href="#" className="text-sm">
                <img
                  src={cambodia}
                  alt="Khmer"
                  className="h-4 w-6 object-cover"
                />
              </a>
              <a href="#" className="text-sm">
                <img
                  src={english}
                  alt="English"
                  className="h-4 w-6 object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Logo */}
      <div className="hidden lg:flex items-center justify-between md:p-3">
        <div className="flex ml-25">
          <img src={logo} alt="" className="w-20" />
          <div className="grid items-center justify-items-center gap-1">
            <h1
              className=""
              style={{
                fontFamily: "Moul",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: 20,
              }}
            >
              សាលាអន្តរជាតិ​​ វើលដ៏ កម្ពុជា
            </h1>
            <h6
              className=""
              style={{ fontFamily: "oul", fontSize: 10, fontWeight: 900 }}
            >
              WORLD INTERNATIONAL SCHOOL CAMBODIA
            </h6>
            <h3
              className="tracking-[1em]"
              style={{ fontFamily: "Moul", fontSize: 10, fontWeight: 900 }}
            >
              埔 寨 世 界 国
            </h3>
          </div>
        </div>
        <div className="mr-25 justify-items-center">
          <div className="flex">
            <div className="w-15">
              <img src={Cam} alt="" />
            </div>
            <div className="">
              <div
                className=""
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Cambridge Assessment
              </div>
              <div
                className=""
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                International Education
              </div>
            </div>
          </div>
          <h2
            className="overline"
            style={{
              fontWeight: 500,
              fontSize: 16,
            }}
          >
            Cambridge International School
          </h2>
        </div>
      </div>
      {/* Desktop Navigation */}
      <div
        className="hidden lg:flex items-center space-x-1 justify-center md:p-1.5  "
        style={{ backgroundColor: "#D89D28" }}
      >
        <ul className="flex space-x-1 ">
          {navLinks.map((link) => (
            <li key={link.path} className="relative group">
              <Link
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium inline-flex items-center ",
                  location.pathname === link.path
                    ? "text-school-primary text-white "
                    : "text-amber-100 hover:text-school-primary hover:text-amber-300 text-base"
                )}
              >
                {link.name}
                {link.children && <ChevronDown size={16} className="ml-1 " />}
              </Link>
              {/* children link */}
              {link.children && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-white ring-opacity-5 transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50">
                  <div className="py-1">
                    {link.children.map((childLink) => (
                      <Link
                        key={childLink.path}
                        to={childLink.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {childLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center">
        {/* Moblie Logo */}
        <div className="lg:hidden flex items-center justify-start">
          <div className="flex ml-2">
            <img src={logo} alt="" className="w-20" />
            <div className="grid items-center justify-items-center gap-1">
              <h1
                className=""
                style={{
                  fontFamily: "Moul",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: 20,
                }}
              >
                សាលាអន្តរជាតិ​​ វើលដ៏ កម្ពុជា
              </h1>
              <h6
                className=""
                style={{ fontFamily: "oul", fontSize: 10, fontWeight: 900 }}
              >
                WORLD INTERNATIONAL SCHOOL CAMBODIA
              </h6>
              <h3
                className="tracking-[1em]"
                style={{ fontFamily: "Moul", fontSize: 10, fontWeight: 900 }}
              >
                埔 寨 世 界 国
              </h3>
            </div>
          </div>
        </div>
        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            // aria-expanded={isOpen}
            // aria-controls="mobile-menu"
            className="p-2 rounded-md text-gray-700  focus:outline-none hover:text-red-500"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          {navLinks.map((link) => (
            <div key={link.path}>
              <Link
                to={link.path}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path
                    ? " text-red-500"
                    : "text-gray-700 hover:text-red-500 hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
              {link.children && (
                <div className="pl-4 space-y-1">
                  {link.children.map((childLink) => (
                    <Link
                      key={childLink.path}
                      to={childLink.path}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600  hover:bg-gray-50 hover:text-red-500"
                    >
                      {childLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Button className="w-full justify-center bg-red-500">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
