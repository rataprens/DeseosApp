import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';
import { PendientesPage } from '../pages/pendientes/pendientes';
import { TerminadosPage } from '../pages/terminados/terminados';
import { AgregarPage } from '../pages/agregar/agregar';

import { ListasComponent } from '../components/listas.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServicesDeseosProvider } from '../providers/deseos.service';
import { HttpClientModule } from '@angular/common/http';
import { FiltroCompletadoPipe } from '../pipes/filtro-completado/filtro-completado';





@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    FiltroCompletadoPipe,
    ListasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    ListasComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesDeseosProvider
  ]
})
export class AppModule {}
