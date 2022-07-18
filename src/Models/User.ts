import { DataTypes } from 'sequelize';
import { DB } from 'src/config/DB';
import { UserDTO } from 'src/Interfaces/DTOInterface/UserDTO';
import { IModel } from 'src/Interfaces/ModelsInterface/IModel';

const User: IModel<UserDTO> = DB.define('users', {
  user_id: {
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
});

export { User };
