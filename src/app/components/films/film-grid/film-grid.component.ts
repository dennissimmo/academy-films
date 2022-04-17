import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'film-grid',
  templateUrl: './film-grid.component.html',
  styleUrls: ['./film-grid.component.scss']
})
export class FilmGridComponent implements OnInit {
  cards = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
