import {Injectable, Renderer2, RendererFactory2} from "@angular/core";
import {AppTheme} from "./app-theme.enum";

export const DEFAULT_THEME: AppTheme = AppTheme.DARK_THEME;
const THEME_KEY = 'app-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private colorTheme: AppTheme;
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme(): void {
    this.colorTheme = this.getAppTheme();
    this.renderer.addClass(document.body, this.colorTheme);
  }

  themeChanged(theme: AppTheme): void {
    this.setAppTheme(theme);

    const previousTheme =
      this.colorTheme === AppTheme.LIGHT_THEME
        ? AppTheme.DARK_THEME
        : AppTheme.LIGHT_THEME;

    this.renderer.removeClass(document.body, previousTheme);
    this.renderer.addClass(document.body, theme);
  }

  getAppTheme(): AppTheme {
    return (localStorage.getItem(THEME_KEY) as AppTheme || DEFAULT_THEME);
  }

  setAppTheme(appTheme: AppTheme) {
    this.colorTheme = appTheme;
    localStorage.setItem(THEME_KEY, this.colorTheme);
  }

  isDarkMode(): boolean {
    return this.colorTheme === AppTheme.DARK_THEME;
  }
}
