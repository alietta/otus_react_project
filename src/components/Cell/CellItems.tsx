import styled from "@emotion/styled";
import { css } from "@emotion/core";

const EmptyCell = css`
  background: white;
`;

const FilledCell = css`
  background: lightgray;
`;

interface Props {
  isFilled: boolean;
}

export const CellWrapper = styled.div`
  display: inline-block;
  border: 1px solid gray;
  box-sizing: border-box;
  vertical-align: middle;
  &:hover {
    border-width: 3px;
  }
  ${({ isFilled }: Props): string => (isFilled ? FilledCell : EmptyCell)};
  ${({ width }: Props): number => `width: ${width}px`};
  ${({ height }: Props): number => `height: ${height}px`};
`;
