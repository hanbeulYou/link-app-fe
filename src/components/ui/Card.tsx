import { styled } from "styled-components";
import { FlexCol } from "../layout/FlexCol";
import React from "react";
interface CardProps {
  imageUrl?: string;
  brand: string;
  item: string;
  price: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  brand,
  item,
  price,
  description,
}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={item} />
      </ImageContainer>
      <ContentContainer>
        <Brand>{brand}</Brand>
        <Item>{item}</Item>
        <Price>{price}</Price>
        <Description>{description}</Description>
      </ContentContainer>
    </CardContainer>
  );
};

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  border-radius: 8px;

  background-color: #f0f0f0;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const ContentContainer = styled.div`
  gap: 4px;
`;

const Brand = styled.span`
  display: block;
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Item = styled.span`
  display: block;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
`;

const Price = styled.span`
  display: block;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
`;

const Description = styled.span`
  display: block;
  font-size: 10px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
`;

const CardContainer = styled(FlexCol)`
  border-radius: 8px;
  background-color: white;
  overflow: hidden;
  padding: 8px 4px;
  gap: 8px;
`;
