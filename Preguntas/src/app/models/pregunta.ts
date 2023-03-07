import { Respuesta } from "./respuesta";

export class Pregunta{
    descripcionPregunta!: string;
    respuesta!: Respuesta[];

    constructor(descripcionRespuesta: string, respuestas: Respuesta[]){
      this.descripcionPregunta = descripcionRespuesta;
      this.respuesta = respuestas;
    }
}
