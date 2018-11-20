import { Component } from '@angular/core';

import { TerminadosPage } from '../terminados/terminados';
import { PendientesPage } from '../pendientes/pendientes';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabPendientes = PendientesPage;
  tabTerminados = TerminadosPage;

  constructor() {

  }
}
