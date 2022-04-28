import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ViewMode} from "../../../models/viewMode.enum";
import {ViewModeService} from "../../../services/viewMode.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FilmAddFormComponent} from "../film-add-form/film-add-form.component";
import {Film} from "../../../models/film.model";
import {FilmsService} from "../../../services/films.service";
import {SortMode} from "../../../services/sort-mode.enum";

@Component({
  selector: 'film-tool-bar',
  templateUrl: './film-tool-bar.component.html',
  styleUrls: ['./film-tool-bar.component.scss']
})
export class FilmToolBarComponent implements OnInit, AfterViewInit {
  viewMode: ViewMode;
  sortMode: SortMode;

  constructor(
    private viewModeService: ViewModeService,
    private dialog: MatDialog,
    private filmsService: FilmsService
  ) { }

  get ViewMode() {
    return ViewMode;
  }

  get SortMode() {
    return SortMode;
  }

  ngOnInit(): void {
    this.viewMode = this.viewModeService.getViewMode();
    const storedSortMode = localStorage.getItem('sort-mode');
    this.sortMode = storedSortMode === null ? SortMode.BY_NAME : storedSortMode as SortMode;
  }

  ngAfterViewInit() {
    this.onSortingChanged(this.sortMode);
  }

  viewModeChanged(mode: ViewMode) {
    if (mode === this.viewMode) {
      return;
    }
    this.viewMode = mode;
    this.viewModeService.viewModeChanged(mode);
  }

  addFilm() {
    const filmDialog: MatDialogRef<FilmAddFormComponent> = this.dialog.open(FilmAddFormComponent, {
      width: '500px'
    });

    filmDialog.afterClosed().subscribe((result: boolean) => {
      if (result) {
        // add new film in array
        const filmData: Film = filmDialog.componentInstance.film;
        this.filmsService.filmAdded(filmData);
      }
    })
  }

  onSortingChanged(value: SortMode) {
    this.filmsService.sortModeChanged(value);
  }
}
