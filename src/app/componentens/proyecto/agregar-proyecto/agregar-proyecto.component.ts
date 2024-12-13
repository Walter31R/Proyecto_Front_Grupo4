import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { ProyectoDTO } from '../../../modelos/ProyectoDTO';
import { UserDTO } from '../../../modelos/UserDTO';
import { ProyectoService } from '../../../servicio/proyecto.service';
import { error } from 'console';
import { ProyectoRequestDTO } from '../../../modelos/ProyectoRequestDTO';

@Component({
  selector: 'app-agregar-proyecto',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './agregar-proyecto.component.html',
  styleUrl: './agregar-proyecto.component.css'
})
export class AgregarProyectoComponent implements OnInit {

  idUsuario : number;
  mensaje = " ";
  
  constructor(private proyectoService: ProyectoService, private router: Router) {
    const user = localStorage.getItem("user");
    this.idUsuario = Number(user);
   }
  
  

  ngOnInit(): void {
    
  }

  proyectoNuevo : ProyectoRequestDTO = {
    nombre: '',
    colorId: 1,
    usuarioIds: []
  }

  guardar():void{
    this.proyectoService.crearProyecto(this.proyectoNuevo,this.idUsuario).subscribe(
      data => {
          console.log(data.proyecto);
          this.mensaje  = data.message;
      },
      error => {
        console.log(error);
        this.mensaje = error.error?.message
      }
    )
  }

  


 

  


}
