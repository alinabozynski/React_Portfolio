import { BadgeCheckIcon, ClipboardCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { languages } from "../data";
import { frontEnd } from "../data";
import { backEnd } from "../data";
import { tools } from "../data";

export default function Skills() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="skills" className="pt-20">
      <div className="container px-5 py-10 mx-auto">
        <div className="pb-5">
          <div className="flex flex-wrap mb-10">
            <ClipboardCheckIcon className="w-10 inline-block" />
            <h1 className="text-4xl sm:flex-wrap font-medium title-font text-white lg:pl-5">
              Skills &amp; Technologies
            </h1>
          </div>
          <div>
            <p className="mx-auto mb-2 text-center">
              Many skills (Front-End, Back-End, Frameworks/Tools, Languages)
              were acquired through the following courses within the Full Stack
              Program.
              <br className="mb-5" />
              Hover over them to see what they were all about!
            </p>
            <ul className="flex flex-wrap">
              <div className="group flex relative">
                <li className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white">
                  Web Development 1, 2 &amp; 3
                </li>
                <div className="group-hover:opacity-100 bg-green-600 rounded px-1 text-base text-white absolute top-12 opacity-0">
                  <ul className="p-5 lg:w-max sm:w-min">
                    <li className="text-black font-bold">
                      Web Development 1, 2 &amp; 3
                    </li>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>HTML5</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>CSS</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>JavaScript</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>JSON</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Cookies &amp; Sessions</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>PHP</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>MySQL</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>REST-based Python API Frameworks</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Cloud based infrastructure</li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="group flex relative">
                <li className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white">
                  Programming
                </li>
                <div className="group-hover:opacity-100 bg-green-600 rounded px-1 text-base text-white absolute top-12 opacity-0">
                  <ul className="p-5 lg:w-max sm:w-min">
                    <li className="text-black font-bold">Programming</li>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Java</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Developing, coding, testing, debugging</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>
                        Data structures such as inheritance, encapsulation, and
                        polymorphism
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="group flex relative">
                <li className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white">
                  Database Management Systems
                </li>
                <div className="group-hover:opacity-100 bg-green-600 rounded px-1 text-base text-white absolute top-12 opacity-0">
                  <ul className="p-5 lg:w-max sm:w-min">
                    <li className="text-black font-bold">
                      Database Management Systems
                    </li>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>SQL</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>DDL</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>DML</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>ERDs</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Database Table Normalization</li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="group flex relative">
                <li className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white">
                  Information Systems
                </li>
                <div className="group-hover:opacity-100 bg-green-600 rounded px-1 text-base text-white absolute top-12 opacity-0">
                  <ul className="p-5 lg:w-max sm:w-min">
                    <li className="text-black font-bold">
                      Information Systems
                    </li>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>OS interactions with device applications</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Computer hardware</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Computer networks</li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="group flex relative">
                <li className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white">
                  Project Management Fundamentals and Agile Business Analysis
                </li>
                <div className="group-hover:opacity-100 bg-green-600 rounded px-1 text-base text-white absolute top-12 opacity-0">
                  <ul className="p-5 lg:w-max sm:w-min">
                    <li className="text-black font-bold">
                      Project Management Fundamentals and Agile Business
                      Analysis
                    </li>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Project Lifecycle</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Risk Management</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Cost Management</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Work Breakdown Structures</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Agile Methodologies &amp; Documentation</li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="group flex relative">
                <li className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white">
                  OO Systems Analysis & Design
                </li>
                <div className="group-hover:opacity-100 bg-green-600 rounded px-1 text-base text-white absolute top-12 opacity-0">
                  <ul className="p-5 lg:w-max sm:w-min">
                    <li className="text-black font-bold">
                      OO Systems Analysis & Design
                    </li>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Unified Modeling Language</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Object-Oriented Systems Analysis</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Use Cases</li>
                      <li>Systems Development Life Cycle</li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="group flex relative">
                <li className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white">
                  Business Requirements Gathering & Design
                </li>
                <div className="group-hover:opacity-100 bg-green-600 rounded px-1 text-base text-white absolute top-12 opacity-0">
                  <ul className="p-5 lg:w-max sm:w-min">
                    <li className="text-black font-bold">
                      Business Requirements Gathering & Design
                    </li>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Document Development</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Design based on requirements</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Problem Solving</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Meetings</li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="group flex relative">
                <li className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white">
                  Web Security
                </li>
                <div className="group-hover:opacity-100 bg-green-600 rounded px-1 text-base text-white absolute top-12 opacity-0">
                  <ul className="p-5 lg:w-max sm:w-min">
                    <li className="text-black font-bold">Web Security</li>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Attacks (how and prevention)</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Cryptography</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Understanding exploits</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Ethical Hacking</li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="group flex relative">
                <li className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white">
                  Agile Full Stack Web Development
                </li>
                <div className="group-hover:opacity-100 bg-green-600 rounded px-1 text-base text-white absolute top-12 opacity-0">
                  <ul className="p-5 lg:w-max sm:w-min">
                    <li className="text-black font-bold">
                      Agile Full Stack Web Development
                    </li>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Back End Examination</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>E-Commerce</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Source Control</li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="group flex relative">
                <li className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white">
                  Business Systems Build and Testing
                </li>
                <div className="group-hover:opacity-100 bg-green-600 rounded px-1 text-base text-white absolute top-12 opacity-0">
                  <ul className="p-5 lg:w-max sm:w-min">
                    <li className="text-black font-bold">
                      Business Systems Build and Testing
                    </li>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Quality Assurance</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Application Deployment</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Testing against requirements</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>React JS</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Typescript</li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="group flex relative">
                <li className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white">
                  Communication Strategies (Basics, for Systems and Innovative
                  Thinking, &amp; for the Workplace)
                </li>
                <div className="group-hover:opacity-100 bg-green-600 rounded px-1 text-base text-white absolute top-12 opacity-0">
                  <ul className="p-5 lg:w-max sm:w-min">
                    <li className="text-black font-bold">
                      Communication Strategies
                    </li>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Self-Awareness</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Interpersonal Skills</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Intercultural Competence</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Innovative Solutions</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>PACT - Purpose, Audience, Context, Tone</li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="group flex relative">
                <li className="p-3 flex-none mx-auto my-2 hover:text-white">
                  Industry Project
                </li>
                <div className="group-hover:opacity-100 bg-green-600 rounded px-1 text-base text-white absolute top-12 opacity-0">
                  <ul className="p-5 lg:w-max sm:w-min">
                    <li className="text-black font-bold">Industry Project</li>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>Real-world, on-the-job experience</li>
                    </div>
                    <div className="flex">
                      <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                      <li>
                        Joined a company Dev Team in the middle of a project
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="pb-5">
          <h1 className="text-4xl font-medium title-font text-white mb-4 text-center">
            Tools
          </h1>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {tools.map((tool) => (
              <div key={tool} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {tool}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-5">
          <h1 className="text-4xl font-medium title-font text-white mb-4 text-center">
            Front-End
          </h1>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {frontEnd.map((frontEnd) => (
              <div key={frontEnd} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {frontEnd}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-5">
          <h1 className="text-4xl font-medium title-font text-white mb-4 text-center">
            Back-End
          </h1>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {backEnd.map((backEnd) => (
              <div key={backEnd} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {backEnd}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-5">
          <h1 className="text-4xl font-medium title-font text-white mb-4 text-center">
            Languages
          </h1>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {languages.map((language) => (
              <div key={language} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {language}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8 text-white">
          <p className="tracking-widest font-display p-2">
            <button
              onClick={scrollToTop}
              className="hover:text-white hover:underline p-1"
            >
              Back to Top
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
