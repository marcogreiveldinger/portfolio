import React, { ReactElement } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function HomeSection(): ReactElement {
  return (
    <section id="home" className="flex items-center py-16 ">
      <div className="w-1/2">
        <h1 className="text-6xl text-white font-bold mb-4">
          Marco Greiveldinger
        </h1>
        <p className="text-white font-mono">
          I help you to develop your passion projects that you always dreamed
          of.
        </p>
        <p className="text-white font-mono">
          Available for freelance work. Drop me a message!
        </p>
        <div className="flex space-x-4 mt-4">
          <Link
            href="https://github.com/marcogreiveldinger"
            target="_blank"
            passHref
          >
            <button
              type="button"
              className="bg-transparent rounded-full hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#ffffff" }}
                className="fa-2xl"
              />
            </button>
          </Link>
          <Link
            href="https://linkedin.com/in/marco-greiveldinger"
            target="_blank"
            passHref
          >
            <button
              type="button"
              className="bg-transparent rounded-full hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#ffffff" }}
                className="fa-2xl"
              />
            </button>
          </Link>{" "}
          <Link
            href="mailto:hello@marco-greiveldinger.de"
            target="_blank"
            passHref
          >
            <button
              type="button"
              className="bg-transparent rounded-full hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#ffffff" }}
                className="fa-2xl"
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 flex justify-center mt-10">
        <Image
          src="/avatar.png"
          className="rounded-full w-64 h-64"
          alt="Marco Greiveldinger"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </section>
  );
}

export default HomeSection;
