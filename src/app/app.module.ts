import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiveOclockSomewhereComponent } from './pages/five-oclock-somewhere/five-oclock-somewhere.component';

@NgModule({
  declarations: [
    AppComponent,
    FiveOclockSomewhereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
