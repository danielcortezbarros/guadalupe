import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationPT from './locales/pt/translation.json';
import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';
import translationFR from './locales/fr/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: translationPT },
      en: { translation: translationEN },
      de: { translation: translationDE },
      fr: { translation: translationFR },
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
