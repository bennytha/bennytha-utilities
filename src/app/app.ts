import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './common/components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'revise_angular';
}
