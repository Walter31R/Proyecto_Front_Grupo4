import { PrioridadEnum } from "./PrioridadEnum";

export interface TareaDTO{
     id: number;
     nombre: string;
     fechaVencimiento: Date;
     prioridad: PrioridadEnum;
     proyectoId: number;
}