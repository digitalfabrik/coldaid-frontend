import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      latitude: "Latitude",
      longitude: "Longitude",
      header1: "Welcome!",
      text1: "We want to help the homeless!",
      header2: "Happy New Year!",
      text2: "It's 2020!",
      header3: "Find Shelters!",
      text3: "With our Map!",
      shelters: "Shelters",
      landingText: "This is some basic information."
    }
  },
  de: {
    translation: {
      latitude: "Breite",
      longitude: "Höhe",
      header1: "Willkommen!",
      text1: "Wir wollen die Obdachlosen helfen!",
      header2: "Alles gute!",
      text2: "Es ist 2020!",
      header3: "Finde Unterkünfte!",
      text3: "Mit unserer Karte!",
      shelters: "Unterkünfte",
      landingText: "Hier ist ein wenig Information."
    }
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
