/** private Long id;
    private String nombre;
    private Date fechaVencimiento;
    private String prioridad;
    private String proyectoNombre;*/

export interface TareaResponseDTO{
    id : number,
    nombre : string,
    fechaVencimiento : Date
    prioridad  :string,
    proyectoNombre : string,
    
    estado : string
}