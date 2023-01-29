import React from "react";
import img from "../assets/images/header_image.png";
import { FingerPrintIcon } from "@heroicons/react/solid";
import { Button } from "bozynski_alina_ui_garden_build_checks";

export default function BasicInformation() {
  return (
    <section id="basic-information">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi there! I&apos;m Alina Bozynski
            <span>
              <FingerPrintIcon className="inline-block w-10 ml-3" />
            </span>
          </h1>
          <p className="mb-8 leading-relaxed">
            I am 19 years old and am currently achieving a diploma for Full
            Stack Web Development at Red River College, which will be completed
            in August 2023.
            <br className="mb-5" />I fell in love with programming when it was
            first introduced to me. I loved seeing how changing certain
            properties or expressions changed the outcome!
          </p>
          <div className="flex justify-center ml-0 pl-0">
            <Button
              className="mr-5"
              text={
                <a
                  href="#developer-setup"
                  className="inline-flex text-white border-0 focus:outline-none rounded text-lg"
                >
                  My Developer Setup
                </a>
              }
              backgroundColor="#55bd90"
            />
            <Button
              className="ml-5"
              text={
                <a
                  href="#work"
                  className="inline-flex border-0 focus:outline-none text-white rounded text-lg"
                >
                  See My Past Work
                </a>
              }
              backgroundColor="#55bd90"
            />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img alt="coding girl" src={img} />
        </div>
      </div>
    </section>
  );
}
