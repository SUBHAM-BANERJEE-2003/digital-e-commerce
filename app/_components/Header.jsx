'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import dynamic from 'next/dynamic'
 
const ThemeSwitch = dynamic(() => import('../_components/ThemeSwitch'), { ssr: false })

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navitems = [
    { title: "Home", path: "/" },
    { title: "Explore", path: "/courses" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
    { title: "Pricings", path: "/pricing" },
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="p-2 shadow-lg">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <Image src="/logo.svg" alt="logo" width={80} height={100}/> <span className="text-primary font-semibold">NextGen Courses</span>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
            <Link href="/" className="text-gray-500 transition hover:text-gray-500/75"> 
                  Home
              </Link>
            </li>

           
            <li>
              <Link href="/courses" className="text-gray-500 transition hover:text-gray-500/75"> 
                  Explore
              </Link>
            </li>
            
              <li>
              <Link href="/about" className="text-gray-500 transition hover:text-gray-500/75"> 
                  About Us
              </Link>
            </li>

            <li>
            <Link href="/contact" className="text-gray-500 transition hover:text-gray-500/75"> 
                  Contact Us
              </Link>
            </li>

            <li>
              <Link href="/pricing" className="text-gray-500 transition hover:text-gray-500/75"> 
                Pricings 
              </Link>
            </li>

          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <Link
            className="rounded-md bg-primary px-5 py-2.5 text-sm hover:bg-blue-700 font-medium text-white shadow"
            href="/login"
          >
            Login
          </Link>

          <div className="hidden sm:flex">
            <Link
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary hover:bg-blue-700 hover:text-white"
              href="/register"
            >
              Register
            </Link>
          </div>
          <ThemeSwitch />
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        </div>
      </div>
      </div>
      <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
            <nav aria-label="Global" className="p-2">
              <ul className="flex flex-col md:flex-row items-center gap-6 text-sm lg:hidden">
                {navitems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.path} className="transition hover:text-gray-500/75">
                      {item.title}
                    </Link>
                  </li>
                ))}
                <div className="flex items-center gap-4">
        <div className="sm:grid sm:grid-cols-2 sm:gap-4">
          <Link
            className="rounded-md bg-primary px-5 py-2.5 text-sm hover:bg-blue-700 font-medium text-white shadow"
            href="/login"
          >
            Login
          </Link>

          <div className="sm:flex ml-32 mt-[-20px]">
            <Link
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary hover:bg-blue-700 hover:text-white"
              href="/register"
            >
              Register
            </Link>
          </div>
        </div>
        </div>
              </ul>
            </nav>
          </div>
</header>
  )
}

export default Header
