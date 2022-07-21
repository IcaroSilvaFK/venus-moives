import { ISeason } from '../DataInterface/ISeason';

export interface ISeasonService {
  create: (data: ISeason) => Promise<void>;
}
