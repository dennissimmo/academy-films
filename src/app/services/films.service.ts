import {Injectable} from "@angular/core";
import {Film} from "../models/film.model";
import {lastValueFrom, Observable, Subject} from "rxjs";
import {SortMode} from "./sort-mode.enum";
import {HttpClient} from "@angular/common/http";

export const PATH_TO_FILMS = './assets/data/';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  films: Film[];
  filmsUpdateSubject: Subject<Array<Film>>;
  defaultFilms: Film[] = [
    { name: 'Avengers', issueYear: 2012, boxOffice: 23400, poster: 'https://image.tmdb.org/t/p/w342/ltTLJvfn8PIx1d6niwS4A9IJ3yM.jpg', actors: [{ name : 'Peter', surname: 'Andersen' }], createdAt: new Date(1650494565)},
    { name: 'Beauty and The Beast', issueYear: 2017, boxOffice: 1263521126, poster: 'https://i.kinobaza.com.ua/posters/300x450/60fe786edac1d.jpg', actors: [{ name : 'Zoe', surname: 'Saldana' }], createdAt: new Date("2009-12-17T03:24:00")},
    { name: 'Avatar', issueYear: 2009, boxOffice: 980, poster: 'https://image.tmdb.org/t/p/w342/uaRusyPlXRD4w3XPbfDDbO4jXST.jpg', actors: [ { name : 'Sigourney', surname: 'Weaver' }, { name : 'Zoe', surname: 'Saldana' }], createdAt: new Date(Date.now())},
    { name: 'Titanic', issueYear: 1997, boxOffice: 	2186772302, poster: 'https://image.tmdb.org/t/p/w342/2XmEN166CfFcJIU62PYmVTxSm4p.jpg', actors: [{ name : 'Zoe', surname: 'Saldana' }], createdAt: new Date("December 17, 2021 09:10:02")},
    { name: 'Spider-Man: No Way Home', issueYear: 2021, boxOffice: 1892095052, poster: 'https://image.tmdb.org/t/p/w342/8GbtUB55JYQfo1xA48bbx5baxcO.jpg', actors: [{ name : 'Zoe', surname: 'Saldana' }], createdAt: new Date(1647816165)},
    { name: 'Jurassic World', issueYear: 2015, boxOffice: 1671713208, poster: 'https://image.tmdb.org/t/p/w342/mu8CzE6CPZMZIyTe6g2p2TLTBwX.jpg', actors: [{ name : 'Zoe', surname: 'Saldana' }], createdAt: new Date(1616280165)}
  ];

  constructor(private http: HttpClient) {
    this.filmsUpdateSubject = new Subject<Array<Film>>();
  }

  public initialize() {
    this.loadFilmsFromAssets()
      .then((films: Array<Film>) => {
        this.films = films.map(film => {
          film.createdAt = new Date(film.createdAt);
          return film;
        });
        this.filmsUpdateSubject.next(this.films);
      });
  }

  public async loadFilmsFromAssets(): Promise<Array<Film>> {
    const films$: Observable<Array<Film>> = this.http.get<Array<Film>>(PATH_TO_FILMS + 'films.json');

    return await lastValueFrom(films$, { defaultValue: this.defaultFilms })
      .then((films: Array<Film>) => films);
  }

  public getFilms(): Film[] {
    return this.films;
  }

  public filmAdded(film: Film) {
    this.films.push(film);
    this.filmsUpdateSubject.next(this.films);
  }

  public filmRemoved(name: string) {
    const index = this.films.findIndex(film => film.name === name);
    if (index !== -1) {
      this.films.splice(index, 1);
    }
    this.filmsUpdateSubject.next(this.films);
  }

  public searchFilms(searchToken: string) {
    if (!searchToken || searchToken.trim().length === 0) {
      this.filmsUpdateSubject.next(this.films);
    } else {
      const filteredFilms: Film[] = this.films.filter(film => film.name.toLowerCase().indexOf(searchToken) >= 0);
      this.filmsUpdateSubject.next(filteredFilms);
    }
  }

  public sortModeChanged(sortMode: SortMode) {
    switch (sortMode) {
      case SortMode.BY_NAME:
        this.sortByName();
        break;
      case SortMode.BY_RELEASE_YEAR:
        this.sortByReleaseYear();
        break;
      case SortMode.BY_DATE_ADDED:
        this.sortByDateAdded();
        break;
      default:
        break;
    }
    this.filmsUpdateSubject.next(this.films);
  }

  private sortByName(): void {
    if (this.films === null || this.films === undefined) {
      return;
    }
    this.films.sort((a: Film, b: Film) => a.name.localeCompare(b.name));
  }

  private sortByDateAdded(): void {
    this.films.sort((a: Film, b: Film) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  private sortByReleaseYear(): void {
    this.films.sort((a: Film, b: Film) => a.issueYear - b.issueYear);
  }
}
