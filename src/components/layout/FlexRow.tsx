import { styled } from "styled-components";

export const FlexRow = styled.div<{
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "center" | "flex-end" | "stretch";
  gap?: string;
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "stretch"};
  gap: ${({ gap }) => gap || "0"};
`;
