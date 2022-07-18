import { DataTypes } from 'sequelize';
import { DB } from 'src/config/DB';
import { MovieDTO } from 'src/Interfaces/DTOInterface/MovieDTO';
import { IModel } from 'src/Interfaces/ModelsInterface/IModel';

const Movie: IModel<MovieDTO> = DB.define('movies', {
  movie_id: {
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
  runtime: {
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

export { Movie };
