import {Component, OnDestroy, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme/theme.service";
import {AppTheme} from "../../services/theme/app-theme.enum";
import {FormControl} from "@angular/forms";
import {FilmsService} from "../../services/films.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'main-tool-bar',
  templateUrl: './main-tool-bar.component.html',
  styleUrls: ['./main-tool-bar.component.scss']
})
export class MainToolBarComponent implements OnInit, OnDestroy {
  isDarkMode: boolean;
  searchFormControl: FormControl;
  favoritesCount: number;
  favoritesSubscription: Subscription;

  constructor(
    private themeService: ThemeService,
    private filmsService: FilmsService
  ) {
    this.themeService.initTheme();
    this.isDarkMode = themeService.isDarkMode();
  }

  ngOnInit(): void {
    this.searchFormControl = new FormControl(null);
    this.searchFormControl.valueChanges.subscribe((searchToken : string) => {
      this.filmsService.searchFilms(searchToken);
    });
    this.favoritesSubscription = this.filmsService.favoriteFilmsSubject.subscribe(count => {
      this.favoritesCount = count;
    })
  }

  ngOnDestroy(): void {
    this.favoritesSubscription.unsubscribe();
  }

  toggleTheme(checked: boolean) {
    this.isDarkMode = checked;
    const theme = this.isDarkMode ? AppTheme.DARK_THEME : AppTheme.LIGHT_THEME;
    this.themeService.themeChanged(theme);
  }
}
