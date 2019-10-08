import { Pelicula } from 'src/app/Classes/peliculas';
export class Parche extends Pelicula {
    public id: number;
    public nombre: string;
    public apellido: string;
    public nacionalidad: string;
    public fechaDeNacimiento: Date;
    public nombrePelicula: string;
}
