import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from "./local/en.json";
import translationAR from "./local/ar.json";
import translationHomeEN from "./local/en-home.json"
import translationHomeAR from "./local/ar-home.json";
import translationServicesEN from './local/en-services.json';
import translationServicesAR from './local/ar-services.json';
import translationManageEN from "./local/en-manage.json";
import translationManageAR from './local/ar-manage.json'
import translationFeaturesEN from "./local/en-features.json";
import translationFeaturesAR from "./local/ar-features.json";
import translationPricingEN from "./local/en-pricing.json";
import translationPricingAR from "./local/ar-pricing.json";
import translationContactEN from "./local/en-contact.json";
import translationContactAR from "./local/ar-contact.json"
import translationFooterEN from "./local/en-footer.json";
import translationFooterAR from "./local/ar-footer.json";


i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
      home: translationHomeEN,
      services: translationServicesEN,
      manage: translationManageEN,
      features: translationFeaturesEN,
      pricing: translationPricingEN,
      contact: translationContactEN,
      footer: translationFooterEN,
    },
    ar: {
      translation: translationAR,
      home: translationHomeAR,
      services: translationServicesAR,
      manage: translationManageAR,
      features: translationFeaturesAR,
      pricing: translationPricingAR,
      contact: translationContactAR,
      footer: translationFooterAR,
    },
  },
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});