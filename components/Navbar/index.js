import { useState } from "react";
import Container from "../Container";
import Link from "next/link";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);
  const dropdownList = [
    { text: "Internet", href: "#" },
    { text: "Books", href: "#" },
    { text: "Open Source", href: "#" },
  ];

  return (
    <nav className="py-10 lg:mb-12">
      <Container>
        <div className="flex flex-row items-center">
          <div className="lg:hidden w-3/12">
            <button type="button" onClick={() => setOffcanvas(!offcanvas)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M3 12H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="w-6/12 lg:w-2/12 lg:flex lg:justify-center">
            <Link href="/" passHref>
              <a
                type="button"
                className="flex items-center justify-center space-x-4 lg:justify-start"
              >
                <div className="w-10 h-10 bg-sky-600 flex flex-row justify-center items-center rounded-lg shadow-2xl">
                  <span className="font-extrabold text-sm">BW</span>
                </div>
                <span className="font-semibold">BlogWeb</span>
              </a>
            </Link>
          </div>
          {search ? (
            ""
          ) : (
            <div className="w-3/12 text-right lg:hidden">
              <button onClick={() => setSearch(!search)}>
                <svg
                  className="inline-block"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4">
                    <path
                      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 21L16.65 16.65"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
          )}

          <div
            className={`w-full z-10 lg:w-7/12 bg-slate-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ${
              offcanvas ? "left-0" : "-left-full"
            }`}
          >
            <button
              type="button"
              className="absolute top-10 right-10 lg:hidden"
              onClick={() => setOffcanvas(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <ul className="flex flex-col lg:flex-row lg:space-x-14 lg:items-center lg:justify-center space-y-4 lg:space-y-0">
              <li>
                <Link href="#" passHref>
                  <a className="hover:text-sky-500">UI Design</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a className="hover:text-sky-500">Front-end</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a className="hover:text-sky-500">Back-end</a>
                </Link>
              </li>
              <li className="relative">
                <a
                  onClick={() => setDropdown(!dropdown)}
                  className="flex items-center cursor-pointer hover:text-sky-500"
                >
                  Lainnya
                  <svg
                    className="ml-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {dropdown && (
                  <ul className="absolute w-[200px] bg-slate-800 rounded-xl shadow-2xl mt-4">
                    {dropdownList.map((value, index) => (
                      <li
                        key={index}
                        className="border-b border-white/5 last:border-0"
                      >
                        <Link href={value.href}>
                          <a className="flex py-3 px-6 hover:bg-slate-700/60">
                            {value.text}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div
            className={`lg:w-3/12 absolute lg:static lg:flex lg:justify-center w-full left-0 px-10 lg:px-0 transition-all ${
              search ? "top-10" : "-top-40"
            }`}
          >
            <button
              onClick={() => setSearch(false)}
              className="absolute top-3 right-14 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search ..."
              className="bg-slate-700 px-6 py-3 lg:rounded-full rounded-lg w-60"
            />
          </div>
        </div>
      </Container>
    </nav>
  );
}
