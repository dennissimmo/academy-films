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
    { name: 'Avengers', issueYear: 2012, boxOffice: 23400, poster: 'https://image.tmdb.org/t/p/w342/ltTLJvfn8PIx1d6niwS4A9IJ3yM.jpg'},
    { name: 'Beauty and The Beast', issueYear: 2017, boxOffice: 1263521126, poster: 'https://i.kinobaza.com.ua/posters/300x450/60fe786edac1d.jpg'},
    { name: 'Avatar', issueYear: 2009, boxOffice: 980, poster: 'https://image.tmdb.org/t/p/w342/uaRusyPlXRD4w3XPbfDDbO4jXST.jpg'},
    { name: 'Titanic', issueYear: 1997, boxOffice: 	2186772302, poster: 'https://image.tmdb.org/t/p/w342/2XmEN166CfFcJIU62PYmVTxSm4p.jpg'},
    { name: 'Spider-Man: No Way Home', issueYear: 2021, boxOffice: 1892095052, poster: 'https://image.tmdb.org/t/p/w342/8GbtUB55JYQfo1xA48bbx5baxcO.jpg'},
    { name: 'Jurassic World', issueYear: 2015, boxOffice: 1671713208, poster: 'https://image.tmdb.org/t/p/w342/mu8CzE6CPZMZIyTe6g2p2TLTBwX.jpg'}
  ];

  constructor(private viewModeService: ViewModeService) { }

  get ViewMode() {
    return ViewMode;
  }

  ngOnInit(): void {
    this.viewModeSubscription = this.viewModeService.viewModeSubject
      .subscribe((mode: ViewMode) => {
        this.viewMode = mode;
      });
    this.viewModeService.initViewMode();
  }

  ngOnDestroy() {
    this.viewModeSubscription.unsubscribe();
  }


}
