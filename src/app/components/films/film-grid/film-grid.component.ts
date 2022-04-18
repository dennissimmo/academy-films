import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Film} from "../../../models/film.model";
import {ViewMode} from "../../../models/viewMode.enum";
import {Subscription} from "rxjs";
import {ViewModeService} from "../../../services/viewMode.service";

@Component({
  selector: 'film-grid',
  templateUrl: './film-grid.component.html',
  styleUrls: ['./film-grid.component.scss']
})
export class FilmGridComponent implements OnInit, OnDestroy {
  viewMode: ViewMode;
  viewModeSubscription: Subscription;
  films: Film[] = [
    { name: 'Avengers', issueYear: 2012, boxOffice: 1518812988, poster: 'https://image.tmdb.org/t/p/w342/ltTLJvfn8PIx1d6niwS4A9IJ3yM.jpg'},
    { name: 'Avengers: Endgame', issueYear: 2019, boxOffice: 2797800564, poster: 'https://image.tmdb.org/t/p/w342/w0TeZ0oGijYVubQYAakm7eo41Gn.jpg'},
    { name: 'Avatar', issueYear: 2009, boxOffice: 2787965087, poster: 'https://image.tmdb.org/t/p/w342/uaRusyPlXRD4w3XPbfDDbO4jXST.jpg'},
    { name: 'Avatar', issueYear: 2009, boxOffice: 2787965087, poster: 'https://image.tmdb.org/t/p/w342/uaRusyPlXRD4w3XPbfDDbO4jXST.jpg'},
    { name: 'Avatar', issueYear: 2009, boxOffice: 2787965087, poster: 'https://image.tmdb.org/t/p/w342/uaRusyPlXRD4w3XPbfDDbO4jXST.jpg'},
    { name: 'Avatar', issueYear: 2009, boxOffice: 2787965087, poster: 'https://image.tmdb.org/t/p/w342/uaRusyPlXRD4w3XPbfDDbO4jXST.jpg'},
    { name: 'Avengers', issueYear: 2012, boxOffice: 1518812988, poster: ''},
    { name: 'Avengers', issueYear: 2012, boxOffice: 1518812988, poster: ''},
  ];

  constructor(private viewModeService: ViewModeService) { }

  get ViewMode() {
    return ViewMode;
  }

  ngOnInit(): void {
    this.viewModeService.initViewMode();
    this.viewModeSubscription = this.viewModeService.viewModeSubject
      .subscribe((mode: ViewMode) => {
        this.viewMode = mode;
    })
  }

  ngOnDestroy() {
    this.viewModeSubscription.unsubscribe();
  }


}
