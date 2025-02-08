import React from "react";
import { useLanguage } from "../translate/LanguageContext";

interface FooterProps {
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  const { translations } = useLanguage();

  return (
    <footer className="flex flex-col items-center justify-between p-16 bg-white dark:bg-slate-900 sm:flex-row">
      <a
        href="#hero"
        className="self-center tracking-loose text-xl font-semibold text-sky-600 transition-colors duration-300 dark:text-sky-300"
      >
        Portafolio
      </a>

      <p className="text-sm text-slate-600 dark:text-slate-300">
        By Padilla Sebastian-2025.
      </p>

      <div className="flex -mx-2">
        <a
          href="https://www.instagram.com/sebastian.padilla.z/"
          target="_blank"
          className="pr-2 text-2xl
                        hover:text-sky-600"
        >
          <i className="bi bi-instagram px-2"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sebastian-padilla-zabala-a5b86423a/"
          target="_blank"
          className="pr-2 text-2xl
                        hover:text-sky-600"
        >
          <i className="bi bi-linkedin px-2"></i>
        </a>
        <a
          href="https://github.com/SebastianPadillaZabala"
          target="_blank"
          className="pr-2 text-2xl
                        hover:text-sky-600"
        >
          <i className="bi bi-github px-2"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
