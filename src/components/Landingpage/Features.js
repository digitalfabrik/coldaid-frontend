import React from "react";

import {
  StyledMapIcon,
  StyledAccessibilityNewIcon,
  StyledSubjectIcon,
  StyledFeature,
  StyledHeader
} from "../../styles/components-style";
import Link from "../Link";
import { StyledFeatureContainer } from "../../styles/pages-style";
import {useTranslation} from "react-i18next";

export default function Features() {
    const {t} = useTranslation();
  return (
    <StyledFeatureContainer>
      <StyledHeader>Our Features</StyledHeader>
      <StyledFeature>
        <Link to="/map">
          <StyledMapIcon />
        </Link>
      </StyledFeature>
      <StyledFeature>
        <Link to="/help">
          <StyledAccessibilityNewIcon />
        </Link>
      </StyledFeature>
      <StyledFeature>
        <Link to="/find_shelters" alt={t('shelters')}>
            <StyledSubjectIcon/>
        </Link>
      </StyledFeature>
      <StyledFeature>
        <Link to="/page4">Page 4</Link>
      </StyledFeature>
    </StyledFeatureContainer>
  );
}
