/**/

export interface UserDTO {
    username: string;
}

export interface TareaDTO {
    nombre: string;
}

export interface ProyectoDTO {
    id: number;
    nombre: string;
    usuarios: UserDTO[];
    tareas: TareaDTO[];
    colorId: number;
}

export enum ColorEnum {
    ROJO,
    VERDE,
    AMARILLO,
    AZUL,
    CELESTE,
    TURQUESA,
}

// Definimos el mapa con un índice numérico
const colorMap: { [key: number]: string } = {
    1: 'ROJO',
    2: 'VERDE',
    3: 'AMARILLO',
    4: 'AZUL',
    5: 'CELESTE',
    6: 'TURQUESA'
};

// Función para obtener el color como cadena
export function getColorName(colorId: number): string {
    return colorMap[colorId];
}
