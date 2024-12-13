export interface UserDTO {
    username : string,
    password : string,
    isEnabled : boolean,
    accountNoExpired : boolean,
    accountNoLocked : boolean,
    credentialNoExpired : boolean,
    nombreCliente : string,
    dni : string,
    email : string,
    roles:  string[]
}