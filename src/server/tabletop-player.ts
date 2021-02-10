import { initDb } from './db';
import { start } from './server-main';

initDb().then(() => {
  start();
});
