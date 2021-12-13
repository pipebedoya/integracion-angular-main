import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './public/error/not-found/not-found.component';
import { FooterComponent } from './public/template/footer/footer.component';
import { NavbarComponent } from './public/template/navbar/navbar.component';
import { HeaderComponent } from './public/template/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
