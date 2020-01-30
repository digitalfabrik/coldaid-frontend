import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
        latitude:                 "Latitude",
        map_feature_header:       "Map",
        map_feature_text:         "Search for a shelter on a map.",
        view_feature_header:      "View",
        view_feature_text:        "Search for a shelter on a list.",
        kaeltebus_feature_header: "Kältebus",
        kaeltebus_feature_text:   "Find the closest Bus.",
        info_feature_header:      "More Information",
        info_feature_text:        "More Information about the project and how you can contribute.",
        longitude:                "Longitude",
        welcome_header:           "Welcome!",
        welcome_text:             "Find the right homeless shelter for tonight!",
        header2:                  "Happy New Year!",
        text2:                    "It's 2020!",
        header3:                  "Find Shelters!",
        text3:                    "With our Map!",
        features_header:          "Discover our Features",
        landingText:              "This Project of the TU-Berlin aims to link shelters for homeless" +
                                      " with our digital age. On our website you can find a place for" +
                                      " the homeless. At present, the shelters can be displayed on a map or in a list." +
                                      "\n\nFurthermore, we cooperate in close relationship with the Kältebus " +
                                      "of the Stadtmission Berlin, who pick up people which don't have the strength to make it to a shelter on their own.",
        shelters:                 "Shelters",
        name:                     "Name",
        available_beds:           "Available Beds",
        distance:                 "Distance",
        address:                  "Address",
        phone:                    "Phone",
        email:                    "E-Mail",
        free_beds:                "Free beds",
        intake_hours:             "Intake hours",
        opening_hours:            "Opening hours",
        rules:                    "Rules",
        kids:                     "Kids",
        animals:                  "Animals",
        female_only:              "Female only",
        families_welcome:         "Families welocme",
        male_only:                "Male only",
        holder:                   "Holder",
        languages:                "Languages",
        yes:                      "Yes",
        no:                       "No",
        beds:                     "Beds",
        selected:                 "selected"
        }
  },
  de: {
    translation: {
        latitude:                 "Breite",
        longitude:                "Höhe",
        welcome_header:           "Willkommen!",
        welcome_text:             "Finden Sie die richtige Notunterkunft für heute Nacht!",
        header2:                  "Alles gute!",
        text2:                    "Es ist 2020!",
        header3:                  "Finde Unterkünfte!",
        text3:                    "Mit unserer Karte!",
        map_feature_header:       "Karte",
        map_feature_text:         "Machen Sie sich einen Überblick der gesamten Notunterkünfte in Berlin und nutzen Sie die Ansicht um offene Einrichtungen zu finden.",
        view_feature_header:      "Übersicht",
        view_feature_text:        "Hier finden Sie eine Auflistung der Notunterkünfte und können über Filter eine spezifische Suche beginnen.",
        kaeltebus_feature_header: "Kältebus",
        kaeltebus_feature_text:   "In Kooperation mit der Stadtmission Berlin kann der Kältebus für obdachlose Personen gerufen werden. Hier können Sie weitere Informationen finden.",
        info_feature_header:      "Mehr Information",
        info_feature_text:        "Erfahren Sie mehr Information über das Projekt und wie Sie dazu beitragen können.",
        features_header:          "Entdecke unsere Features",
        landingText:              "Dieses Projekt der TU-Berlin hat sich zum Ziel gesetzt, Obdachlosenheime" +
                                      " mit unserer digitalen Welt zu verknüpfen. Mit unserer Website können Sie einfach Unterkünfte" +
                                      " für Personen ausfindig machen, die einen Schlafplatz benötigen. Zurzeit können diese auf einer " +
                                      "Karte oder in einer Liste angezeigt werden. \n" +
                                      "\nAußerdem arbeiten wir in enger Zusammenarbeit mit dem Kältebus der Stadtmission " +
                                      "Berlin, die Personen helfen, welche aus eigener Kraft den Weg in eine Unterkunft" +
                                      " nicht mehr erbringen können.",
        shelters:                 "Unterkünfte",
        name:                     "Name",
        available_beds:           "Verfügbare Betten",
        distance:                 "Distanz",
        address:                  "Adresse",
        phone:                    "Telefon",
        email:                    "E-Mail",
        free_beds:                "Freie Betten",
        intake_hours:             "Aufnahmezeiten",
        opening_hours:            "Öffnungszeiten",
        rules:                    "Regeln",
        kids:                     "Kinder",
        animals:                  "Tiere",
        female_only:              "Nur Frauen",
        families_welcome:         "Familien willkommen",
        male_only:                "Nur Männer",
        holder:                   "Träger",
        languages:                "Sprachen",
        yes:                      "Ja",
        no:                       "Nein",
        beds:                     "Betten",
        selected:                 "ausgewählt"
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
