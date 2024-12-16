import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { TareaResponseDTO } from '../../../modelos/TareaResponseDTO';
import { TareasService } from '../../../servicio/tareas.service';

@Component({
  selector: 'app-listar-tareas',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './listar-tareas.component.html',
  styleUrl: './listar-tareas.component.css'
})
export class ListarTareasComponent implements OnInit {

   nombreUsuario : string = "";

  ngOnInit(): void {
    this.obtenerLista();
    
  }

  idUsuario: number;
  tareasLista: TareaResponseDTO[] = [];
  

  constructor(private tareasService: TareasService, private router: Router) {
    //id del usuario
    const user = localStorage.getItem("user");
    this.idUsuario = Number(user);

    //nombre del usuario
    const userName = localStorage.getItem("nombreUsuario");
    this.nombreUsuario = String(userName);
  }


  obtenerLista(): void {
    this.tareasService.listarTareas(this.idUsuario).subscribe(
      data => {
        this.tareasLista = data.tarea;
        console.log("lista: ", data.tarea);
      },
      error => {
        console.log("error: ", error);
      }
    )
  }

  crearTarea(): void {
    this.router.navigate(['/agregarTarea']);
  }

  actualizarTarea(tarea: TareaResponseDTO): void {
    const idTarea = localStorage.setItem("idTarea", tarea.id.toString());
    this.router.navigate(['/editarTarea']);
  }

  eliminarTarea(tarea: TareaResponseDTO): void {
    this.tareasService.eliminarTareas(this.idUsuario , tarea.id).subscribe(
      data => {
        //this.tareasLista = data.tarea;
        console.log("tarea: ", data.message);

      },
      error => {
        console.log("error: ", error);
      }
    )
  }

  agregarComentario(tarea: TareaResponseDTO): void{
    const idTarea = localStorage.setItem("idTarea", tarea.id.toString());
    /**Ruta para agregar comentario */
    this.router.navigate(['/agregarComentariosTareas']);
  }



}
