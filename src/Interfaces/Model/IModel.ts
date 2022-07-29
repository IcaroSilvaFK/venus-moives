import { Model, ModelStatic } from 'sequelize';

export interface IModel<T> extends ModelStatic<Model<T, T>> {}
