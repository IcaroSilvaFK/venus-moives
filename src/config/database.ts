import 'dotenv/config';
import { Sequelize } from 'sequelize';

export const db = new Sequelize(process.env['DB_CONNECTION'] as string);
