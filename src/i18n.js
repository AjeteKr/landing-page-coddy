import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enLanding from './locales/en/landing.json';
import enAuth from './locales/en/auth.json';

import sqCommon from './locales/sq/common.json';
import sqLanding from './locales/sq/landing.json';
import sqAuth from './locales/sq/auth.json';

const resources = {
  en: {
    common: enCommon,
    landing: enLanding,
    auth: enAuth,
  },
  sq: {
    common: sqCommon,
    landing: sqLanding,
    auth: sqAuth,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultLanguage: 'en',
    fallbackLng: 'en',
    ns: ['common', 'landing', 'auth'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
