import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Activity } from './activity/activity';

@Component({
  selector: 'app-root',
  imports: [ Activity ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('bergut-web');
}
