import { Component } from '@angular/core';
import {  BienvenidaComponent} from './components/bienvenida/bienvenida';
import { BindeosComponent } from './components/bindeos/bindeos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BienvenidaComponent, BindeosComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  nombreUsuario = 'Ricardo';
}
