import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  indexPregunta = 1;

  public preguntas: Pregunta[] = [
    new Pregunta('Cual es la capital de España', [
      new Respuesta('Madrid', 1),
      new Respuesta('Barcelona', 0),
      new Respuesta('Bilbao', 0),
      new Respuesta('Sevilla', 0),
    ]),
    new Pregunta('Cual es la capital de Francia', [
      new Respuesta('Paris', 1),
      new Respuesta('Burdeos', 0),
      new Respuesta('Londres', 0),
      new Respuesta('Atenas', 0),
    ]),
    new Pregunta('Cual es la capital de Egipto', [
      new Respuesta('Londres', 0),
      new Respuesta('Berlin', 0),
      new Respuesta('El Cairo', 1),
      new Respuesta('Casablanca', 0),
    ]),
  ];
  constructor() { }

  getPreguntas(){
    return this.preguntas.slice();
  }

}
