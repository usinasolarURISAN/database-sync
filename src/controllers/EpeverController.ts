import { FindManyOptions } from 'typeorm';
import { MainDataSource } from '../database/datasources';
import { Epever } from '../models';
import { FileSystemService, FirestoreService } from '../services';
import { getDiffNewDataArray } from '../utils';

class EpeverController {
  firestoreService = new FirestoreService();

  async getLocalData() {
    console.log(`[EPEVER CONTROLLER] - Getting Local Data`);

    const defaultOptionsMainData: FindManyOptions = {
      select: {
        id: true,
      },
      order: {
        timestamp: 'DESC',
      },
    };

    const mainData = await MainDataSource.manager.find(
      Epever,
      defaultOptionsMainData
    );

    return mainData;
  }

  clearFirestoreData = async () => this.firestoreService.clearLatestReadDocs();

  async fetchFirestoreData() {
    const data = await this.firestoreService.fetchDocs('epever');

    return data;
  }

  async fetchCSVData() {
    const fsService = new FileSystemService();

    const data = await fsService.fetchEpeverDataFromCSV('test.csv');

    return data;
  }

  async syncData() {
    try {
      const oldData = await this.getLocalData();
      const newData = await this.fetchFirestoreData();

      const dataToUpdate = getDiffNewDataArray(oldData, newData);

      for (let index = 0; index < dataToUpdate.length; index++) {
        const element = dataToUpdate[index];

        await MainDataSource.manager.save(Epever, element);
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

export { EpeverController };
