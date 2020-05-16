import React from "react";
import { useTranslation } from "react-i18next";
import StyledDescription from "./description.style";

export default function Description() {
  const { t } = useTranslation();
  return <StyledDescription>{t("landingText")}</StyledDescription>;
}
