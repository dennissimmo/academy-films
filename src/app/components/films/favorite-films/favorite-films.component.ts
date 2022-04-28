import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmsService} from "../../../services/films.service";
import {Film} from "../../../models/film.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-favorite-films',
  templateUrl: './favorite-films.component.html',
  styleUrls: ['./favorite-films.component.scss']
})
export class FavoriteFilmsComponent implements OnInit, OnDestroy {
  favoriteFilms: Film[];
  filmsUpdatesSubscription: Subscription;

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.filmsUpdatesSubscription = this.filmsService.filmsUpdateSubject.subscribe((films: Film[]) => {
      this.favoriteFilms = films.filter(film => film.isFavourite);
    });

    if (!this.filmsService.films) {
      this.filmsService.initialize();
    } else {
      this.favoriteFilms = this.filmsService.getFavouriteFilms();
    }
  }

  ngOnDestroy(): void {
    this.filmsUpdatesSubscription.unsubscribe();
  }

  onFilmRemoved(name: string) {
    this.filmsService.filmRemoved(name);
    this.favoriteFilms = this.filmsService.getFavouriteFilms();
  }

  onFavoriteRemoved(name: string) {
    const index = this.favoriteFilms.findIndex(film => film.name === name);
    if (index !== -1) {
      this.favoriteFilms.splice(index, 1);
    }
  }
}
