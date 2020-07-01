export interface Size {
  width: number;
  height: number;
}

export interface SettingState {
  fieldSize: Size;
  cellSize: Size;
  default: {
    fieldSize: Size;
    cellSize: Size;
  };
}
