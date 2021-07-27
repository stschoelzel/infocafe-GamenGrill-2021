import styled from "styled-components";
import { theme } from "../../theme";

export const BackToHome = styled.div`
  font-family: Permanent Marker;
  font-size: ${(p) => p.f * 5}rem;
  transform: rotate(-3deg);
  color: ${theme.secondary};
`;
