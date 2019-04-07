import { createConnection, Connection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export default class DatabaseConnection {

  static connect(): Promise<Connection> {
    return createConnection({
      type: 'postgres',
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      entities: [`${__dirname}/entities/*{.ts,.js}`],
      logging: ['error', 'query'],
    });
  }

  static printConnectionInfo(options: PostgresConnectionOptions) {
    console.log('Connected to database:');
    console.log(`${options.type}://${options.username}
      @${options.host}:${options.port}/${options.database}`);
  }
}
