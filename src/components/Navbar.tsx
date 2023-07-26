import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 top-0 transition-all duration-1000 ease-in-out">
      <Link href="/" className="cursor-pointer">
        <div className="flex items-center ">
          <Image
            src="/mg.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-20 h-20 rounded-full"
          />
          <div className="text-white">Marco Greiveldinger</div>
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <NavLink href="/#aboutMe">About Me</NavLink>
        <NavLink href="/#projects">Projects</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <Link
          className="hover:bg-pink-500 hover:text-white active:bg-pink-600 focus-default inline-block flex-shrink-0 cursor-pointer rounded-full px-[20px] py-[10px] transition-colors bg-black text-white dark:bg-white dark:text-black text-base font-normal mt-4 md:mt-0"
          href={"mailto:hello@marco-greiveldinger.de"}
        >
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          <button>hello@marco-greiveldinger.de</button>
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
    <Link className="group text-gray-300 transition duration-300 " href={href}>
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
      {children}
    </Link>
  );
};

export default Navbar;
