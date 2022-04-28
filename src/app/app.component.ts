import {Component, OnDestroy} from '@angular/core';
import {FilmsService} from "./services/films.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  constructor(private filmsService: FilmsService) {}

  ngOnDestroy(): void {
    this.filmsService.dispose();
  }

}
