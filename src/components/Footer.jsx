import React from "react";
import Cam from "../assets/cam.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTelegram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-footer text-gray-700 px-12 py-18">
        <div className="max-w-7xl mx-auto">
          {/* Main footer sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12 ">
            {/* ABOUT WISC */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4 underline underline-offset-8 ">
                ABOUT WISC
              </h3>
              <ul className="space-y-2">
                <li className="color-footer cursor-pointer">
                  Vision & Mission
                </li>
                <li className="color-footer cursor-pointer">
                  Modern President Message
                </li>
                <li className="color-footer cursor-pointer">WBC Campuses</li>
              </ul>
            </div>

            {/* OUR CAMPUSES */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4 underline underline-offset-8">
                OUR CAMPUSES
              </h3>
              <ul className="space-y-2">
                <li className="color-footer cursor-pointer">
                  Toul Kork Campus
                </li>
                <li className="color-footer cursor-pointer">
                  Teek Look Campus
                </li>
                <li className="color-footer cursor-pointer">
                  Cheer Amper Campus (Premium)
                </li>
              </ul>
            </div>

            {/* ADMISSION */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4 underline underline-offset-8">
                ADMISSION
              </h3>
              <ul className="space-y-2">
                <li className="color-footer cursor-pointer ">Why Choose WBC</li>
                <li className="color-footer cursor-pointer">School fee</li>
                <li className="color-footer cursor-pointer">Grading List</li>
                <li className="color-footer cursor-pointer">FAQ</li>
              </ul>
            </div>

            {/* ACCREDITATION */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4 underline underline-offset-8">
                ACCREDITATION
              </h3>
              <ul className="space-y-2">
                <li className="color-footer cursor-pointer">Kindergarten</li>
                <li className="color-footer cursor-pointer">Primary</li>
                <li className="color-footer cursor-pointer">Secondary</li>
                <li className="color-footer cursor-pointer">Advanced Level</li>
              </ul>
            </div>

            {/* NEWS & EVENT */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4 underline underline-offset-8">
                NEWS & EVENT
              </h3>
              <ul className="space-y-2">
                <li className="color-footer cursor-pointer">Photos</li>
                <li className="color-footer cursor-pointer">Videos</li>
                <li className="color-footer cursor-pointer">Blog</li>
                <li className="color-footer cursor-pointer">
                  Monthly Highlights
                </li>
              </ul>
            </div>

            {/* SCHOOL FEE */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4 underline underline-offset-8">
                SCHOOL FEE
              </h3>
              <ul className="space-y-2">
                <li className="color-footer cursor-pointer">
                  Academic years of 2024 - 2025
                </li>
              </ul>
            </div>

            {/* BEYOND THE CLASSROOM */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4 underline underline-offset-8">
                BEYOND THE CLASSROOM
              </h3>
              <ul className="space-y-2">
                <li className="color-footer cursor-pointer">Competition</li>
                <li className="color-footer cursor-pointer">
                  Extracurricular activities
                </li>
              </ul>
            </div>

            {/* WORK WITH WISC */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4 underline underline-offset-8">
                WORK WITH WISC
              </h3>
              <ul className="space-y-2">
                <li className="color-footer cursor-pointer">Positions</li>
                <li className="color-footer cursor-pointer">Remuneration</li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t-4 border-white pt-8 mt-8">
            <div className=" grid md:grid-cols-2 gap-6 justify-items-center md:justify-items-end ">
              {/* School Info */}
              <div>
                <h2 className="text-xl font-bold text-white mb-2 ">
                  WORLD INTERNATIONAL SCHOOL CAMBODIA
                </h2>
                <p className="text-yellow-500 font-medium">
                  Established since 2012
                </p>

                <p className="flex items-center gap-2 text-white mt-2">
                  <FaMapMarkerAlt size={22} />
                  No 11-13, Street 528-281, Sangkat Boeng Kok I, Khan Toul Kork,
                  Phnom Penh, Cambodia.
                </p>

                <p className="flex items-center gap-2 text-white mt-2">
                  <FaPhoneAlt />
                  017 252 800 / 087 878 280 / 086 642 741
                </p>

                <p className="flex items-center gap-2 text-white mt-2">
                  <FaEnvelope />
                  info@wisc.edu.kh
                </p>
              </div>

              {/* Accreditation Section */}
              <div className="md:text-right text-white">
                <div className=" justify-items-end">
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
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="border-gray-700  text-center">
            <div className="flex justify-center space-x-4 -mb-10 mt-10">
              <FaFacebookF
                className="text-white hover:text-white cursor-pointer"
                size={22}
              />
              <FaInstagram
                className="text-white hover:text-white cursor-pointer"
                size={22}
              />
              <FaYoutube
                className="text-white hover:text-white cursor-pointer"
                size={22}
              />
              <FaTiktok
                className="text-white hover:text-white cursor-pointer"
                size={22}
              />
              <FaTelegram
                className="text-white hover:text-white cursor-pointer"
                size={22}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-sm bg-yellow-500 text-white py-1.5 text-center">
        <p>
          © Copyright 2018 WISC. All Rights Reserved MoEYS Registration Number:
          Period of Registration: 2014 to 2018
        </p>
      </div>
    </footer>
  );
};

export default Footer;
