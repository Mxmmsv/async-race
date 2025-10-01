import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/locales/en/translation.json";
import ru from "@/locales/ru/translation.json";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("translation") ?? "en",
  fallbackLng: "en",
  debug: import.meta.env.DEV,
  interpolation: { escapeValue: false },
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
});

export default i18n;
