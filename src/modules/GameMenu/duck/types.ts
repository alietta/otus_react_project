export interface ISize {
  width: number;
  height: number;
}

export interface ISettingState {
  fieldSize: ISize;
  cellSize: ISize;
  default: {
    fieldSize: ISize;
    cellSize: ISize;
  }
}
