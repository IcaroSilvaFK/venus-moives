import { IEpisode } from './IEpisode';

export interface ISeason {
  season_id?: string;
  season: string;
  fk_content_id: string;
}
