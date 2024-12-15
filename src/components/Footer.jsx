import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Ecoavenstra1_logo.png";
import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";

const Title = () => {
  return (
    <a href="/">
      <img className="h-12 px-4 pt-3" alt="logo" src={Logo} />
    </a>
  );
};

const Footer = () => {
  return (
    <div className="pt-10">
      <footer className="bg-[#141414] text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <Title />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-10">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase">
                  Contact Info
                </h2>
                <ul className="text-gray-400">
                  <li className="mb-4 flex items-center">
                    <CiMail className="mr-2" />
                    <a
                      href="mailto:info@ecoavenstra.com"
                      className="hover:underline"
                    >
                      info@ecoavenstra.com
                    </a>
                  </li>
                  <li className="mb-4 flex items-center">
                    <CiMail className="mr-2" />
                    <a
                      href="mailto:business@ecoavenstra.com"
                      className="hover:underline"
                    >
                      business@ecoavenstra.com
                    </a>
                  </li>
                  <li className="mb-4 flex items-center">
                    <CiPhone className="mr-2" />
                    <a href="tel:+919752505639" className="hover:underline">
                      (+91) 9752505639
                    </a>
                  </li>
                  <li className="flex items-center">
                    <CiLocationOn className="mr-2" />
                    <span>Kesri Nagar, Barapatthar, Seoni (M.P) - India</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                <ul className="text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright 2024-2025{" "}
              <a href="/" className="hover:underline">
              @ Ecoavenstra Hr Infotech Pvt Ltd
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {/* Social Media Icons can be added here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
