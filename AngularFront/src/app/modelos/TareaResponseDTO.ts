/**  private Long id;
    private String nombre;
    private Date fechaVencimiento;
    private String prioridad;
    private String proyectoNombre;
    private String resultado;
    
    private List<ComentarioResponseDTO> comentarios;
    private List<String> usuarios;
    */

import { ComentarioResponseDTO } from "./ComentarioResponseDTO"

export interface TareaResponseDTO{
  
    id : number,
    nombre : string,
    fechaVencimiento : Date
    prioridad  :string,
    proyectoNombre : string,
    estado : string
    comentarios : ComentarioResponseDTO[],
    usuarios : string[]


}