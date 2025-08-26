import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  usuario = '';
  password = '';
  @Output() loggedIn = new EventEmitter<string>();

  onSubmit() {
    if (this.usuario.trim() && this.password.trim()) {
      this.loggedIn.emit(this.usuario);
      this.password = '';
    }
  }
}
