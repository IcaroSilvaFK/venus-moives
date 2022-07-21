import { IContent } from 'src/Interfaces/DataInterface/IContent';
import { ISeason } from 'src/Interfaces/DataInterface/ISeason';
import { IModel } from 'src/Interfaces/ModelsInterface/IModel';

export class SeasonRepository {
  constructor(private seasonModel: IModel<ISeason>) {}

  async create(data: ISeason): Promise<void> {
    await this.seasonModel.create({
      season: data.season,
      fk_content_id: data.fk_content_id
    });
  }
}
