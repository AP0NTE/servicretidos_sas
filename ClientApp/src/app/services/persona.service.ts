import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }
  get(): Persona[] {
    console.log(JSON.parse(localStorage.getItem('datos')));
    return JSON.parse(localStorage.getItem('datos'));
  }
  post(persona: Persona) {
    let personas: Persona[] = [];
    if (this.get() != null) {
      personas = this.get();
    }
    personas.push(persona);
    console.log(persona);
    localStorage.setItem('datos', JSON.stringify(personas));
  }
}
