import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 top-0 transition-all duration-1000 ease-in-out">
      <Link href="/" className="cursor-pointer">
        <div className="flex items-center">
          <Image
            src="/mg.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-20 h-20 rounded-full invert dark:invert-0"
          />
          <div className="hidden sm:flex">Marco Greiveldinger</div>
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <NavLink href="/#aboutMe">About Me</NavLink>
        <NavLink href="/#projects">Projects</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <Link
          className="hover:bg-pink-500 hover:text-white active:bg-pink-600 focus-default cursor-pointer rounded-full px-[20px] py-[10px] transition-colors bg-black text-white dark:bg-white dark:text-black text-base font-normal"
          href={"mailto:hello@marco-greiveldinger.de"}
        >
          <p className="hidden md:block">hello@marco-greiveldinger.de</p>
          <p className="block md:hidden">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000" }} />
          </p>
        </Link>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link className="group transition duration-300 " href={href}>
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
      {children}
    </Link>
  );
};

export default Navbar;
