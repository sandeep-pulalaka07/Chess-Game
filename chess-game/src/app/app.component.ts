import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChessComponent } from './chess/chess.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // host: {ngSkipHydration: 'true'},
  imports: [RouterOutlet,ChessComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'chess-game';
}
