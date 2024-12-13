import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { ProyectoService } from '../../../servicio/proyecto.service';
import { TareaDTO } from '../../../modelos/TareaDTO';
import { PrioridadEnum } from '../../../modelos/PrioridadEnum';
import { AgregarTareas } from '../../../modelos/AgregarTareas';
import { error } from 'console';

@Component({
  selector: 'app-agregar-tarea',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './agregar-tarea.component.html',
  styleUrl: './agregar-tarea.component.css'
})
export class AgregarTareaComponent  {



  constructor(
    private proyectoService: ProyectoService,
    private router: Router,
  ) { }

  
/**Primero esto */
  nuevaTareaDTO: TareaDTO = {
    id: 0,
    nombre: '',
    fechaVencimiento: new Date(),
    prioridad: PrioridadEnum["BAJA"],
    proyectoId: 0
  }

  /**al final esto */
  agregarNuevaTarea : AgregarTareas = {
    idProyecto: 0,
    tarea: {
      id: 0,
      nombre: '',
      fechaVencimiento: new Date(),
      prioridad: PrioridadEnum["BAJA"],
      proyectoId: 0
    }
  }



  mensaje = " ";

  agregarTarea(): void {
    const idProyecto = JSON.parse(localStorage.getItem('idProyecto')|| '1' );
    this.agregarNuevaTarea.idProyecto = idProyecto;
    
    this.agregarNuevaTarea.tarea.proyectoId = idProyecto;
    this.nuevaTareaDTO.proyectoId = idProyecto;

    this.agregarNuevaTarea.tarea = this.nuevaTareaDTO;
    

    this.proyectoService.agregarTarea(this.agregarNuevaTarea).subscribe(
      data => {
        this.mensaje = data.message;
        this.router.navigate(['/listarProyecto']);
      },
      error => {
        console.log("Error es: " , error);
      }
    )

    
  }


  //final
}
