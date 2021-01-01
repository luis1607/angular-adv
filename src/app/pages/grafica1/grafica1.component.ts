import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  public labels1: string[] = ['Tacos','Empanadas','Pastas']
  public data1 = [
    [40,220,400]
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  // events
 

}
