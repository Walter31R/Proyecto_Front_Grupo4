import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { UsuarioService } from '../../../servicio/usuario.service';
import { UserDTO } from '../../../modelos/UserDTO';
import { SharedComponent } from "../../compartido/shared/shared.component";

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule, SharedComponent],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {

  constructor(private usuarioServicio: UsuarioService, private router: Router) { }

  userDTO: UserDTO = {
    username: '',
    password: '',
    isEnabled: true,
    accountNoExpired: true,
    accountNoLocked: true,
    credentialNoExpired: true,
    nombreCliente: '',
    dni: '',
    email: '',
    roles: []
  };

  mensaje: string = '';
  userNameSuggestion: string = '';
  passwordSuggestion: string = '';
  isUsernameFocused: boolean = false;

  registrarUsuario() {
    if (!this.userDTO.username || !this.userDTO.password || !this.userDTO.email || !this.userDTO.dni || !this.userDTO.nombreCliente) {
      this.mensaje = 'Por favor, complete todos los campos obligatorios.';
      this.mensaje = '';
      return;
    }


    this.usuarioServicio.registrarUsuario(this.userDTO).subscribe({
      next: (response) => {
        this.mensaje = response.message;
        console.log('Usuario registrado exitosamente:', response);
      },

      error: (err) => {
        
        //Mientras haya un JSON y un JSON que tenga la clave de "message" 
        if (err.error && err.error.message) {
          this.mensaje = err.error.message; // Esto asegura que el mensaje del backend se muestre.
        } else {
          this.mensaje = 'Error inesperado al registrar el usuario.';
        }
        console.error('Error al registrar:', err);
      }

    })
  }

  /*Generar sugerencias */
  generarSugerencias() {

    if (this.isUsernameFocused) {
      return;
    }

    const nombre = this.userDTO.nombreCliente.trim().toLocaleLowerCase();
    if (nombre) {
      const randomNum = Math.floor(Math.random() * 1000);
      this.userNameSuggestion = `${nombre.substring(0, 3)}${randomNum}`;
    }
    if (nombre)
      this.passwordSuggestion = this.generarContraseñaAleatoria(6);
    else
      this.passwordSuggestion = '';
  }

  generarContraseñaAleatoria(length: number): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }

  onUsernameFocus() {
    this.isUsernameFocused = true;
  }

  onUsernameBlur() {
    this.isUsernameFocused = false;
  }


}