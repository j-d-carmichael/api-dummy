import { mockItGenerator } from 'generate-it-mockers';

import { TideGetQuery } from '@/http/nodegen/interfaces/TideGetQuery';
import { WeatherModels } from '@/http/nodegen/interfaces/WeatherModels';

class TideDomainMock {
  // Operation ID: tideGet
  async tideGet(query: TideGetQuery): Promise<WeatherModels> {
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
}
export default new TideDomainMock();
