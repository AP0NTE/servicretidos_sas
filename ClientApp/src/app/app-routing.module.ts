import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonaConsultaComponent } from './persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './persona-registro/persona-registro.component';
const routes: Routes = [
{
path: '',
component: HomeComponent
},
{
  path:'personaRegistro',component: PersonaRegistroComponent
},
{
  path:'personaConsulta',component: PersonaConsultaComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
],
exports:[RouterModule]
})
export class AppRoutingModule { }
