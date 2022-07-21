import { DataTypes } from 'sequelize';
import { DB } from 'src/config/DB';
import { IContent } from 'src/Interfaces/DataInterface/IContent';
import { IModel } from 'src/Interfaces/ModelsInterface/IModel';

const Content: IModel<IContent> = DB.define('contents', {
  content_id: {
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
  category: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export { Content };
