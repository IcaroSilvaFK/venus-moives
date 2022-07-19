import { SerieDTO } from 'src/Interfaces/DTOInterface/SerieDTO';
import { IModel } from 'src/Interfaces/ModelsInterface/IModel';
import { ISerieRepository } from 'src/Interfaces/RepositoryInterface/ISerieRepository';

export class SerieRepository implements ISerieRepository {
  constructor(private serieModel: IModel<SerieDTO>) {}
  async create(data: SerieDTO): Promise<void> {
    await this.serieModel.create({
      title: data.title,
      country: data.country,
      director: data.director,
      language: data.language,
      plot: data.plot,
      poster: data.poster,
      released: data.released
    });
  }

  async getAllSeries(): Promise<SerieDTO[]> {
    const series = await this.serieModel.findAll();
    return series as unknown as SerieDTO[];
  }

  async getSerieByTitle(title: string): Promise<SerieDTO> {
    const serie = await this.serieModel.findOne({
      where: {
        title: title
      }
    });
    return serie?.get() as SerieDTO;
  }
}
