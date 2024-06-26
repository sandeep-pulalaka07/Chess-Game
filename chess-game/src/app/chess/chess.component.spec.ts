import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessComponent } from './chess.component';

describe('DemoComponent', () => {
	let component: ChessComponent;
	let fixture: ComponentFixture<ChessComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ChessComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ChessComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
