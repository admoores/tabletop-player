import { Sequelize, DataTypes } from 'sequelize';

export async function initDb(): Promise<void> {
  const database = new Sequelize('test', 'postgres', 'postgres', { logging: false, host: 'localhost', dialect: 'postgres' });

  const characters = {
    name: DataTypes.STRING,
    ballistics: DataTypes.SMALLINT,
  }

  database.define('character', characters);
  database.sync();
}
