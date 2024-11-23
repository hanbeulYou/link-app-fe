import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "./ui/Icon";

const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm};
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: ${({ theme }) => theme.spacing.sm};
`;

const NavItem = styled.li`
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray900};
    font-size: ${({ theme }) => theme.fontSize.md};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <button onClick={() => navigate("/")}>
            <Icon icon="Home" />
            키핑 홈
          </button>
        </NavItem>
        <NavItem>
          <button onClick={() => navigate("/add")}>
            <Icon icon="Add" />
            링크 추가
          </button>
        </NavItem>
        <NavItem>
          <button onClick={() => navigate("/account")}>
            <Icon icon="Person" />내 정보
          </button>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
