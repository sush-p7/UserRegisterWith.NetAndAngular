import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
