import React from "react";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faMobile,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white font-bold text-center">Projects</h2>
        <div className="flex space-x-4 mt-4">
          <div className="text-center">
            <Link
              href="https://youtube.com/@techwithmarco?sub_confirmation=1"
              target="_blank"
              passHref
            >
              <button
                type="button"
                className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-black hover:bg-gray-600 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-400"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ color: "#FF0000" }}
                  className="fa-2xl w-8 h-8"
                />
              </button>
            </Link>
            <p className="mt-2 text-white italic">Tech with Marco </p>
            <p className="mt-2 text-white italic">(YouTube)</p>
          </div>
          <div className="text-center">
            <Link href="https://techwithmarco.com" target="_blank" passHref>
              <button
                type="button"
                className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-black hover:bg-gray-600 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-400"
              >
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  className="fa-2xl w-8 h-8"
                />
              </button>
            </Link>
            <p className="mt-2 text-white italic">Tech with Marco</p>
            <p className="mt-2 text-white italic">(Website)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
