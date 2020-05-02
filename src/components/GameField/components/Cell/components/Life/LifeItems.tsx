import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";

const EmptyCell = css`
  background: white;
`;

const FilledCell = css`
  background: lightgray;
`;

interface Props {
  isFilled: boolean;
}

export const LifeWrapper = styled.div`
  display: inline-block;
  width: 90%;
  height: 90%;
  opacity: ${({ show }: Props) => (show ? "1" : "0")};
  background: ${({ color }: Props) => color};
  transition: opacity 1s ease-out;
  border-radius: 50%;
  left: 5%;
  position: relative;
  top: 5%;
`;
