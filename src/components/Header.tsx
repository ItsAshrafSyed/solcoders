import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="relative">
      <header
        className="transition flex-none mx-auto w-full bg-primary/90 backdrop-blur-sm border-b-0 p-5 mt-2 z-50"
        style={{
          zIndex: 50,
        }}
      >
        <div className="mx-auto w-full md:flex md:justify-between max-w-7xl items-center z-50">
          <div className="flex justify-between">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                className="mx-auto"
                width={60}
                height={60}
              />
            </Link>

            <div className="flex items-center md:hidden">
              <button
                onClick={handleClick}
                className={`ml-1.5  text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center transition ${
                  active ? "expanded" : ""
                }`}
                aria-label="Toggle Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.75"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line
                    className="line1 transition"
                    x1="4"
                    y1="8"
                    x2="20"
                    y2="8"
                  ></line>
                  <line
                    className="line2 transition"
                    x1="4"
                    y1="16"
                    x2="20"
                    y2="16"
                  ></line>
                </svg>
              </button>
            </div>
          </div>
          <nav
            className={`items-center py-4 w-full md:w-auto  expanded text-slate-200 ${
              active ? "block expanded navbarin" : "hidden md:flex"
            }`}
            aria-label="Main navigation"
            id="menu"
          >
            <ul
              className={`flex flex-col  md:pt-0 transition md:flex-row md:self-center  w-full md:w-auto  text-xl md:text-base ${
                active ? "space-x-0 items-start" : "space-x-12 items-center"
              }`}
            >
              <li className={`${active ? "p-4" : "p-0"}`}>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-gray-400  transition duration-150 ease-in-out"
                >
                  Sponsors
                </Link>
              </li>
              <li className={`${active ? "p-4" : "p-0"}`}>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-gray-400  transition duration-150 ease-in-out"
                >
                  For Organizations
                </Link>
              </li>
              <li className={`${active ? "p-4" : "p-0"}`}>
                <a
                  className="text-gray-300 hover:text-gray-400 transition duration-150 ease-in-out"
                  href="#"
                >
                  For Contributors
                </a>
              </li>
              <li className={`${active ? "p-4" : "p-0"}`}>
                <Link
                  href="/contact"
                  className=" flex items-center bg-gradient-to-r from-[#AB4EE9] to-[#2FFAA1] text-white py-1   px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Apply
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
