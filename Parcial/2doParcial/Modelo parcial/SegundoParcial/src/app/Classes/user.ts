export class User {
    public id: number;
    public email: string;
    public password: string;
    public type: number;
    public path: string;
}

export enum UserRoles {
    Alumno = 1,
    Profesor = 2,
    Administrador = 3
}