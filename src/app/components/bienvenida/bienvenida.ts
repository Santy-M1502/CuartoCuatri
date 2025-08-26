import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  templateUrl: './bienvenida.html',
  styleUrls: ['./bienvenida.css'],
})
export class BienvenidaComponent {
  @Input() nombre = 'Mundo';
}
