import styled from "styled-components";
import Navbar from "../Navbar";
import Header from "../Header";

const PageLayout = styled.div`
  width: 100%;
  max-width: 768px; /* 기본 모바일 최대 너비 */
  height: 100%;
  padding: 16px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow-y: auto; /* 세로 스크롤 허용 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff; /* 기본 배경색 */

  @media (min-width: 1024px) {
    max-width: 1024px; /* 데스크톱 최대 너비 */
    padding: 32px;
    background-color: #f0f0f0;
    border-radius: 8px; /* 데스크톱에서 둥근 모서리 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 입체감 */
  }
`;

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <PageLayout>
    <Header />
    {children}
    <Navbar />
  </PageLayout>
);

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <PageLayout>{children}</PageLayout>
);

export { DefaultLayout, AuthLayout };
