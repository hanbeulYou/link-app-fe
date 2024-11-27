import { styled } from "styled-components";
import { FlexCol } from "../layout/FlexCol";

interface CategoryProps {
  imageUrl?: string;
  title: string;
}

export const Category: React.FC<CategoryProps> = ({ imageUrl, title }) => {
  return (
    <FlexCol align="center" gap="8px">
      <CategoryContainer imageUrl={imageUrl} />
      <Title>{title}</Title>
    </FlexCol>
  );
};

const CategoryContainer = styled.button<Pick<CategoryProps, "imageUrl">>`
  width: 100%;
  position: relative;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;

  background-color: #f0f0f0;
`;

const Title = styled.span`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.15;
  height: 28px;
  overflow: hidden;
  word-break: break-all;
`;
