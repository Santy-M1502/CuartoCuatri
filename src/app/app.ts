import { Component } from '@angular/core';
import {  } from './components/bienvenida/bienvenida';
import { BindeosComponent } from './components/bindeos/bindeos';

@Component({BienvenidaComponent
  selector: 'app-root',
  standalone: true,
  imports: [BienvenidaComponent, BindeosComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  nombreUsuario = 'Ricardo';
}
