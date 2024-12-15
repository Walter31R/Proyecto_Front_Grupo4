import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { ProyectoService } from '../../../servicio/proyecto.service';

@Component({
  selector: 'app-agregar-usuario',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],

  templateUrl: './agregar-usuario.component.html',
  styleUrl: './agregar-usuario.component.css'
})
export class AgregarUsuarioComponent implements OnInit {


  mensaje = "";
  correo : string = "ejemplo@hotmail.com";
  idUsuario: number;
  idProyecto = JSON.parse(localStorage.getItem('proyectoId') || '0');

 

  constructor(private proyectoService: ProyectoService, private router: Router) {
    const user = localStorage.getItem("user");
    this.idUsuario = Number(user);
  }


  ngOnInit(): void {
    console.log("Id usuario: " , this.idUsuario);
    console.log("Id proyecto: " , this.idProyecto);
  }


  agregarUsuario(): void {
    this.proyectoService.agregarUsuariosProyecto(this.idProyecto, this.idUsuario, this.correo).subscribe(
      data => {
        this.router.navigate(['/listarProyecto']);
        this.mensaje = data.message;
        console.log("Usuario Agregado : ", data.message);
      },
      error => {
        console.error("Error al agregar usuario ", error);
        console.error("Correo: ", this.correo);
        this.mensaje = error.error?.message;
      }
    );
  }











  //final
}