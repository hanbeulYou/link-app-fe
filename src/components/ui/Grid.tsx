import React from "react";
import styled from "styled-components";

interface GridProps {
  children: React.ReactNode;
  columns?: number;
  rowGap?: number;
  columnGap?: number;
  minWidth?: string;
}

const GridContainer = styled.div<{
  columns: number;
  rowGap: number;
  columnGap: number;
  minWidth: string;
}>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => props.minWidth}, 1fr)
  );
  row-gap: ${props => props.rowGap}px;
  column-gap: ${props => props.columnGap}px;
  width: 100%;
  padding: 8px 0px;
`;

export const Grid: React.FC<GridProps> = ({
  children,
  columns = 4,
  rowGap = 8,
  columnGap = 16,
  minWidth = "250px",
}) => {
  return (
    <GridContainer
      columns={columns}
      rowGap={rowGap}
      columnGap={columnGap}
      minWidth={minWidth}
    >
      {children}
    </GridContainer>
  );
};
