import { Component, Input } from '@angular/core';
import { ServicesDeseosProvider } from '../providers/deseos.service';
import { Lista } from '../models/lista.model';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar';




@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})
export class ListasComponent{

 @Input() completado:boolean;

    constructor(public deseosService:ServicesDeseosProvider, public navCtrl:NavController, public alertCtrl:AlertController){

    }

    listaSeleccionada(lista:Lista){
        this.navCtrl.push(AgregarPage, {
            titulo: lista.titulo,
            lista: lista
        })
    }

    borrarLista(lista: Lista){
        this.deseosService.borrarLista(lista);
    }

}
