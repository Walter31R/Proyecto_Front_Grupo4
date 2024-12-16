import { Component, OnInit } from '@angular/core';
import { ColorEnum } from '../../../modelos/ts';
import { ProyectoService } from '../../../servicio/proyecto.service';
import { error } from 'console';
import { ProyectoRequestDTO } from '../../../modelos/ProyectoRequestDTO';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-editar-proyecto',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './editar-proyecto.component.html',
  styleUrl: './editar-proyecto.component.css'
})
export class EditarProyectoComponent implements OnInit {

  idUsuario: number;
  id = JSON.parse(localStorage.getItem('proyectoId') || '0');
  message = " ";

  proyectos: ProyectoRequestDTO = {
    nombre: '',
    colorId: 0,
    usuarioIds: []
  }

  constructor(private proyectoService: ProyectoService, private router: Router) {

    const user = localStorage.getItem("user");
    this.idUsuario = Number(user);

  }
  ngOnInit(): void {
    this.obtenerProyecto();
  }

  ColorEnum = ColorEnum;

  // Mapa de colores CSS
  colorMap: { [key: number]: string } = {
    [ColorEnum.ROJO]: 'red',
    [ColorEnum.VERDE]: 'green',
    [ColorEnum.AMARILLO]: 'yellow',
    [ColorEnum.AZUL]: 'blue',
    [ColorEnum.CELESTE]: 'lightblue',
    [ColorEnum.TURQUESA]: 'turquoise',
  };


  private obtenerProyecto(): void {

    this.proyectoService.obtenerProyectoPorId(this.idUsuario, this.id).subscribe(
      data => {
        this.proyectos = data.proyecto;
        this.message = data.message;
        console.log("Proyecto sin Actualizar : ", this.proyectos);
        console.log("Id", this.id);
        console.log("User", this.idUsuario);
      }, error => {
          console.log("error al obtener: ", error)
          this.message = error.error?.message;
      }
    )
  }

  actualizarProyecto(): void {
    this.proyectoService.actualizarProyecto(this.id, this.proyectos, this.idUsuario).subscribe(
      data => {
        this.router.navigate(['/listarProyecto']);
        this.message = data.message;
      },
      error => {
        console.error("Error al actualizar alumno", error);
      }
    );
  }


}




