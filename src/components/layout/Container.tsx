import styled from "styled-components";

const Container = styled.div<{
  maxWidth?: string;
  padding?: string;
  gap?: string;
}>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "1200px"};
  margin: 0 auto;
  padding: ${({ padding }) => padding || "0 0px"};
  box-sizing: border-box;
  gap: ${({ gap }) => gap || "0px"};
`;

export default Container;
