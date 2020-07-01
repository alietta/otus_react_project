export type GameStatus = "settings" | "game" | "stop";
export interface GameState {
  status: GameStatus;
  speed: number;
  filledCells: Array<number>;
}
