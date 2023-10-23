import 'reflect-metadata';
import './environment';
import { initializeDatabases } from '../../database';

const bootstrap = async () => {
  console.log(`[BOOTSTRAP] - Starting Bootstrap`);
  await initializeDatabases();
};

export default bootstrap;
