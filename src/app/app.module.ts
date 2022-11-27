import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { SzobakComponent } from './szalloda/szobak/szobak.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RolunkComponent,
    NavtabsComponent,
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
    LakosztalyComponent,
    SidenavListComponent,
    SzobakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
