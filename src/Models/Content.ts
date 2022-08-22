import { DataTypes } from 'sequelize';
import { IContent } from '@interfaces/data/IContent';
import { IModel } from '@interfaces/model/IModel';
import { db } from '@config/database';

const Content: IModel<IContent> = db.define(
  'contents',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    genre: {
      type: DataTypes.JSON,
      allowNull: false
    },
    link: {
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

export { Content };
