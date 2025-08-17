import { Component } from '@angular/core';
import { Header } from '../../../common/components/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagelayout',
  imports: [Header, RouterOutlet],
  templateUrl: './pagelayout.html',
  styleUrl: './pagelayout.scss'
})
export class Pagelayout {

}
