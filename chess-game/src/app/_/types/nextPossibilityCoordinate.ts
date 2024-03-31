import { Direction } from "../enums/direction.enum";
import { Coordinate } from "../interfaces/coordinates.intreface";

export class NextPossibilityCoordinate {

	constructor(private numberOfRows: number, private numberOfColumns: number) { }

	up(coordinate: Coordinate) {
		const nextCoordinate = {
			row: coordinate.row - 1,
			column: coordinate.column,
			direction: Direction.Up
		}
		if (this.isInBoundaries(nextCoordinate)) return nextCoordinate;
		else return;
	}
	down(coordinate: Coordinate) {
		const nextCoordinate = {
			row: coordinate.row + 1,
			column: coordinate.column,
			direction: Direction.Down,
		}
		if (this.isInBoundaries(nextCoordinate)) return nextCoordinate;
		else return;
	}
	right(coordinate: Coordinate) {
		const nextCoordinate = {
			row: coordinate.row,
			column: coordinate.column + 1,
			direction: Direction.Right
		}
		if (this.isInBoundaries(nextCoordinate)) return nextCoordinate;
		else return;
	}
	left(coordinate: Coordinate) {
		const nextCoordinate = {
			row: coordinate.row,
			column: coordinate.column - 1,
			direction: Direction.Left
		}
		if (this.isInBoundaries(nextCoordinate)) return nextCoordinate;
		else return;
	}

	topRight(coordinate: Coordinate) {
		const nextCoordinate = {
			row: coordinate.row - 1,
			column: coordinate.column + 1,
			direction: Direction.TopRight
		}
		if (this.isInBoundaries(nextCoordinate)) return nextCoordinate;
		else return;
	}
	topLeft(coordinate: Coordinate) {
		const nextCoordinate = {
			row: coordinate.row - 1,
			column: coordinate.column - 1,
			direction: Direction.TopLeft
		}
		if (this.isInBoundaries(nextCoordinate)) return nextCoordinate;
		else return;
	}
	downRight(coordinate: Coordinate) {
		const nextCoordinate = {
			row: coordinate.row + 1,
			column: coordinate.column + 1,
			direction: Direction.DownRight
		}
		if (this.isInBoundaries(nextCoordinate)) return nextCoordinate;
		else return;
	}
	downLeft(coordinate: Coordinate) {
		const nextCoordinate = {
			row: coordinate.row + 1,
			column: coordinate.column - 1,
			direction: Direction.DownLeft
		}
		if (this.isInBoundaries(nextCoordinate)) return nextCoordinate;
		else return;

	}

	private isInBoundaries(coordinate: Coordinate) {
		if (coordinate.row < 0 || coordinate.column < 0 || coordinate.row >= this.numberOfRows || coordinate.column >= this.numberOfColumns) {
			return false;
		}
		else {
			return true;
		}

	}
}