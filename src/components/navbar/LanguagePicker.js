import React from "react";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import { useTranslation } from "react-i18next";

export default function LanguagePicker() {
  const { i18n } = useTranslation();

  const handleLanguageChange = countryCode => {
    // ADD TRANSLATIONS HERE
    var language = "";
    switch (countryCode) {
      case "GB":
        language = "en";
        break;
      case "FR":
        language = "fr";
        break;
      case "DE":
        language = "de";
        break;
      default:
        language = "en";
    }
    i18n.changeLanguage(language);
  };

  return (
    <ReactFlagsSelect
      countries={["GB", "FR", "DE"]}
      customLabels={{ GB: "EN-GB", FR: "FR", DE: "DE" }}
      defaultCountry="DE"
      onSelect={handleLanguageChange}
    />
  );
}
