import React from "react";
import { useLanguage } from "../translate/LanguageContext";
import JobSection from "./JobSection";
import { jobs } from "../utils/jobs";

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
              {jobs.map((job) => (
                <JobSection key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
