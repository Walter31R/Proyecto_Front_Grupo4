import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { TareaRequestDTO } from '../../../modelos/TareaRequestDTO';
import { TareasService } from '../../../servicio/tareas.service';

@Component({
  selector: 'app-editar-tareas',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './editar-tareas.component.html',
  styleUrl: './editar-tareas.component.css'
})
export class EditarTareasComponent implements OnInit {

  ngOnInit(): void {
    this.obtenerTarea();
  }
  nombreUsuario : string = "";
  idUsuario: number;
  id = JSON.parse(localStorage.getItem('idTarea') || '0');
  idProyecto = JSON.parse(localStorage.getItem('proyectoId') || '0');

  tareasNueva: TareaRequestDTO = {
    nombre: '',
    fechaVencimiento: new Date(),
    prioridad: '',
    proyectoId: 0,
    estado: ''
  };
  mensaje = " ";

  constructor(private tareaService: TareasService, private router: Router) {
    const user = localStorage.getItem("user");
    this.idUsuario = Number(user);

    //nombre del usuario
    const userName = localStorage.getItem("nombreUsuario");
    this.nombreUsuario = String(userName);
    
    // Obtener proyectoId desde localStorage y asignarlo
    const proyectoId = localStorage.getItem("proyectoId");
    if (proyectoId) {
      this.tareasNueva.proyectoId = Number(proyectoId);
    }
  }

  // Obtener tarea desde la API y verificar si proyectoId está correctamente asignado
  obtenerTarea(): void {
    this.tareaService.obtenerTareaPorId(this.idUsuario, this.id).subscribe(
      tarea => {
        this.tareasNueva = tarea.tarea;
        this.mensaje = tarea.message;

        // Si el proyectoId no está definido o es 0, asignamos el valor de localStorage
        if (!this.tareasNueva.proyectoId || this.tareasNueva.proyectoId === 0) {
          this.tareasNueva.proyectoId = this.idProyecto;
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

  // Actualizar tarea con los datos actuales
  actualizarTarea(): void {
    this.tareaService.actualizarTarea(this.idUsuario, this.id, this.tareasNueva).subscribe(
      data => {
        this.router.navigate(['/listarTarea']);
        this.mensaje = data.message;
        console.log("Tarea Actualizada : ", data.tarea);
      },
      error => {
        console.error("Error al actualizar tarea", error);
        this.mensaje = error.error?.message;
      }
    );
  }
}
