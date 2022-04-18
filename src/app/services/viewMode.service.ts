import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {ViewMode} from "../models/viewMode.enum";

@Injectable({
  providedIn: 'root'
})
export class ViewModeService {
  viewMode: ViewMode;
  viewModeSubject: Subject<ViewMode> = new Subject<ViewMode>();

  constructor() {
  }

  initViewMode(): void {
    const mode = this.getViewMode();
    this.viewModeChanged(mode);
  }

  viewModeChanged(mode: ViewMode) {
    this.setViewMode(mode);
    this.viewModeSubject.next(mode);
  }

  getViewMode(): ViewMode {
    return (localStorage.getItem('view-mode') as ViewMode || ViewMode.TILES);
  }

  setViewMode(mode: ViewMode): void {
    this.viewMode = mode;
    localStorage.setItem('view-mode', this.viewMode);
  }
}
