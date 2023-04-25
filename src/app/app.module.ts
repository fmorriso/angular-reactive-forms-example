import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { AboutComponent } from './about/about.component';
import {CustomMaterialModule} from "./shared/custom-material.module";

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    MaterialFormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
