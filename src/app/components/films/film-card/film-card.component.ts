import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../../../models/film.model";

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

  constructor() { }

  ngOnInit(): void {
  }

}
