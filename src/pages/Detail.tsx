import React from "react";
import Container from "../components/layout/Container";
import styled from "styled-components";
import { Icon } from "../components/ui/Icon";
import { FlexCol } from "../components/layout/FlexCol";
import { FlexRow } from "../components/layout/FlexRow";

export const CategoryInfo = styled.div`
  margin-bottom: 16px;
`;

export const CategoryTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 8px;
`;

export const CategoryDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ContentImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 16px;
`;

export const ContentImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
  object-fit: cover;
  border-radius: 16px;
`;

export const ContentBrand = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 4px;
`;

export const ContentItem = styled.span`
  font-size: ${({ theme }) => theme.fontSize.lg};
  margin-bottom: 4px;
`;

export const ContentPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.lg};
  margin-bottom: 4px;
`;

export const ContentLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  margin-bottom: 8px;
`;

export const DescriptionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
  border-radius: 16px;
`;

export const DescriptionContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: 8px;
`;

export const VoteContainer = styled.div`
  margin-top: 24px;
`;

export const VoteContent = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.background};
  padding-top: 8px;
`;

export const VoteItem = styled.div`
  margin-bottom: 8px;
`;

export const VoteAuthor = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-right: 8px;
`;

export const VoteComment = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-bottom: 4px;
`;

export const VoteTime = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Detail: React.FC = () => {
  return (
    <Container gap="4px" padding="16px 0px">
      <CategoryInfo>
        <CategoryTitle>test</CategoryTitle>
        <CategoryDescription>test</CategoryDescription>
      </CategoryInfo>
      <FlexCol gap="16px">
        <ContentImageContainer>
          <ContentImage />
        </ContentImageContainer>
        <FlexCol gap="8px">
          <ContentBrand>test</ContentBrand>
          <ContentItem>test</ContentItem>
          <ContentPrice>test</ContentPrice>
          <ContentLink>test</ContentLink>
          <DescriptionContainer>
            <FlexCol gap="8px">
              <FlexRow justify="space-between" align="center">
                <h3>My Comment</h3>
                <button>
                  <Icon icon="Edit" />
                </button>
              </FlexRow>
              <DescriptionContent>test</DescriptionContent>
            </FlexCol>
          </DescriptionContainer>
        </FlexCol>
      </FlexCol>
      <VoteContainer>
        <FlexRow justify="space-between" align="center" gap="8px">
          <h3>Votes</h3>
          <span>득표율 관련 어쩌구</span>
        </FlexRow>
        <VoteContent>
          <VoteItem>
            <VoteAuthor>test</VoteAuthor>
            <VoteComment>test</VoteComment>
            <VoteTime>test</VoteTime>
          </VoteItem>
        </VoteContent>
      </VoteContainer>
    </Container>
  );
};

export default Detail;
