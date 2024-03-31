import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

	
	board: any[][] = [];
	numberOfRows: number = 8;
	numberOfColumns: number = 8;
	// coordinates: Coordinate[] = [];
	// initialSelectedCoin!: OptionalIndex;
	game() {
		this.board = new Array(this.numberOfRows);
		for (let i = 0; i < this.numberOfRows; i++) {
			this.board[i] = new Array(this.numberOfColumns);
			for (let j = 0; j < this.numberOfColumns; j++) {
				this.board[i][j] = 20
			}
		}
		// this.prepareBoard()
	}
	ngOnInit(): void {
		this.game();
		console.log(this.board);
		
		// console.log(this.game);
		
	}
}
