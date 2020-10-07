import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';
@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  persona: Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.persona = new Persona;
  }
  add() {
    var interes = (this.persona.tasa_deinteres / 100);
    interes = interes + 1;
    var total = Math.pow(interes, this.persona.tiempo_duracion);
    var totalValor = this.persona.capitalInicial * total;
    this.persona.valor_total = this.formatearNumero(Math.round(totalValor));
    alert('Agregado' + JSON.stringify(this.persona));
    this.personaService.post(this.persona);
  }
  formatearNumero(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    console.log(x1 + x2);
    return x1 + x2;
}
}
