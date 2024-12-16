import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectoDTO } from '../modelos/ProyectoDTO';
import { AgregarTareas } from '../modelos/AgregarTareas';
import { ProyectoRequestDTO } from '../modelos/ProyectoRequestDTO';
import { UserEntity } from '../modelos/UserEntity';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8082/api/v1/proyecto"

  agregarProyecto(proyectoDTO: ProyectoDTO): Observable<any> {
    return this.http.post<any>(this.url + "/agregar", proyectoDTO)
  }

  listarProyecto(): Observable<any> {
    return this.http.get<any>(this.url + "/listar")
  }

  agregarTarea(agregarTareas: AgregarTareas): Observable<any> {
    return this.http.post<any>(this.url + "/agregarTarea", agregarTareas);
  }



  /**------Nuevos metodos------- */
  crearProyecto(proyectoDTO: ProyectoRequestDTO, userE: number): Observable<any> {

    const url = `${this.url}/crearProyecto?userId=${userE}`;
    return this.http.post<any>(url, proyectoDTO);
  }

  /**@GetMapping("/obtenerPorId/{proyectoId}")
      //@PreAuthorize("hasRole('ADMIN')")
      public ResponseEntity<Map<String,Object>> obtenerProyectoPorId
      (@PathVariable Long proyectoId,
       @RequestParam Long userId) 
  */

  obtenerProyectoPorId(proyectoId: number, userE: number): Observable<any> {

    return this.http.get<any>(`${this.url}/obtenerPorId/${proyectoId}?userId=${userE}`);
  }

  listarProyectos(idUsuario: number): Observable<any> {

    return this.http.get<any>(this.url + "/usuario/" + idUsuario);
  }

  actualizarProyecto(proyectoId: number, proyectoDTO: ProyectoRequestDTO, userId: number): Observable<any> {
    return this.http.put<any>(`${this.url}/actualizarProyecto/${proyectoId}?userId=${userId}`, proyectoDTO);
  }


  eliminarProyecto(proyectoId: number, userId: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/eliminarProyecto/${proyectoId}?userId=${userId}`);
  }



  /**Agregar usuarios a proyectos */
  /** @PatchMapping("/agregarInvitado/{proyectoId}")
      public ResponseEntity<Map<String, Object>> agregarInvitado(
      @PathVariable Long proyectoId,                                                                
      @RequestParam Long userId,                                                            
      @RequestParam String invitado
    )
*/

  agregarUsuariosProyecto(proyectoId: number, userId: number, invitado: string): Observable<any> {
    return this.http.patch<any>(`${this.url}/agregarInvitado/${proyectoId}?userId=${userId}&invitado=${invitado}`, {});
  }



}
