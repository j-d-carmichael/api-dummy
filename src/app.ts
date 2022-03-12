import http, { Http } from '@/http';
import { createConnection } from 'typeorm';
import config from '@/config';

/**
 * Returns a promise allowing the server or cli script to know
 * when the app is ready; eg database connections established
 */
export default async (port: number): Promise<Http> => {
  // Here is a good place to connect to databases if required or setup
  // filesystems or any other async action required before starting:
  // ...
  await createConnection(config.mysql);

  // Return the http layer, to inject custom middleware pass the HttpOptions
  // argument. See the @/http/index.ts
  return http(port);
};
