/**
 * MÓDULE: 
 *  - Toda página/componente deve estar declarado em um módulo da aplicação 
 *  - Por padrão, criaremos um módulo para cada página 
 */
import { IonicPageModule } from 'ionic-angular/module'; 
import { NgModule } from '@angular/core'; 
 
import { HomePage } from './home'; //IMPORTANTE!!! O nome "HomePage", DEVE estar com o MESMO nome da classe no CONTROLLER
 
@NgModule({ 
    declarations: [HomePage], //PÁGINA
    imports: [IonicPageModule.forChild(HomePage)] //PADRÃO PARA SUBMÓDULO
}) 
export class HomeModule { 
} 