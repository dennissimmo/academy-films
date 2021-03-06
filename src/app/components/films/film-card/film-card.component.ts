import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from "../../../models/film.model";
import {FilmsService} from "../../../services/films.service";

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {
  currentFilm: Film;

  @Input()
  set film(film: Film) {
    if (film === null || film === undefined) {
      return;
    }

    this.currentFilm = film;
  }

  @Output('filmRemoved')
  filmRemovedEventEmitter: EventEmitter<void> = new EventEmitter<void>();

  @Output('favoriteRemoved')
  favoriteRemovedEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private filmsService: FilmsService
  ) { }

  ngOnInit(): void {
  }

  removeFilm() {
    this.filmRemovedEventEmitter.emit();
  }

  toggleFavorite() {
    this.currentFilm.isFavourite = !this.currentFilm.isFavourite;
    if (!this.currentFilm.isFavourite) {
      this.favoriteRemovedEmitter.emit();
    }
    this.filmsService.updateFavorites();
  }
}
