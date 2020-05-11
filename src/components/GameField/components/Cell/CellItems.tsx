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
  width: 30px;
  height: 30px;
  border: 1px solid gray;
  margin: 3px;
  box-sizing: border-box;
  &:hover {
    border-width: 3px;
  }
  ${({ isFilled }: Props): string => (isFilled ? FilledCell : EmptyCell)};
`;
