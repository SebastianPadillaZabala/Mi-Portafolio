import React, { useState, useEffect } from "react";
import { useLanguage } from "../translate/LanguageContext";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "ES",
    name: "Español",
    icon: "https://flagcdn.com/60x45/es.png",
  });
  const { setLanguage, translations } = useLanguage();

  // Define el tipo de los idiomas como un array de objetos con un código específico ('ES' o 'EN')
  const languages = [
    { code: "ES", name: "Español", icon: "https://flagcdn.com/60x45/es.png" },
    { code: "EN", name: "English", icon: "https://flagcdn.com/60x45/us.png" },
  ] as const; // Usamos `as const` para asegurarnos de que 'code' sea solo 'ES' o 'EN'

  const handleLanguageChange = (language: (typeof languages)[number]) => {
    setSelectedLanguage(language);
    setLanguageOpen(false);
    setLanguage(language.code);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      role="navigation"
      className={`w-full h-auto fixed top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-slate-900" : "bg-transparent"
      }`}
    >
      <div className="mx-auto container px-6 py-2 xl:py-0">
        <div className="flex items-center sm:justify-end md:justify-center">
          <div className="flex">
            <div className="hidden xl:flex md:mr-6 xl:mr-16">
              <a
                href="#hero"
                className="border-b-2 border-transparent flex px-5 items-center py-6 text-xl text-white hover:text-sky-600"
              >
                {translations.who_am_i}
              </a>
              <a
                href="#experience"
                className="border-b-2 border-transparent flex px-5 items-center py-6 text-xl text-white hover:text-sky-600"
              >
                {translations.experience}
              </a>
              <a
                href="#contactme"
                className="border-b-2 border-transparent flex px-5 items-center py-6 text-xl text-white hover:text-sky-600"
              >
                {translations.contact_me}
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <div className="relative">
                <button
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className="flex items-center space-x-2 text-white focus:outline-none transition"
                >
                  <img
                    src={selectedLanguage.icon}
                    alt={selectedLanguage.code}
                    className="w-6 h-4"
                  />
                  <span className="text-sm font-semibold">
                    {selectedLanguage.code}
                  </span>
                </button>

                {languageOpen && (
                  <div className="absolute border left-0 mt-1 w-36 bg-slate-900 rounded shadow z-50 overflow-hidden">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language)}
                        className="flex items-center border-b border-gray-700 px-4 py-2 w-full text-left text-sm text-white hover:bg-sky-600 focus:outline-none"
                      >
                        <img
                          src={language.icon}
                          alt={language.code}
                          className="w-6 h-4 mr-2"
                        />
                        <span>{language.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
