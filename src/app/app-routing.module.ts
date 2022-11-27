import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FoglalasComponent } from './foglalas/foglalas.component';
import { SzolgaltatasokComponent } from './szalloda/szolgaltatasok/szolgaltatasok.component';
import { EtkezesComponent } from './szalloda/etkezes/etkezes.component';
import { StandardComponent } from './szalloda/szobak/standard/standard.component';
import { DeluxeComponent } from './szalloda/szobak/deluxe/deluxe.component';
import { ExecutiveComponent } from './szalloda/szobak/executive/executive.component';
import { JuniorComponent } from './szalloda/szobak/junior/junior.component';
import { LakosztalyComponent } from './szalloda/szobak/lakosztaly/lakosztaly.component';
import { SzobakComponent } from './szalloda/szobak/szobak.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rolunk', component: RolunkComponent },
  { path: 'kapcsolat', component: KapcsolatComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'foglalas', component: FoglalasComponent },
  { path: 'szolgaltatasok', component: SzolgaltatasokComponent },
  { path: 'etkezes', component: EtkezesComponent },
  { path: 'szobak/standard', component: StandardComponent },
  { path: 'szobak/deluxe', component: DeluxeComponent },
  { path: 'szobak/executive', component: ExecutiveComponent },
  { path: 'szobak/junior', component: JuniorComponent },
  { path: 'szobak/lakosztaly', component: LakosztalyComponent },
  { path: 'szobak', component: SzobakComponent },
  {
    "path": "admin",
    "component": AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
