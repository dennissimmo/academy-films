import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {FilmGridComponent} from "../components/films/film-grid/film-grid.component";
import {FavoriteFilmsComponent} from "../components/films/favorite-films/favorite-films.component";

export const routes: Routes = [
  {
    path: '',
    component: FilmGridComponent
  },
  {
    path: 'favorites',
    component: FavoriteFilmsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
