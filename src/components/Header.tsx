import React from "react";
import styled from "styled-components";
import { FlexRow } from "./layout/FlexRow";
import { useLocation, useNavigate } from "react-router-dom";

import { Icon } from "./ui/Icon";

interface HeaderProps {
  hasBackButton?: boolean;
}

const HeaderContainer = styled.header`
  width: 100%;
  height: fit-content;
  padding: ${({ theme }) => theme.spacing.sm}px;
`;

const IconWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.sm}px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Header: React.FC<HeaderProps> = ({ hasBackButton = false }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pathToTitle: { [key: string]: string } = {
    "/": "Home",
    "/about": "About",
    "/login": "Login",
  };

  const title = pathToTitle[pathname] || "Page";

  return (
    <HeaderContainer>
      <FlexRow justify="space-between" align="center">
        <FlexRow align="center">
          {hasBackButton && (
            <IconWrapper onClick={() => navigate(-1)}>
              <Icon icon="Back" />
            </IconWrapper>
          )}
          <Title>{title}</Title>
        </FlexRow>

        <FlexRow gap="8px" align="center">
          <IconWrapper>
            <Icon icon="Search" />
          </IconWrapper>
          <IconWrapper>
            <Icon icon="Notification" />
          </IconWrapper>
          <IconWrapper>
            <Icon icon="Hamburger" />
          </IconWrapper>
        </FlexRow>
      </FlexRow>
    </HeaderContainer>
  );
};

export default Header;
