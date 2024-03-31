import { Direction } from "../enums/direction.enum";

export interface Coordinate {
	row: number;
	column: number;
	direction?: Direction;
}