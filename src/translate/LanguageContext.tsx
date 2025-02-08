import React, { createContext, useState, useContext } from 'react';
import es from './locales/es.json';
import en from './locales/en.json';
import port from './locales/pt.json';

type Language = 'ES' | 'EN' | 'PT';

interface LanguageContextProps {
    language: Language;
    setLanguage: (language: Language) => void;
    translations: { [key: string]: string };
}

// Create context with undefined as the initial value
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Translations for the available languages
const translations = { ES: es, EN: en, PT: port };

// Define the type for the props, including children
interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('ES');

    const setLang = (newLanguage: Language) => {
        setLanguage(newLanguage);
    };

    const currentTranslations = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage: setLang, translations: currentTranslations }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
