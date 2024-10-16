import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiveOclockSomewhereComponent } from './pages/five-oclock-somewhere/five-oclock-somewhere.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    FiveOclockSomewhereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
