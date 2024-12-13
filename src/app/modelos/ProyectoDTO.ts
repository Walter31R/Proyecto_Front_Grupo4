import { TareaDTO } from "./TareaDTO";
import { UserDTO } from "./UserDTO";

export interface ProyectoDTO{
   
    
     id: number;
     nombre: string;
     usuarios: UserDTO[]; //se inicializa con el user de turno
     tareas: TareaDTO[];
     colorId: number;
     

}