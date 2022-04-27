import {Actor} from "./actor.model";

export interface Film {
  name: string,
  issueYear: number,
  poster: string,
  boxOffice: number,
  actors?: Array<Actor>;
  createdAt: Date;
}
