import React from "react";
import { StyledDescription } from "../../styles/components-style";
import {useTranslation} from 'react-i18next';

export default function Description() {
    const {t} = useTranslation();
  return (
    <StyledDescription>
        {t('introduction_text')}
    </StyledDescription>
  );
}
