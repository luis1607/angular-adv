import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuario=>{
      console.log(usuario);
    });

    /* const promesa = new Promise<string>((resolve,reject)=>{

      if(false){
      resolve('Hola mundo');
    }
    else reject('algo salio mal ')
    });

    promesa.then((resol)=>{
      console.log(resol)
    }).catch((reject)=>{
      console.log(reject)
    })

    console.log('fin del init'); */
  }

  getUsuarios(){

    const promesa = new Promise(resol=>{
      fetch('https://reqres.in/api/users')
      .then( resp=> resp.json())
      .then( body=> resol(body.data))
    });

    return promesa;
    
  }

}
