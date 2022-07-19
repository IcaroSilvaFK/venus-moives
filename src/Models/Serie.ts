import { DataTypes } from 'sequelize';
import { DB } from 'src/config/DB';
import { SerieDTO } from 'src/Interfaces/DTOInterface/SerieDTO';
import { IModel } from 'src/Interfaces/ModelsInterface/IModel';
import { Genre } from './Genre';

const Serie: IModel<SerieDTO> = DB.define('series', {
  serie_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  released: {
    type: DataTypes.STRING,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false
  },
  plot: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false
  },
  poster: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Serie.hasMany(Genre, {
  foreignKey: 'fk_serie_id'
});
Genre.belongsTo(Serie, {
  foreignKey: 'fk_serie_id'
});

export { Serie };
