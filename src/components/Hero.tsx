import React from "react";
import profile from "../img/profile.png";
import cv from "../file/CV-SebastianPadilla.pdf";
import { useLanguage } from "../translate/LanguageContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HeroProps {
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const { translations } = useLanguage();
  const settings = {
    infinite: true,
    speed: 4500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <>
      {/* Contenedor Principal */}
      <section
        id={id}
        className="my-0 lg:pt-32 flex flex-col lg:flex-row lg:h-[700px] items-center justify-center overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row lg:h-[760px] items-center justify-center min-h-screen w-full">
          <div className="p-10 lg:ml-20 lg:w-1/2">
            <h1 className="text-sky-600 dark:text-sky-300 text-2xl font-bold tracking-widest leading-10">
              {translations.hero_hello}
            </h1>
            <p className="py-2 text-3xl font-bold text-slate-600 dark:text-slate-300">
              {translations.hero_name}
            </p>
            <p className="text-3xl font-bold text-sky-600 dark:text-sky-300">
              {translations.hero_subtitle}
            </p>
            <p className="mt-5 text-lg">{translations.hero_more}</p>
            <div className="py-6">
              <a
                href="https://www.instagram.com/sebastian.padilla.z/"
                target="_blank"
                className="pr-2 text-2xl hover:text-sky-600"
              >
                <i className="bi bi-instagram px-2"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sebastian-padilla-zabala-a5b86423a/"
                target="_blank"
                className="pr-2 text-2xl hover:text-sky-600"
              >
                <i className="bi bi-linkedin px-2"></i>
              </a>
              <a
                href="https://github.com/SebastianPadillaZabala"
                target="_blank"
                className="pr-2 text-2xl hover:text-sky-600"
              >
                <i className="bi bi-github px-2"></i>
              </a>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <a href="mailto:padillasebastian140@gmail.com">
                <button className="border-2 rounded border-sky-500 p-4 md:w-[250px] w-full text-lg tracking-widest hover:bg-sky-500 hover:dark:text-slate-900">
                  {translations.hero_contact_me}
                </button>
              </a>
              <a href={cv} target="_blank">
                <button className="border-2 rounded border-sky-500 p-4 w-full text-lg tracking-widest hover:bg-sky-500 hover:dark:text-slate-900">
                  {translations.hero_show_CV}
                </button>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col items-center">
            <img className="w-[270px]" src={profile} alt="profile.png" />
            <div className="w-full flex justify-center mt-5">
              <div className="max-w-screen-md w-full px-4">
                <h2 className="mb-4 text-2xl font-extrabold text-center text-slate-300">
                  Frameworks & Skills
                </h2>
                <Slider {...settings} className="w-full">
                  <div className="flex justify-center">
                    <img
                      className="h-16"
                      src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/nodejs/nodejs-original.svg"
                      alt="Logo Node.js"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      className="h-16"
                      src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/nestjs/nestjs-original.svg"
                      alt="Logo Nest.js"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      className="h-16"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                      alt="Logo React"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      className="h-16"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                      alt="Logo JS"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      className="h-16"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                      alt="Logo MySQL"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      className="h-16"
                      src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/postgresql/postgresql-original.svg"
                      alt="Logo PostgreSQL"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      className="h-16"
                      src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/git/git-original.svg"
                      alt="Logo Git"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      className="h-16"
                      src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/flutter/flutter-original.svg"
                      alt="Logo Flutter"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      className="h-16"
                      src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/postman/postman-original.svg"
                      alt="Logo Postman"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
