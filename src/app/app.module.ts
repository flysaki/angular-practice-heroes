import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
  ],
  imports: [
        BrowserModule,
        RouterModule,
        FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
