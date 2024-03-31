import { Coins } from '../enums/coins.enum';

export interface Cell {
  clue: Coins;
  highlight?: boolean;
  isWhiteCoin?: boolean;
  isBlackCoin?: boolean;
  icon?: string;
  color?: boolean;
  isPossable?: boolean;
}
