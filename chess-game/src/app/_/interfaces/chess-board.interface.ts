import { Cell } from "./cell.interface";
import { Coordinate } from "./coordinates.intreface";
import { OptionalIndex } from "./optionalIndex.interface";

export interface ChessBoardInterface {
	board: Cell[][];
	numberOfRows: number;
	numberOfColumns: number;
	coordinates: Coordinate[];
	initialSelectedCoin?: OptionalIndex;

	getMemberCoordinates: (member: OptionalIndex) => OptionalIndex;
	selectMember: (numberOfRows: number, numberOfColumns: number, cell: Cell) => any;

	knight: (numberOfRows: number, numberOfColumns: number) => Coordinate[];
	bishop: (numberOfRows: number, numberOfColumns: number) => Coordinate[];
	rook: (numberOfRows: number, numberOfColumns: number) => Coordinate[];
	queen: (numberOfRows: number, numberOfColumns: number) => Coordinate[];
	king: (numberOfRows: number, numberOfColumns: number) => Coordinate[];
	pawnB: (numberOfRows: number, numberOfColumns: number) => Coordinate[];
	pawnW: (numberOfRows: number, numberOfColumns: number) => Coordinate[];

	kingPalyers: (member: OptionalIndex) => Coordinate[];
	pawnPalyers: (member: OptionalIndex) => Coordinate[];
	knightPalyers: (member: OptionalIndex) => Coordinate[];

	checkPossibilities: (member: OptionalIndex, Coordinates: Coordinate[]) => any;
	check_Possibility: (Coordinates: Coordinate, member: OptionalIndex) => any;
	cellNonZero: (member: OptionalIndex, Coordinates: Coordinate) => any;
	move: (member: OptionalIndex, initialSelectedCoin: OptionalIndex) => any;
	checkmate: (initialSelectedCoin: OptionalIndex) => any;
}