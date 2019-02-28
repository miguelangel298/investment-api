const dotenv = require('dotenv');

dotenv.config();

const config = {
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  logging: false,
  migrationsTableName: 'app_migrations',
  migrations: ['dist/data/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/data/migrations',
    entitiesDir: 'dist/data/entities',
  },
};

module.exports = config;
