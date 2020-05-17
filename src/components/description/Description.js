import React from "react";
import { useTranslation } from "react-i18next";
import { Typography } from '@material-ui/core'

export default function Description() {
  const { t } = useTranslation();
  return <Typography>{t("landingText")}</Typography>;
}
