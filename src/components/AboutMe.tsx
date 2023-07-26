import React from "react";

const AboutMeSection: React.FC = () => {
  return (
    <section id="aboutMe" className="flex items-center py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white font-bold mb-4">About Me</h2>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 text-white font-mono leading-loose">
            <p>
              I am a software developer with a love for coding and
              problem-solving and try to follow a DevOps mindset. Currently, I
              am on an exciting journey, traveling while creating innovative
              solutions through technology. From a young age, I was fascinated
              by the power of technology and how it can solve complex problems
              with just a few lines of code. This passion led me to become a
              software developer, where I thrive on unraveling puzzles and
              finding creative solutions.
            </p>
          </div>
          <div className="w-full md:w-1/2 font-mono leading-loose">
            <p>
              I specialize in DevOps, automating processes to increase
              efficiency and reliability. Automation is my mantra, and I apply
              it to every aspect of development, deployment, and maintenance.
              Sports and technology are my passions, and I am always eager to
              explore new tools and technologies. I stay up-to-date with
              emerging frameworks, AI advancements, and cloud computing,
              constantly pushing boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
