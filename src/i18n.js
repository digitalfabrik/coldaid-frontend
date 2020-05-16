import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./assets/languages/translationEN.json";
import translationDE from "./assets/languages/translationDE.json";
import translationFR from "./assets/languages/translationFR.json";
import translationRU from "./assets/languages/translationRU.json";


// the translations
// (tip move them in a JSON file and import them)
const  resources = {
  en : {
      translation : translationEN
  },
  de : {
      translation : translationDE
  },
  fr : {
        translation : translationFR
  },
  ru : {
      translation: translationRU
  }
};


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "de",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
