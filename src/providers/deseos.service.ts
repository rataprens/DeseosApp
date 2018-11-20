import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lista } from '../models/index';



@Injectable()
export class ServicesDeseosProvider {

  listas: Lista[] = [];

  constructor(public http: HttpClient) {
   
    const lista1 = new Lista('Recolectar piedras del infinito');
    const lista2 = new Lista('Heroes a vencer');
    this.listas.push(lista1, lista2);
    console.log(this.listas);
    this.cargarStorage();

  }

  agregarLista(lista:Lista){

    this.listas.push(lista);
    this.guardarStorage();
  }

  borrarLista(lista: Lista){
    this.listas = this.listas.filter(listData =>{
      return listData.id !== lista.id
    })
    this.guardarStorage();
  }

  guardarStorage(){
      localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage(){
      if(localStorage.getItem('data')){
        this.listas = JSON.parse(localStorage.getItem('data'));
      }else{
        this.listas = [];
      }
  }

}
