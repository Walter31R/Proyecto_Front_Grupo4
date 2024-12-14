import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TareaRequestDTO } from '../modelos/TareaRequestDTO';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http: HttpClient) {

  }

  url = "http://localhost:8082/api/tareas"


  crearTareas(tareaRequest: TareaRequestDTO, userId: number): Observable<any> {
    /**mandar infor por la URL mediante RequestParam */
    const urlCrear = `${this.url}/crearTarea?userId=${userId}`
    return this.http.post<any>(urlCrear, tareaRequest);
  }

  listarTareas(userId: number): Observable<any> {
    const urlListar = `${this.url}/listarTareas?userId=${userId}`
    return this.http.get<any>(urlListar);
  }

  obtenerTareaPorId(userId: number, id: number): Observable<any> {
    const urlListar = `${this.url}/obtenerTarea/${id}?userId=${userId}`;
    return this.http.get<any>(urlListar);
  }

  actualizarTarea(userId: number, id: number , tareaRequest: TareaRequestDTO): Observable<any> {
    console.log("userId: ", userId);
    console.log("id: ", id);
    const urlActualizar = `${this.url}/actualizarTarea/${id}?userId=${userId}`;
    return this.http.put<any>(urlActualizar , tareaRequest);
  }


  eliminarTareas(userId: number , id : number): Observable<any> {
    const urlEliminar = `${this.url}/borrarTarea/${id}?userId=${userId}`
    return this.http.delete<any>(urlEliminar);
  }












}
