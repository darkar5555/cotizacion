import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Form, FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular material
import 'hammerjs';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { PuntosComponent } from './puntos/puntos.component';
import { ProformaComponent } from './proforma/proforma.component';



@NgModule({
  declarations: [
    AppComponent,
    PuntosComponent,
    ProformaComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
