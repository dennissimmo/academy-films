import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Film} from "../../../models/film.model";
import {ViewMode} from "../../../models/viewMode.enum";
import {Subscription} from "rxjs";
import {ViewModeService} from "../../../services/viewMode.service";
import {FilmsService} from "../../../services/films.service";

@Component({
  selector: 'film-grid',
  templateUrl: './film-grid.component.html',
  styleUrls: ['./film-grid.component.scss']
})
export class FilmGridComponent implements OnInit, OnDestroy {
  films: Array<Film>;
  viewMode: ViewMode;
  viewModeSubscription: Subscription;
  filmsUpdatesSubscription: Subscription;

  constructor(
    private viewModeService: ViewModeService,
    private filmsService: FilmsService
  ) { }

  get ViewMode() {
    return ViewMode;
  }

  ngOnInit(): void {
    this.viewModeSubscription = this.viewModeService.viewModeSubject
      .subscribe((mode: ViewMode) => {
        this.viewMode = mode;
      });
    this.viewModeService.initViewMode();
    this.filmsService.initialize();
    this.filmsUpdatesSubscription = this.filmsService.filmsUpdateSubject.subscribe((films: Film[]) => {
      this.films = films;
    })
  }

  onFilmRemoved(name: string) {
    this.filmsService.filmRemoved(name);
  }

  ngOnDestroy() {
    this.viewModeSubscription.unsubscribe();
    this.filmsUpdatesSubscription.unsubscribe();
  }
}
