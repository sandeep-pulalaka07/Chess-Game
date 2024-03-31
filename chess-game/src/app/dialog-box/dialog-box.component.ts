import { Component, Inject, OnInit } from '@angular/core';
import { POWERSBLACk } from '../_/const/assigning-black-fontAwesome';
import { POWERSWHITE } from '../_/const/assigning-white-fontAwesome';
import { Cell } from '../_/interfaces/cell.interface';
import { Coins } from '../_/enums/coins.enum';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
})
export class DialogBoxComponent implements OnInit {
  blackCoin = POWERSBLACk;
  whiteCoin = POWERSWHITE;
  fakeData: any = [];

  selectedCell!: Cell;

  constructor(
    private dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cell
  ) {}

  ngOnInit(): void {
    this.remove(this.data);
  }

  remove(cell: Cell) {
    const coins = cell.isBlackCoin ? this.blackCoin : this.whiteCoin;
    coins.forEach((coins: Cell, index: number) => {
      if (index <= 7) this.fakeData.push(coins);
    });
    let king = this.fakeData.findIndex(
      (cell: Cell) => cell.clue === Coins._bKing || cell.clue === Coins._wKing
    );
    if (king > -1) this.fakeData.splice(king, 1);
  }

  onClick(cell: Cell) {
    this.selectedCell = cell;
  }

  submit() {
    this.dialogRef.close(this.selectedCell);
  }
}
