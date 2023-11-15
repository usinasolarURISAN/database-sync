import { WeatherController } from './controllers/WeatherController';
import bootstrap from './utils/config/bootstrap';

// bootstrap();

const syncThings = async () => {
  await bootstrap();

  // const epeverController = new EpeverController();
  // const goodweController = new GoodweController();
  const weatherController = new WeatherController();

  // await epeverController.syncData();
  // await goodweController.syncData();
  await weatherController.syncData();
};

syncThings()

// var job = new CronJob('2,7,12,17,22,27,32,37,42,47,52,57 * * * *', async () => {
//   console.log(`[CRON JOB] - Syncing Data`);
//   await syncThings();
// });

// job.start();
