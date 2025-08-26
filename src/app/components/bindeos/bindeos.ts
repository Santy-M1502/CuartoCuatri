import { Component } from '@angular/core';
import { LoginComponent } from '../login/login';
import { BienvenidaComponent } from '../bienvenida/bienvenida';
import { CommonModule } from '@angular/common'; // <- IMPORTAR CommonModule


@Component({
  selector: 'app-bindeos',
  standalone: true,
  imports: [LoginComponent, BienvenidaComponent, CommonModule],
  templateUrl: './bindeos.html',
  styleUrls: ['./bindeos.css'],
})
export class BindeosComponent {
  imageUrl = 'https://cdn.worldvectorlogo.com/logos/dragon-ball-z.svg';
  clics = 0;
  botonDeshabilitado = false;
  nombreLogueado = '';

  incrementar() {
    this.clics += 10;
  }

  alternarHabilitado() {
    this.botonDeshabilitado = !this.botonDeshabilitado;
  }

  onLoggedIn(usuario: string) {
    this.nombreLogueado = usuario;
  }
}
