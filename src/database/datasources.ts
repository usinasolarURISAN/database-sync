import { DataSource } from 'typeorm';

// const currentEnv = process.env.NODE_ENV;

const entitiesPath = [`./src/models/*.ts`, `./models/*.js`];
// const migrationsPath = `./src/database/migrations/${currentEnv}/**/*.ts`;

// export const LocalDataSource = new DataSource({
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'lispector',
//   password: 'a3r3784y0r34y78t78',
//   database: 'solar',
//   logging: true,
//   entities: [entitiesPath],
//   migrations: [migrationsPath],
// });

export const MainDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'solar_sync',
  password: '902nfui3h1087hwuyg19736gr197236gr9761r',
  database: 'solar',
  logging: false,
  entities: entitiesPath,
});

export const initializeDatabases = async () => {
  console.log(`[DATA SOURCE] - Initializing Databases`);

  try {
    await MainDataSource.initialize();
  } catch (err) {
    console.log('Error on initializeDatabases:');
    console.log(err);
  }
};
