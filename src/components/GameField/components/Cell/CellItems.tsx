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
  width: 20px;
  height: 20px;
  border: 1px solid gray;
  box-sizing: border-box;
  vertical-align: middle;
  &:hover {
    border-width: 3px;
  }
  ${({ isFilled }: Props): string => (isFilled ? FilledCell : EmptyCell)};
`;
