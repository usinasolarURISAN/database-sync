import { FindManyOptions } from 'typeorm';
import { MainDataSource } from '../database/datasources';
import { Goodwe } from '../models';
import { FirestoreService } from '../services';
import { getDiffNewDataArray } from '../utils';

class GoodweController {
  firestoreService = new FirestoreService();

  async getLocalData() {
    console.log(`[GOODWE CONTROLLER] - Getting Local Data`);

    const defaultOptionsMainData: FindManyOptions = {
      select: {
        id: true,
      },
      order: {
        timestamp: 'DESC',
      },
    };

    const mainData = await MainDataSource.manager.find(
      Goodwe,
      defaultOptionsMainData
    );

    return mainData;
  }

  clearFirestoreData = async () => this.firestoreService.clearLatestReadDocs();

  async fetchFirestoreData() {
    const data = await this.firestoreService.fetchDocs('goodwe');

    return data;
  }

  /**
   * Should be implemented first...
   * @deprecated
   * @returns
   */
  async fetchCSVData() {
    // const fsService = new FileSystemService();
    // const data = await fsService.fetchEpeverDataFromCSV('test.csv');
    // return data;
  }

  async syncData() {
    try {
      const oldData = await this.getLocalData();
      const newData = await this.fetchFirestoreData();

      const dataToUpdate = getDiffNewDataArray(oldData, newData);

      for (let index = 0; index < dataToUpdate.length; index++) {
        const element = dataToUpdate[index];

        await MainDataSource.manager.save(Goodwe, element);
      }

      await this.clearFirestoreData();

      console.log(`\n=================================`);
      console.log(`\nSynced Finished`);
      console.log(`Synced ${dataToUpdate.length} registers at ${new Date()}`);
    } catch (e) {
      console.log(`Failed syncing registers at ${new Date()}`);
      console.log(e);
    }
  }
}

export { GoodweController };
