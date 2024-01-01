// "use client"
import { useState } from 'react';
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-700 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">

          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center" passHref>              
              <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2"/>
              <span className="font-bold text-xl">RUBIX</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button 
              type="button" 
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              {/* Icon for Menu Button */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

          {/* Links for large screens */}
          <div className={`${isOpen ? 'block' : 'hidden'} absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}>
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img src="../images/logo.png" alt="Logo" className="h-8 w-auto"/>
                  </div>
                  <div className="-mr-2">
                    <button 
                      type="button" 
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      {/* Icon for Close Button */}
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {/* Add your mobile nav links here */}
                    {/* Example: */}
                    <Link href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" passHref>
                      Home
                    </Link>

                    <Link href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" passHref>
                      Features
                    </Link>

                    <Link href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" passHref>
                      How It Works
                    </Link>

                    <Link href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" passHref>
                      FAQs
                    </Link>
                    {/* Repeat for other links */}
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-6 flex-grow">
            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900" passHref>
              Home
            </Link>

            <Link href="/features" className="text-base font-medium text-gray-500 hover:text-gray-900" passHref>
              Features
            </Link>

            <Link href="/how" className="text-base font-medium text-gray-500 hover:text-gray-900" passHref>
              How It Works
            </Link>

            <Link href="/faqs" className="text-base font-medium text-gray-500 hover:text-gray-900" passHref>
              FAQs
            </Link>
            {/* Repeat for other links */}
            
            <Button as="a">
              <Link href="/login" passHref>
                Sign In
              </Link>
            </Button>

            <Button as="a">
              <Link href="/signup" passHref>
                Sign Up
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
