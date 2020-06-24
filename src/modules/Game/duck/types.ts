export type TGameStatus = 'settings' | 'game' | 'stop';
export interface IGameState {
  status: TGameStatus;
  speed: number;
  filledCells: Array<number>;
}
