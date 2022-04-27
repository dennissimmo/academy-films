import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme/theme.service";
import {AppTheme} from "../../services/theme/app-theme.enum";
import {FormControl} from "@angular/forms";
import {FilmsService} from "../../services/films.service";

@Component({
  selector: 'main-tool-bar',
  templateUrl: './main-tool-bar.component.html',
  styleUrls: ['./main-tool-bar.component.scss']
})
export class MainToolBarComponent implements OnInit {
  isDarkMode: boolean;
  searchFormControl: FormControl;

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
    })
  }

  toggleTheme(checked: boolean) {
    this.isDarkMode = checked;
    const theme = this.isDarkMode ? AppTheme.DARK_THEME : AppTheme.LIGHT_THEME;
    this.themeService.themeChanged(theme);
  }
}
