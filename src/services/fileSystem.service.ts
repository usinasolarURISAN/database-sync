import * as csv from 'fast-csv';
import * as fileSystem from 'fs';
import * as path from 'path';
import { parseStringObjectToEpeverObject, parseStringObjectToGoodweObject } from '../utils';

class FileSystemService {
  /**
   * Reads an Epever based CSV file and returns an array of objects.
   * @param fileName - name of the file. Remember that this file must be on the csv folder inside src folder.
   */
  async fetchEpeverDataFromCSV<T = unknown>(fileName: string): Promise<T[]> {
    const data = [];

    const filePath = path.resolve(__dirname, '..', '..', 'csv', fileName);

    console.log(`\n[FileSystemService] - Reading CSV from ${filePath}\n`);

    return new Promise((resolve, reject) => {
      fileSystem
        .createReadStream(filePath)
        .pipe(csv.parse({ headers: true, delimiter: ';' }))
        .on('error', (error) => reject(error))
        .on('data', (row) => {
          data.push(parseStringObjectToEpeverObject(row));
        })
        .on('end', () => resolve(data));
    });
  }

  /**
   * Reads an Epever based CSV file and returns an array of objects.
   * @param fileName - name of the file. Remember that this file must be on the csv folder inside src folder.
   */
  async fetchGoodweDataFromCSV<T = unknown>(fileName: string): Promise<T[]> {
    const data = [];

    const filePath = path.resolve(__dirname, '..', '..', 'csv', fileName);

    console.log(`\n[FileSystemService] - Reading CSV from ${filePath}\n`);

    return new Promise((resolve, reject) => {
      fileSystem
        .createReadStream(filePath)
        .pipe(csv.parse({ headers: true, delimiter: ';' }))
        .on('error', (error) => reject(error))
        .on('data', (row) => {
          data.push(parseStringObjectToGoodweObject(row));
        })
        .on('end', () => resolve(data));
    });
  }
}

export default FileSystemService;
