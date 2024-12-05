import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importer FormsModule pour ngModel

import { AppComponent } from './app.component';
import { AudioSelectorComponent } from './audio-selector/audio-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Ajouter FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
