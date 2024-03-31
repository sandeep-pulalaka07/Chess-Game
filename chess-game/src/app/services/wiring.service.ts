import { Injectable } from '@angular/core';
import { Cell } from '../_/interfaces/cell.interface';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WiringService {

	constructor() { }

	selcetedCoin$ = new Subject();

}
