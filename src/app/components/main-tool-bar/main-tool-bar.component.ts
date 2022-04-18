import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme/theme.service";
import {AppTheme} from "../../services/theme/app-theme.enum";

@Component({
  selector: 'main-tool-bar',
  templateUrl: './main-tool-bar.component.html',
  styleUrls: ['./main-tool-bar.component.scss']
})
export class MainToolBarComponent implements OnInit {
  isDarkMode: boolean;

  constructor(private themeService: ThemeService) {
    this.themeService.initTheme();
    this.isDarkMode = themeService.isDarkMode();
  }

  ngOnInit(): void {
  }

  toggleTheme(checked: boolean) {
    this.isDarkMode = checked;
    const theme = this.isDarkMode ? AppTheme.DARK_THEME : AppTheme.LIGHT_THEME;
    this.themeService.themeChanged(theme);
  }
}
