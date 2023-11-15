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
  username: 'weather_writer',
  password: '7hf91587g4fb9134d9t76touygrq90387ghopiurgy8934h5uior7g',
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
