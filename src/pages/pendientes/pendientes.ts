import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesDeseosProvider } from '../../providers/deseos.service';
import { AgregarPage } from '../agregar/agregar';
import { AlertController } from 'ionic-angular';





@IonicPage()
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {
  
  url:string;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public deseosService:ServicesDeseosProvider,
              public alertCtrl: AlertController) {
      this.url = "assets/imgs/pendientes.jpg";
  }

  verAgregar(){
    this.navCtrl.push(AgregarPage);
  }

  agregarItem(){
    const prompt = this.alertCtrl.create({
      title: 'Nueva Lista',
      message: 'Ingrese una nueva lista',
      inputs:[
        {
          name: 'titulo',
          placeholder: 'titulo'
        }
      ],
      buttons:[
        {
          text: 'Guardar',
          handler: data =>{
            if(data.titulo.length === 0){
              return;
            }else{
              this.navCtrl.push(AgregarPage, {
                titulo: data.titulo
              });
              console.log(data);
            }
            
          }
        },{
          text: 'Cancelar'
        }
      ] 
    });

    prompt.present();
  }
}
