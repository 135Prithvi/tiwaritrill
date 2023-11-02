"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher'


export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  function NavItem({ href, children }: { href: string; children: any }) {
    const activeLinkClass = 'underline text-[#7A8CD8]';
    const isActive = href === pathname;
    const linkClassName = isActive ? activeLinkClass : '';

    return (
      <li>
        <Link href={href} passHref>
          <span
            className={`${linkClassName}  hover:text-[#4E60B0] transition-all duration-700 ease-in-out cursor-pointer`}
          >
            {children}
          </span>
        </Link>
      </li>
    );
  }

  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-semibold">
          My Portfolio
        </a>

        <div className="md:hidden">
          <ThemeSwitcher />
          <button
            onClick={toggleMenu}
            className=" hover:text-blue-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 transition-transform duration-300 transform"
              style={{
                transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0)',
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div
          className={`items-center z-50 top-0 right-0 absolute w-full origin-top md:origin-center grid gap-y-6 bg-background text-2xl h-4/5 md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'
            }`}
          style={{
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          }}
        >
          <div className="mx-auto md:mx-0 space-y-16 md:space-y-0">
            <div className="flex items-center justify-center">
              <button
                onClick={toggleMenu}
                className=" hover:text-blue-200 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-16 w-16 transition-transform duration-300 transform"
                  style={{
                    transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0)',
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </div>
        </div>
        <ul className="space-x-4 hidden md:flex items-center">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
          <ThemeSwitcher />
        </ul>
      </div>
    </nav>
  );
}
