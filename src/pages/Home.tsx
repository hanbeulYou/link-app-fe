import React from "react";
import Container from "../components/layout/Container";
import { Card } from "../components/ui/Card";
import { Category } from "../components/ui/Category";
import { Grid } from "../components/ui/Grid";
import { styled } from "styled-components";
import { Icon } from "../components/ui/Icon";

const Home: React.FC = () => {
  return (
    <Container gap="12px">
      <CategoryContainer>
        <Grid minWidth="48px" columns={5}>
          <Category title="12345678901234567890" />
          <Category title="test" />
          <Category title="test" />
          <Category title="test" />
          <Category title="test" />
          <Category title="test" />
          <Category title="test" />
          <Category title="test" />
          <Category title="test" />
          <Category title="test" />
        </Grid>
      </CategoryContainer>
      <ContentContainer>
        <ContentHeader>
          <ContentLeft>
            <CategoryTitle>최근 본 상품</CategoryTitle>
            <CategoryDescription>
              샘플 디스크립션입니다. 너비가 어디까지 늘어날지 모르겠지만 일단
              마크업을 위해 줄줄줄 적어봅니다.
            </CategoryDescription>
          </ContentLeft>
          <ContentRight>
            <button>
              <Icon icon="Share" />
            </button>
            <button>
              <Icon icon="More" />
            </button>
          </ContentRight>
        </ContentHeader>
        <ContentFilter>
          <FilterButton>
            투표순
            <Icon icon="Sort" />
          </FilterButton>
        </ContentFilter>
        <Grid minWidth="84px">
          <Card brand={"test"} item={"test"} price={"test"} />
          <Card brand={"test2"} item={"test2"} price={"test2"} />
          <Card brand={"test3"} item={"test3"} price={"test3"} />
          <Card brand={"test3"} item={"test3"} price={"test3"} />
          <Card brand={"test3"} item={"test3"} price={"test3"} />
          <Card brand={"test3"} item={"test3"} price={"test3"} />
          <Card brand={"test3"} item={"test3"} price={"test3"} />
        </Grid>
      </ContentContainer>
    </Container>
  );
};

export default Home;

const CategoryContainer = styled.div`
  margin-top: 16px;
  border-bottom: 1px solid #f0f0f0;
`;

const ContentContainer = styled.div`
  gap: 4px;
  padding: 16px 0;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: calc(100% - 64px);
`;

const ContentRight = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const CategoryTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const CategoryDescription = styled.div`
  font-size: 12px;
  color: #666;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const ContentFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: #666;
`;
