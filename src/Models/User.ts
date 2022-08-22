import { DataTypes } from 'sequelize';
import { IUser } from '@interfaces/data/IUser';
import { IModel } from '@interfaces/model/IModel';
import { db } from '@config/database';

const User: IModel<IUser> = db.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
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

export { User };
