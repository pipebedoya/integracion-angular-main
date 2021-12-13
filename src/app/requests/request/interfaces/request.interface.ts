import { ProponentexSolicitud } from "./proponentexsolicitud.interface";

export class Solicitud {
    id?:                   number;
    fecha_radicado?:       string;
    nombre_trabajo?:       string;
    descripcion?:          string;
    trabajo?:              string;
    id_tiposolicitud?:     number;
    id_modalidad?:         number;
    id_areainvestigacion?: number;
    id_estado?:            number;
    proponentexsolicituds?: ProponentexSolicitud[];
}