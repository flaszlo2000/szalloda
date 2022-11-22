import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SudenavListComponent } from './navigation/sudenav-list/sudenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RolunkComponent,
    NavtabsComponent,
    SudenavListComponent,
    HeaderComponent,
    KapcsolatComponent,
    GaleriaComponent,
    FoglalasComponent,
    SzolgaltatasokComponent,
    EtkezesComponent,
    StandardComponent,
    DeluxeComponent,
    ExecutiveComponent,
    JuniorComponent,
    LakosztalyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
