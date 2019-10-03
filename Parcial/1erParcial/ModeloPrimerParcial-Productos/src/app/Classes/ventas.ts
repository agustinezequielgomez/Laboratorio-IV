import { Productos } from './productos';

export class Ventas extends Productos {
    public fechaDeVenta: Date;
    public cantidad: number;
}
