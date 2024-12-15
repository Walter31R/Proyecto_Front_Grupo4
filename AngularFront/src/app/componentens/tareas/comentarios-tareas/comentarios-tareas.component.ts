import { Component } from '@angular/core';
import { TareaRequestDTO } from '../../../modelos/TareaRequestDTO';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { ProyectoService } from '../../../servicio/proyecto.service';
import { TareasService } from '../../../servicio/tareas.service';

@Component({
  selector: 'app-comentarios-tareas',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './comentarios-tareas.component.html',
  styleUrl: './comentarios-tareas.component.css'
})
export class ComentariosTareasComponent {

  mensaje = "";
  correo = "";
  idUsuario: number;
  id = JSON.parse(localStorage.getItem('idTarea') || '0');

   tareasNueva: TareaRequestDTO = {
      nombre: '',
      fechaVencimiento: new Date(),
      prioridad: '',
      proyectoId: 0,
      estado: ''
    };
    
     constructor(private proyectoService: ProyectoService, private router: Router , private tareaService:TareasService) {
        const user = localStorage.getItem("user");
        this.idUsuario = Number(user);
    
        // Obtener proyectoId desde localStorage y asignarlo
        const proyectoId = localStorage.getItem("proyectoId");
        if (proyectoId) {
          this.tareasNueva.proyectoId = Number(proyectoId);
        }
      }

      obtenerTarea(): void {
        this.tareaService.obtenerTareaPorId(this.idUsuario, this.id).subscribe(
          tarea => {
            this.tareasNueva = tarea.tarea;
            this.mensaje = tarea.message;
    
            // Si el proyectoId no está definido o es 0, asignamos el valor de localStorage
            if (!this.tareasNueva.proyectoId || this.tareasNueva.proyectoId === 0) {
             // this.tareasNueva.proyectoId = this.idProyecto;
            }
    
            console.log("Tarea sin Actualizar : ", tarea.tarea);
            console.log("Id", this.id);
            console.log("User", this.idUsuario);
            console.log("proyectoId", this.tareasNueva.proyectoId);
          }, 
          error => {
            console.log("error: ", error);
            this.mensaje = error.error?.message;
          }
        );
      }

}
