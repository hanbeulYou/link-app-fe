import { styled } from "styled-components";

export const Button = styled.button<{
  variant?: "primary" | "secondary";
}>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.primary : theme.colors.secondary};
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
