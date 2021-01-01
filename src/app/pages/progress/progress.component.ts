import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})
export class ProgressComponent  {

 progreso1 : number = 25;
 progreso2 : number = 35;

 

 get getPorgreso1(){
   return `${this.progreso1}%`
 }
 get getPorgreso2(){
  return  `${this.progreso2}%`
}

cambioValorHijo(valor:number){
  console.log(valor)
  this.progreso1 = valor
}

}
