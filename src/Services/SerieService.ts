import { SerieDTO } from 'src/Interfaces/DTOInterface/SerieDTO';
import { ISerieRepository } from 'src/Interfaces/RepositoryInterface/ISerieRepository';
import { ISerieServeice } from 'src/Interfaces/ServiceInterface/ISerieService';

export class SerieService implements ISerieServeice {
  constructor(private serieRepository: ISerieRepository) {}

  async create(data: SerieDTO): Promise<void> {
    await this.serieRepository.create(data);
  }

  async getAllSeries(): Promise<SerieDTO[]> {
    const series = await this.serieRepository.getAllSeries();
    return series;
  }
}
