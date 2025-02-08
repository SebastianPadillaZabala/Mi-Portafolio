import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import port from './locales/pt.json';

i18n
  .use(initReactI18next) // Se integra con React
  .init({
    resources: {
      en: {
        translation: en, // Traducciones en inglés
      },
      es: {
        translation: es, // Traducciones en español
      },
      port: {
        translation: port, // Traducciones en español
      },
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es', // Idioma alternativo en caso de que no haya traducción
    interpolation: {
      escapeValue: false, // No es necesario en React, ya que React se encarga de la seguridad de XSS
    },
  });

export default i18n;
