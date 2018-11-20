import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesDeseosProvider } from '../../providers/deseos.service';
import { Lista } from '../../models/index';
import { AgregarPage } from '../agregar/agregar';




@IonicPage()
@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.html',
})
export class TerminadosPage {

  url:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public deseoService:ServicesDeseosProvider) {
    this.url= "assets/imgs/completados.jpg";
  }


}
