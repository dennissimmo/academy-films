import {Component, OnInit} from '@angular/core';
import {ViewMode} from "../../../models/viewMode.enum";
import {ViewModeService} from "../../../services/viewMode.service";

@Component({
  selector: 'film-tool-bar',
  templateUrl: './film-tool-bar.component.html',
  styleUrls: ['./film-tool-bar.component.scss']
})
export class FilmToolBarComponent implements OnInit {
  viewMode: ViewMode;

  constructor(private viewModeService: ViewModeService) { }

  get ViewMode() {
    return ViewMode;
  }

  ngOnInit(): void {
    this.viewMode = this.viewModeService.getViewMode();
  }

  viewModeChanged(mode: ViewMode) {
    if (mode === this.viewMode) {
      return;
    }
    this.viewMode = mode;
    this.viewModeService.viewModeChanged(mode);
  }

}
