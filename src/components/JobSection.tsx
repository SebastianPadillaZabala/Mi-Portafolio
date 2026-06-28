import { useLanguage } from "../translate/LanguageContext";
import { Job } from "../utils/jobs";

interface JobSectionProps {
    job: Job;
}

const JobSection: React.FC<JobSectionProps> = ({ job }) => {
    const { translations } = useLanguage();
    const t = translations as any;
    const containerClass =
        job.side === "left"
            ? "mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
            : "mb-8 flex justify-between items-center w-full right-timeline";
    const textAlign = job.side === "left" ? "text-right" : "text-left";

    return (
        <div className={containerClass}>
            <div className="order-1 w-5/12"></div>
            <div className={`order-1  w-5/12 px-1 py-4 ${textAlign}`}>
                <p className="mb-3 text-base text-sky-600 dark:text-sky-300">{job.date}</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">{t[job.titleKey]}</h4>
                <p className="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                    {t[job.descriptionKey]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobSection;