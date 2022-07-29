import { DataTypes } from 'sequelize';
import { DB } from 'src/config/DB';
import { IGenre } from 'src/Interfaces/Data/IGenre';
import { IModel } from 'src/Interfaces/Model/IModel';

const Genre: IModel<IGenre> = DB.define(
  'genres',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,

    createdAt: false,

    updatedAt: false
  }
);

export { Genre };
