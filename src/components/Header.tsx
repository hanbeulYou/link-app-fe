import React from "react";
import styled from "styled-components";
import { FlexRow } from "./layout/FlexRow";
import { useLocation, useNavigate } from "react-router-dom";

import { Icon } from "./ui/Icon";

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

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pathToTitle: { [key: string]: string } = {
    "/": "Home",
    "/about": "About",
    "/login": "Login",
  };

  const title = pathToTitle[pathname] || "Page";

  // TODO: 백 버튼 표시 로직 추가
  const shouldShowBackButton = () => {
    if (pathname === "/") return false;
    return true;
  };

  return (
    <HeaderContainer>
      <FlexRow justify="space-between" align="center">
        <FlexRow align="center" style={{ gap: "8px" }}>
          {shouldShowBackButton() && (
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
