import { SerieDTO } from '../DTOInterface/SerieDTO';

export interface ISerieRepository {
  create: (data: SerieDTO) => Promise<void>;
  getAllSeries: () => Promise<SerieDTO[]>;
}
