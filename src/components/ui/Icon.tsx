import { styled } from "styled-components";

export const Icon = styled.img<{ size?: string }>`
  width: ${({ size }) => size || "24px"};
  height: ${({ size }) => size || "24px"};
  object-fit: contain;
  display: inline-block;
`;
