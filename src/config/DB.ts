require('dotenv').config();
import { Sequelize } from 'sequelize';

export const DB = new Sequelize(process.env.DB_CONNECTION as string);
