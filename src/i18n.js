import i18n from "i18next";
import {initReactI18next} from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "latitude":          "Latitude",
            "longitude":         "Longitude",
            "introduction_text": "This is a very long and english introduction\n" +
                                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat\n" +
                                     "dapibus lacus, eget tempus massa ultricies aliquam. Mauris imperdiet mi\n" +
                                     "vitae ex sollicitudin pretium. Vestibulum ullamcorper porttitor ultrices.\n" +
                                     "Cras at molestie lectus. Nam viverra tempor sapien ullamcorper maximus.\n" +
                                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor\n" +
                                     "      molestie purus, vitae iaculis nisl tempus quis. Vestibulum cursus, magna\n" +
                                     "      et tempus cursus, elit risus mollis nulla, a sagittis neque magna eget ex.\n" +
                                     "      Donec consectetur in lorem et consequat. Mauris sit amet lacinia diam.\n" +
                                     "      Aliquam pellentesque tellus volutpat sapien scelerisque, in dapibus sapien\n" +
                                     "      ultrices. Sed nec hendrerit ligula. Nullam ultricies nisi leo, a semper\n" +
                                     "      quam maximus vitae. Pellentesque vel diam id nulla laoreet porttitor eu\n" +
                                     "      nec lorem. Vestibulum vitae lacinia orci. Pellentesque tristique nulla sed\n" +
                                     "      metus semper lobortis. Aenean auctor id est sed facilisis. Aliquam\n" +
                                     "      dignissim, nisl eget semper molestie, velit urna aliquet eros, vel viverra\n" +
                                     "      Lorem ipsLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n" +
                                     "      consequat dapibus lacus, Lorem ipsum dolor sit amet, consectetur\n" +
                                     "      adipiscing elit. Sed consequat dapibus lacus, eget tempus massa ultricies\n" +
                                     "      aliquam. Mauris imperdiet mi vitae ex sollicitudin pretium. Vestibulum\n" +
                                     "      ullamcorper porttitor ultrices. Cras at molestie lectus. Nam viverra\n" +
                                     "      tempor sapien ullamcorper maximus. Lorem ipsum dolor sit amet, consectetur\n" +
                                     "      adipiscing elit. Duis porttitor molestie purus, vitae iaculis nisl tempus\n" +
                                     "      quis. Vestibulum cursus, magna et tempus cursus, elit risus mollis nulla,\n" +
                                     "      a sagittis neque magna eget ex. Donec consectetur in lorem et consequat.\n" +
                                     "      Mauris sit amet lacinia diam. Aliquam pellentesque tellus volutpat sapien\n" +
                                     "      scelerisque, in dapibus sapien ultrices. Sed nec hendrerit ligula. Nullam\n" +
                                     "      ultricies nisi leo, a semper quam maximus vitae. Pellentesque vel diam id\n" +
                                     "      nulla laoreet porttitor eu nec lorem. Vestibulum vitae lacinia orci.\n" +
                                     "      Pellentesque tristique nulla sed metus semper lobortis. Aenean auctor id\n" +
                                     "      est sed facilisis.",
            "shelters":         "Shelters",
            "name":             "Name",
            "available_beds":   "Available Beds",
            "distance":         "Distance",
            "address":          "Address",
            "phone":            "Phone",
            "email":            "E-Mail",
            "free_beds":        "Free beds",
            "intake_hours":     "Intake hours",
            "opening_hours":    "Opening hours",
            "rules":            "Rules",
            "kids":             "Kids",
            "animals":          "Animals",
            "female_only":      "Female only",
            "families_welcome": "Families welocme",
            "male_only":        "Male only",
            "holder":           "Holder",
            "languages":        "Languages",
            "yes":              "Yes",
            "no":               "No",
            "beds":             "Beds",
            "selected":         "selected"
        }
    },
    de: {
        translation: {
            "latitude":          "Breite",
            "longitude":         "Höhe",
            "introduction_text": "Dies ist eine sehr lange und deutsche Einführung\n" +
                                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat\n" +
                                     "dapibus lacus, eget tempus massa ultricies aliquam. Mauris imperdiet mi\n" +
                                     "vitae ex sollicitudin pretium. Vestibulum ullamcorper porttitor ultrices.\n" +
                                     "Cras at molestie lectus. Nam viverra tempor sapien ullamcorper maximus.\n" +
                                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor\n" +
                                     "      molestie purus, vitae iaculis nisl tempus quis. Vestibulum cursus, magna\n" +
                                     "      et tempus cursus, elit risus mollis nulla, a sagittis neque magna eget ex.\n" +
                                     "      Donec consectetur in lorem et consequat. Mauris sit amet lacinia diam.\n" +
                                     "      Aliquam pellentesque tellus volutpat sapien scelerisque, in dapibus sapien\n" +
                                     "      ultrices. Sed nec hendrerit ligula. Nullam ultricies nisi leo, a semper\n" +
                                     "      quam maximus vitae. Pellentesque vel diam id nulla laoreet porttitor eu\n" +
                                     "      nec lorem. Vestibulum vitae lacinia orci. Pellentesque tristique nulla sed\n" +
                                     "      metus semper lobortis. Aenean auctor id est sed facilisis. Aliquam\n" +
                                     "      dignissim, nisl eget semper molestie, velit urna aliquet eros, vel viverra\n" +
                                     "      Lorem ipsLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n" +
                                     "      consequat dapibus lacus, Lorem ipsum dolor sit amet, consectetur\n" +
                                     "      adipiscing elit. Sed consequat dapibus lacus, eget tempus massa ultricies\n" +
                                     "      aliquam. Mauris imperdiet mi vitae ex sollicitudin pretium. Vestibulum\n" +
                                     "      ullamcorper porttitor ultrices. Cras at molestie lectus. Nam viverra\n" +
                                     "      tempor sapien ullamcorper maximus. Lorem ipsum dolor sit amet, consectetur\n" +
                                     "      adipiscing elit. Duis porttitor molestie purus, vitae iaculis nisl tempus\n" +
                                     "      quis. Vestibulum cursus, magna et tempus cursus, elit risus mollis nulla,\n" +
                                     "      a sagittis neque magna eget ex. Donec consectetur in lorem et consequat.\n" +
                                     "      Mauris sit amet lacinia diam. Aliquam pellentesque tellus volutpat sapien\n" +
                                     "      scelerisque, in dapibus sapien ultrices. Sed nec hendrerit ligula. Nullam\n" +
                                     "      ultricies nisi leo, a semper quam maximus vitae. Pellentesque vel diam id\n" +
                                     "      nulla laoreet porttitor eu nec lorem. Vestibulum vitae lacinia orci.\n" +
                                     "      Pellentesque tristique nulla sed metus semper lobortis. Aenean auctor id\n" +
                                     "      est sed facilisis.",
            "shelters":         "Unterkünfte",
            "name":             "Name",
            "available_beds":   "Verfügbare Betten",
            "distance":         "Distanz",
            "address":          "Adresse",
            "phone":            "Telefon",
            "email":            "E-Mail",
            "free_beds":        "Freie Betten",
            "intake_hours":     "Aufnahmezeiten",
            "opening_hours":    "Öffnungszeiten",
            "rules":            "Regeln",
            "kids":             "Kinder",
            "animals":          "Tiere",
            "female_only":      "Nur Frauen",
            "families_welcome": "Familien willkommen",
            "male_only":        "Nur Männer",
            "holder":           "Träger",
            "languages":        "Sprachen",
            "yes":              "Ja",
            "no":               "Nein",
            "beds":             "Betten",
            "selected":         "ausgewählt"
        },


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
