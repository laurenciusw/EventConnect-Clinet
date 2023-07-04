import React from "react";
import logo from "../assets/e-connect-logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center">
          <img src={logo} className="mr-3 w-25 h-20" alt="Flowbite Logo" />
        </Link>
        <div className="flex md:order-2">
          <ul className="flex flex-row font-medium p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            <li>
              {localStorage.access_token &&
              localStorage.role === "Organizer" ? (
                <Link
                  to={"/dashboard"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Dashboard
                </Link>
              ) : (
                ""
              )}
            </li>
            {!localStorage.access_token ? (
              <>
                <li>
                  <Link
                    to={"/register"}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    aria-current="page"
                  >
                    Sign
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/login"}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                  >
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to={""}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link
                to={"/"}
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                About
              </Link>
            </li>
            <li>
              {localStorage.access_token &&
              localStorage.role === "Volunteer" ? (
                <Link
                  to={"/myevents"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  My Events
                </Link>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
