import dotenv from 'dotenv';
import path from 'path';
import glob from 'glob';
import { ObjectType } from 'typeorm';
import DatabaseConnection from '../../DatabaseConnection';
import Factory, { FactoryDefineFunction, FactoryStatic } from '../../factories/interfaces/Factory';

dotenv.config();

const factories: FactoryStatic = new Map();

// Directories
const factoriesDir = `${__dirname}/../../factories/*Factory{.js,.ts}`;
const seedersDir = `${__dirname}/../*Seeder{.js,.ts}`;

export function define<T>(entityClass: ObjectType<T>,
                          factoryDefineFunction: FactoryDefineFunction<T>) {
  const factory = new Factory(entityClass, factoryDefineFunction, factories);
  factories.set(entityClass, factory);
}

export function factory<T>(entityClass: ObjectType<T>): Factory<T> {
  return factories.get(entityClass);
}

export function loadFactories(): void {
  glob.sync(factoriesDir).forEach((file: string) => {
    require(path.resolve(file));
  });
}

export async function loadSeeders(): Promise<void> {
  const seeders: any = [];
  glob.sync(seedersDir).forEach((file: string) => {
    const seederFile = require(path.resolve(file));
    if (seederFile['default']) {
      const seeder = new seederFile['default']();
      seeders.push(seeder);
    }
  });

  for (const seeder of seeders) {
    console.log('Seeding: ', seeder);
    await seeder.seed(factories);
  }
}

async function runSeeders(): Promise<void> {
  await DatabaseConnection.connect();
  loadFactories();
  console.log('[+] Loaded factories: ', factories.size);
  await loadSeeders();
}

runSeeders().then(() => {
  console.log('[+] Entities seeded successfully');
  process.exit(0);
}).catch((error: Error) => {
  console.log('[*] Error seeding entities:');
  console.log(error);
  process.exit(0);
});
