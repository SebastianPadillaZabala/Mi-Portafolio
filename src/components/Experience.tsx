import React from "react";
import { useLanguage } from "../translate/LanguageContext";

interface ExperienceProps {
  id?: string;
}

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  const { translations } = useLanguage();

  return (
    <section id={id}>
      <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-10 md:mt-12 px-8">
          <p className="ml-2 text-sky-600 dark:text-sky-300 text-2xl font-bold leading-10 uppercase tracking-loose">
            {translations.exp_title_1}
          </p>
          <p className="text-3xl md:text-4xl text-slate-600 dark:text-slate-300 font-bold leading-normal md:leading-relaxed mb-2">
            {translations.exp_title_2}
          </p>
          <p className="text-sm md:text-base text-gray-500 dark:text-white mb-4">
            {translations.exp_subtitle}
          </p>
        </div>
        <div className="ml-0 md:ml-12 pt-5 lg:w-2/3 sticky">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div className="absolute h-full border-4 border-cyan-500 left-1/2 transform -translate-x-1/2 rounded-sm"></div>
              <div className="absolute h-full border-4 border-cyan-500 right-1/2 transform translate-x-1/2 rounded-sm"></div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <p className="mb-3 text-base text-sky-600 dark:text-sky-300">
                    Julio 2024, Febrero 2025
                  </p>
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">
                    {translations.exp_1}
                  </h4>
                  <p className="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                    {translations.exp_1_more}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                      META
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600">
                      MySQL
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600">
                      Python
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                      NodeJs
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                      React
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 py-4 text-left">
                  <p className="mb-3 text-base text-sky-600 dark:text-sky-300">
                    Noviembre-Diciembre, 2024
                  </p>
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">
                    {translations.exp_2}
                  </h4>
                  <p className="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                    {translations.exp_2_more}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                      React
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <p className="mb-3 text-base text-sky-600 dark:text-sky-300">
                    Abril-Agosto, 2023
                  </p>
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">
                    {translations.exp_3}
                  </h4>
                  <p className="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                    {translations.exp_3_more}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                      NestJs
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                      Angular
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                      PostgreSQL
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>

                <div className="order-1  w-5/12 px-1 py-4">
                  <p className="mb-3 text-base text-sky-600 dark:text-sky-300">
                    8-10 Marzo, 2023
                  </p>
                  <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                    {translations.exp_4}
                  </h4>
                  <p className="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                    {translations.exp_4_more}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                      Flutter
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600">
                      Firebase
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                      Google API
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
