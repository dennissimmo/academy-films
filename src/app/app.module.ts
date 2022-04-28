import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainToolBarComponent } from './components/main-tool-bar/main-tool-bar.component';
import { FilmToolBarComponent } from './components/films/film-tool-bar/film-tool-bar.component';
import { FilmCardComponent } from './components/films/film-card/film-card.component';
import { FilmGridComponent } from './components/films/film-grid/film-grid.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {PrettyFormatPipe} from "./pipes/pretty-format.pipe";
import { MatDialogModule} from "@angular/material/dialog";
import {FilmAddFormComponent} from "./components/films/film-add-form/film-add-form.component";
import {MatInputModule} from "@angular/material/input";
import {UkrainianDatePipe} from "./pipes/ukrainian-date.pipe";
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
    declarations: [
        AppComponent,
        MainToolBarComponent,
        FilmToolBarComponent,
        FilmCardComponent,
        FilmGridComponent,
        PrettyFormatPipe,
        FilmAddFormComponent,
        UkrainianDatePipe
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        MatSlideToggleModule,
        FormsModule,
        MatIconModule,
        HttpClientModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatTooltipModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
