import { DataTypes } from 'sequelize';
import { IGenre } from '@interfaces/data/IGenre';
import { IModel } from '@interfaces/model/IModel';
import { db } from '@config/database';

const Genre: IModel<IGenre> = db.define(
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
