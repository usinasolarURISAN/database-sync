import { FindManyOptions } from 'typeorm';
import { MainDataSource } from '../database/datasources';
import { Weather } from '../models';
import { FileSystemService, FirestoreService } from '../services';
import { getDiffNewDataArray } from '../utils';

class WeatherController {
  firestoreService = new FirestoreService();

  async getLocalData() {
    console.log(`[WEATHER CONTROLLER] - Getting Local Data`);

    const defaultOptionsMainData: FindManyOptions = {
      select: {
        id: true,
      },
      order: {
        timestamp: 'DESC',
      },
    };

    const mainData = await MainDataSource.manager.find(
      Weather,
      defaultOptionsMainData
    );

    return mainData;
  }

  async fetchCSVData() {
    const fsService = new FileSystemService();

    const data = await fsService.fetchWeatherDataFromCSV('test.csv');
    
    return data;
  }

  async syncData() {
    try {
      const oldData = await this.getLocalData();
      const newData = await this.fetchCSVData();

      const dataToUpdate = getDiffNewDataArray(oldData, newData);

      for (let index = 0; index < dataToUpdate.length; index++) {
        const element = dataToUpdate[index];

        await MainDataSource.manager.save(Weather, element);
      }

      console.log(`\n=================================`);
      console.log(`\nSynced Finished`);
      console.log(`Synced ${dataToUpdate.length} registers at ${new Date()}`);
    } catch (e) {
      console.log(`Failed syncing registers at ${new Date()}`);
      console.log(e);
    }
  }
}

export { WeatherController };
