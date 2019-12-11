import React from "react";
import { Typography } from "@material-ui/core";

import {
  StyledMapIcon,
  StyledAccessibilityNewIcon,
  StyledFeature,
  StyledHeader
} from "../../styles/components-style";
import Link from "../Link";
import { StyledFeatureContainer } from "../../styles/pages-style";

export default function Features() {
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
        <Link to="/page3">Page 3</Link>
      </StyledFeature>
      <StyledFeature>
        <Link to="/page4">Page 4</Link>
      </StyledFeature>
    </StyledFeatureContainer>
  );
}
