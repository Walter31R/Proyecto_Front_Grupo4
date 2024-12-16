import { Component } from '@angular/core';
import { TareaRequestDTO } from '../../../modelos/TareaRequestDTO';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { ProyectoService } from '../../../servicio/proyecto.service';
import { TareasService } from '../../../servicio/tareas.service';
import { ComentarioRequestDTO } from '../../../modelos/ComentarioRequestDTO';

@Component({
  selector: 'app-comentarios-tareas',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './comentarios-tareas.component.html',
  styleUrl: './comentarios-tareas.component.css'
})

export class ComentariosTareasComponent {

  mensaje = "";
  idUsuario: number;
  id = JSON.parse(localStorage.getItem('idTarea') || '0');

  comentario: ComentarioRequestDTO = {
    contenido: ''
  };

  constructor(private router: Router, private tareaService: TareasService) {
    const user = localStorage.getItem("user");
    this.idUsuario = Number(user);
  }

  agregarComentarios(): void {
    this.tareaService.agregarComentario(this.id, this.idUsuario, this.comentario).subscribe(
      data => {
        this.mensaje = data.message;
        console.log("mensaje: " , data);
        this.router.navigate(['/listarTarea']);
      },
      error => {
        console.log("error: " , error);
      }
    );
  }


}
