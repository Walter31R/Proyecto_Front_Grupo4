/** private Long id;
    private String nombre;
    private String color;
    private Set<UsuarioDTO> usuarios; */

import { UsuarioDTO } from "./UsuarioDTO";

export interface ProyectoResponseDTO{
    id : number ,
    nombre : string,
    color : string,
    usuarios : UsuarioDTO[]
}