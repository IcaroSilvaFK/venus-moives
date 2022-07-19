import { DataTypes } from 'sequelize';
import { DB } from 'src/config/DB';
import { GenreDTO } from 'src/Interfaces/DTOInterface/GenreDTO';
import { IModel } from 'src/Interfaces/ModelsInterface/IModel';

const Genre: IModel<GenreDTO> = DB.define('genres', {
  genre_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export { Genre };
