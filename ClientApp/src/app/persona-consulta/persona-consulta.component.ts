import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {
  persona: Persona[];
  filtro: string;
  hola = 'hola';

  constructor(private personaService : PersonaService) { }

  ngOnInit() {
    this.get();
  }
  get(){
    this.persona = this.personaService.get();
    this.hola = this.persona[0].nombre;
    console.log(this.persona);
  }
  transform(currency: number): string {
    return currency.toString().replace(/./g, ',');
  }

}
