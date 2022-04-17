import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainToolBarComponent } from './components/main-tool-bar/main-tool-bar.component';
import { FilmToolBarComponent } from './components/films/film-tool-bar/film-tool-bar.component';
import { FilmCardComponent } from './components/films/film-card/film-card.component';
import { FilmGridComponent } from './components/films/film-grid/film-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MainToolBarComponent,
    FilmToolBarComponent,
    FilmCardComponent,
    FilmGridComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
