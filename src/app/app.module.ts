import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainToolBarComponent } from './components/main-tool-bar/main-tool-bar.component';
import { FilmToolBarComponent } from './components/films/film-tool-bar/film-tool-bar.component';
import { FilmCardComponent } from './components/films/film-card/film-card.component';
import { FilmGridComponent } from './components/films/film-grid/film-grid.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {PrettyFormatPipe} from "./pipes/pretty-format.pipe";

@NgModule({
    declarations: [
        AppComponent,
        MainToolBarComponent,
        FilmToolBarComponent,
        FilmCardComponent,
        FilmGridComponent,
        PrettyFormatPipe
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        MatSlideToggleModule,
        FormsModule,
        MatIconModule,
        HttpClientModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
