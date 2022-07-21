import { DataTypes } from 'sequelize';
import { DB } from 'src/config/DB';
import { ISeason } from 'src/Interfaces/DataInterface/ISeason';
import { IModel } from 'src/Interfaces/ModelsInterface/IModel';
import { Content } from './Content';

const Season: IModel<ISeason> = DB.define('seasons', {
  season_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  season: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fk_content_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Content,
      key: 'content_id'
    }
  }
});

export { Season };
