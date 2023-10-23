import { CronJob } from 'cron';
import { EpeverController, GoodweController } from './controllers';
import bootstrap from './utils/config/bootstrap';

bootstrap();

const syncThings = async () => {
  const epeverController = new EpeverController();
  const goodweController = new GoodweController();

  await epeverController.syncData();
  await goodweController.syncData();
};

var job = new CronJob('2,7,12,17,22,27,32,37,42,47,52,57 * * * *', async () => {
  console.log(`[CRON JOB] - Syncing Data`);
  await syncThings();
});

job.start();
