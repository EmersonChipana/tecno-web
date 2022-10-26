import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiNavbarComponent } from './mi-navbar/mi-navbar.component';
import { MiCarruselComponent } from './mi-carrusel/mi-carrusel.component';
import { MiCardComponent } from './mi-card/mi-card.component';
import { MiFooterComponent } from './mi-footer/mi-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MiNavbarComponent,
    MiCarruselComponent,
    MiCardComponent,
    MiFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
