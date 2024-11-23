import styled from "styled-components";

const Container = styled.div<{ maxWidth?: string; padding?: string }>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "1200px"};
  margin: 0 auto;
  padding: ${({ padding }) => padding || "0 16px"};
  box-sizing: border-box;
`;

export default Container;
