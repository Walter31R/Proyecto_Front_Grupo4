import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule, Router } from '@angular/router'; // Asegúrate de que Router sea de Angular
import { TareasService } from '../../../servicio/tareas.service';
import { TareaResponseDTO } from '../../../modelos/TareaResponseDTO';
import { TareaRequestDTO } from '../../../modelos/TareaRequestDTO';

@Component({
  selector: 'app-agregar-tareas',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './agregar-tareas.component.html',
  styleUrl: './agregar-tareas.component.css'
})
export class AgregarTareasComponent {

  idUsuario: number;

  tareasNueva: TareaRequestDTO = {
    nombre: 'Nombre',
    fechaVencimiento: new Date(),
    prioridad: 'BAJA',
    proyectoId: 0,
    estado: 'NOTERMINADO'
  };
  mensaje = " ";

  constructor(private tareaService: TareasService, private router: Router) {
    const user = localStorage.getItem("user");
    this.idUsuario = Number(user);

    const proyectoId = localStorage.getItem("proyectoId");
    this.tareasNueva.proyectoId = Number(proyectoId);
  }

  guardar(): void {
    this.tareaService.crearTareas(this.tareasNueva, this.idUsuario).subscribe(
      data => {
        console.log(data.tarea);
        this.mensaje = data.message;

        // Si quieres navegar a otra ruta después de guardar, por ejemplo, a la lista de tareas
        this.router.navigate(['/tareas']); // Ejemplo de redirección a la ruta de tareas
      },
      error => {
        console.log(error);
        this.mensaje = error.error?.message;
      }
    );
  }

}
