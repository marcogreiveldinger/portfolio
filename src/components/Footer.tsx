import React, { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div className="bg-black fixed inset-x-0 bottom-0 flex p-4 space-x-4 transition-all duration-1000 ease-in-out">
      <NavLink href="/imprint" newTab={false}>
        Imprint
      </NavLink>
      <NavLink href="/privacy-policy" newTab={false}>
        Privacy policy
      </NavLink>
      <div className="flex absolute top-0 right-0 bottom-0 p-4 space-x-4">
        <NavLink
          href="https://github.com/marcogreiveldinger/portfolio"
          newTab={true}
        >
          Github Portfolio
        </NavLink>
      </div>
    </div>
  );
};

interface NavLinkProps {
  href: string;
  newTab: boolean;
  children: React.ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ href, children, newTab }) => {
  return (
    <Link
      className="group text-gray-300 transition duration-300"
      href={href}
      target={newTab ? "_blank" : "_self"}
    >
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
      {children}
    </Link>
  );
};

export default Footer;
