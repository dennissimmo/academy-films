import {Actor} from "./actor.model";

export interface Film {
  name: string,
  issueYear: number,
  poster: string,
  boxOffice: number,
  createdAt: Date;
  isFavourite?: boolean;
  actors?: Array<Actor>;
}
