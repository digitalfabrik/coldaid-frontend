import styled from "styled-components";
import { Container, Box } from "@material-ui/core";

const StyledFeatureContainer = styled(Container)`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 5px;
  background-color: #333;
  bottom: 0;
  text-align: center;
  justify-items: center;
`;
const StyledLandingContainer = styled(Box)``;

export { StyledFeatureContainer, StyledLandingContainer };
