import {Actor} from "./actor.model";

export interface Film {
  name: string,
  issueYear: number,
  poster: string,
  boxOffice: number,
  createdAt: Date;
  actors?: Array<Actor>;
}
