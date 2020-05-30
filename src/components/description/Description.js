import React from "react";
import { useTranslation } from "react-i18next";
import ContentText from '../theme/ContentText.jsx'

export default function Description() {
  const { t } = useTranslation();
  return <ContentText>{t("home.introduction")}</ContentText>;
}
