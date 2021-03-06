export type GameStatus = "settings" | "game" | "stop";
export type Speed = "pause" | "play" | "slow" | "fast";
export interface GameState {
  status: GameStatus;
  speed: number;
  filledCells: Array<number>;
}
