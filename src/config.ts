import dotenv from 'dotenv';
import ConfigHelper from 'openapi-nodegen-config-helper';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';

dotenv.config();

interface ConfigBase {
  loadSwaggerUIRoute: boolean,
  swaggerBasicAuth: { basicAuthUname: string, basicAuthPword: string }[],
  env: string,
  port: number,
  corsWhiteList: string,
  jwtAccessSecret?: string,
  apiKey?: string,
  requestWorker: {
    processes: number,
    threadsPerProcess: number,
    timeoutMs: number,
    silent: boolean
  }
}

interface Config extends ConfigBase {
  mysql: ConnectionOptions;
}

/**
 * Add and remove config that you need.
 */
const config: Config = {
  // Swagger file
  loadSwaggerUIRoute: ConfigHelper.withDefault('LOAD_SWAGGER_UI_ROUTE', false),
  swaggerBasicAuth: [{
    basicAuthUname: String(ConfigHelper.withDefault('SWAGGER_BASIC_AUTH_UNAME', 'user')),
    basicAuthPword: String(ConfigHelper.withDefault('SWAGGER_BASIC_AUTH_PWORD', 'password')),
  }],

  // Instance
  env: ConfigHelper.withDefault('ENVIRONMENT', 'production'),
  port: ConfigHelper.withDefault('PORT', 8000),

  // Cors white list of URLs
  corsWhiteList: ConfigHelper.withDefault('CORS_WHITELIST', '*'),

  // Authentication
  jwtAccessSecret: ConfigHelper.required('JWT_ACCESS_SECRET'),
  apiKey: ConfigHelper.withDefault('API_KEY', false),

  mysql: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'test',
    password: 'test',
    database: 'test',
    entities: ['src/entity/*.js'],
    logging: true,
    synchronize: true
  },

  // Request worker config - allThreadsCount = processes * threadsPerProcess
  requestWorker: {
    processes: Number.parseInt(
      ConfigHelper.withDefault('REQUEST_WORKER_PROCESSES', 1),
      10
    ),
    threadsPerProcess: Number.parseInt(
      ConfigHelper.withDefault('REQUEST_WORKER_THREADS_PER_PROCESS', 10),
      10
    ),
    timeoutMs: Number.parseInt(
      ConfigHelper.withDefault('REQUEST_WORKER_TIMEOUT_MS', 300000), // 5 minutes
      10
    ),
    silent: true, // disable thread / proc start logs
  }
};

export default config;
