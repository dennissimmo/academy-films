import {Injectable} from "@angular/core";
import {Film} from "../models/film.model";
import {Subject} from "rxjs";
import {SortMode} from "./sort-mode.enum";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  films: Film[];
  filmsUpdateSubject: Subject<Array<Film>>;

  constructor() {
    this.filmsUpdateSubject = new Subject<Array<Film>>();
  }

  public initialize() {
    this.films = [
      { name: 'Avengers', issueYear: 2012, boxOffice: 23400, poster: 'https://image.tmdb.org/t/p/w342/ltTLJvfn8PIx1d6niwS4A9IJ3yM.jpg', createdAt: new Date(1650494565)},
      { name: 'Beauty and The Beast', issueYear: 2017, boxOffice: 1263521126, poster: 'https://i.kinobaza.com.ua/posters/300x450/60fe786edac1d.jpg', createdAt: new Date("2009-12-17T03:24:00")},
      { name: 'Avatar', issueYear: 2009, boxOffice: 980, poster: 'https://image.tmdb.org/t/p/w342/uaRusyPlXRD4w3XPbfDDbO4jXST.jpg', createdAt: new Date(Date.now())},
      { name: 'Titanic', issueYear: 1997, boxOffice: 	2186772302, poster: 'https://image.tmdb.org/t/p/w342/2XmEN166CfFcJIU62PYmVTxSm4p.jpg', createdAt: new Date("December 17, 2021 09:10:02")},
      { name: 'Spider-Man: No Way Home', issueYear: 2021, boxOffice: 1892095052, poster: 'https://image.tmdb.org/t/p/w342/8GbtUB55JYQfo1xA48bbx5baxcO.jpg', createdAt: new Date(1647816165)},
      { name: 'Jurassic World', issueYear: 2015, boxOffice: 1671713208, poster: 'https://image.tmdb.org/t/p/w342/mu8CzE6CPZMZIyTe6g2p2TLTBwX.jpg', createdAt: new Date(1616280165)}
    ];
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
    this.films.sort((a: Film, b: Film) => a.name.localeCompare(b.name));
  }

  private sortByDateAdded(): void {
    this.films.sort((a: Film, b: Film) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  private sortByReleaseYear(): void {
    this.films.sort((a: Film, b: Film) => a.issueYear - b.issueYear);
  }
}
