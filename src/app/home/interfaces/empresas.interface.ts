import { Proyecto } from "./proyectos.interface";

export interface Empresa {
    id_empresa: number;
    nombre_empresa: string;
    nombre_simple: string;
    cant_proyectos: number;
    alt_img?: string;
    proyectos?:Proyecto[];
}