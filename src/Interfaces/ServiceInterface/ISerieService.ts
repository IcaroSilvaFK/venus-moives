import { SerieDTO } from '../DTOInterface/SerieDTO';

export interface ISerieServeice {
  create: (data: SerieDTO) => Promise<void>;
  getAllSeries: () => Promise<SerieDTO[]>;
}
