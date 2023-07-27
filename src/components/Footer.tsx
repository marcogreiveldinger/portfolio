import React, { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div className="bg-black fixed inset-x-0 bottom-0 flex items-center p-4 space-x-4 transition-all duration-1000 ease-in-out">
      <NavLink href="/imprint">Imprint</NavLink>
      <NavLink href="/privacy-policy">Privacy policy</NavLink>
    </div>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link className="group text-gray-300 transition duration-300" href={href}>
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
      {children}
    </Link>
  );
};

export default Footer;
