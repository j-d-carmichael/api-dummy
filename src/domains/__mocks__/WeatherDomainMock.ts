import { mockItGenerator } from 'generate-it-mockers';

import { WeatherGetQuery } from '@/http/nodegen/interfaces/WeatherGetQuery';
import { WeatherIdDeletePath } from '@/http/nodegen/interfaces/WeatherIdDeletePath';
import { WeatherIdGetPath } from '@/http/nodegen/interfaces/WeatherIdGetPath';
import { WeatherIdPut } from '@/http/nodegen/interfaces/WeatherIdPut';
import { WeatherIdPutPath } from '@/http/nodegen/interfaces/WeatherIdPutPath';
import { WeatherModel } from '@/http/nodegen/interfaces/WeatherModel';
import { WeatherModels } from '@/http/nodegen/interfaces/WeatherModels';
import { WeatherPost } from '@/http/nodegen/interfaces/WeatherPost';

class WeatherDomainMock {
  // Operation ID: weatherGet
  async weatherGet(query: WeatherGetQuery): Promise<WeatherModels> {
    return mockItGenerator({
      type: 'object',
      properties: {
        meta: {
          type: 'object',
          properties: {
            totalResultCount: { type: 'number' },
            offset: { type: 'number' },
            limit: { type: 'number' },
          },
        },
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              date: { type: 'string', format: 'date' },
              location: { type: 'string' },
              cloudCoverPercentage: { type: 'integer' },
              humidityPercentage: { type: 'integer' },
              temperature: { type: 'number' },
            },
          },
        },
      },
    });
  }

  // Operation ID: weatherPost
  async weatherPost(body: WeatherPost): Promise<WeatherModel> {
    return mockItGenerator({
      type: 'object',
      properties: {
        id: { type: 'integer' },
        date: { type: 'string', format: 'date' },
        location: { type: 'string' },
        cloudCoverPercentage: { type: 'integer' },
        humidityPercentage: { type: 'integer' },
        temperature: { type: 'number' },
      },
    });
  }

  // Operation ID: weatherLatestGet
  async weatherLatestGet(): Promise<WeatherModels> {
    return mockItGenerator({
      type: 'object',
      properties: {
        meta: {
          type: 'object',
          properties: {
            totalResultCount: { type: 'number' },
            offset: { type: 'number' },
            limit: { type: 'number' },
          },
        },
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              date: { type: 'string', format: 'date' },
              location: { type: 'string' },
              cloudCoverPercentage: { type: 'integer' },
              humidityPercentage: { type: 'integer' },
              temperature: { type: 'number' },
            },
          },
        },
      },
    });
  }

  // Operation ID: weatherIdDelete
  async weatherIdDelete(pathParams: WeatherIdDeletePath): Promise<any> {
    return mockItGenerator({});
  }

  // Operation ID: weatherIdGet
  async weatherIdGet(pathParams: WeatherIdGetPath): Promise<WeatherModel> {
    return mockItGenerator({
      type: 'object',
      properties: {
        id: { type: 'integer' },
        date: { type: 'string', format: 'date' },
        location: { type: 'string' },
        cloudCoverPercentage: { type: 'integer' },
        humidityPercentage: { type: 'integer' },
        temperature: { type: 'number' },
      },
    });
  }

  // Operation ID: weatherIdPut
  async weatherIdPut(
    body: WeatherIdPut,
    pathParams: WeatherIdPutPath
  ): Promise<WeatherModel> {
    return mockItGenerator({
      type: 'object',
      properties: {
        id: { type: 'integer' },
        date: { type: 'string', format: 'date' },
        location: { type: 'string' },
        cloudCoverPercentage: { type: 'integer' },
        humidityPercentage: { type: 'integer' },
        temperature: { type: 'number' },
      },
    });
  }
}
export default new WeatherDomainMock();
