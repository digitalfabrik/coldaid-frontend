import styled from "styled-components";
import { Container } from "@material-ui/core";

const StyledFeatureContainer = styled(Container)`
  position: fixed;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 5px;
  background-color: #333;
  bottom: 0;
  text-align: center;
  justify-items: center;
`;

export { StyledFeatureContainer };
