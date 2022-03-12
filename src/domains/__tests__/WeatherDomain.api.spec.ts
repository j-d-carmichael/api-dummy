import { baseUrl, defaultSetupTeardown, request } from '@/http/nodegen/tests';
import {
  pathId as id,
  responseValidator,
  weatherGetQueryOffset,
  weatherGetQueryTextSearch,
  weatherIdPutBodyWeatherIdPut,
  weatherPostBodyWeatherPost,
} from '@/http/nodegen/tests/WeatherDomain.data';

defaultSetupTeardown();

describe('WeatherDomain', () => {
  it('can GET /weather', async () => {
    await request
      .get(`${baseUrl}/weather`)
      .query({ offset: weatherGetQueryOffset, textSearch: weatherGetQueryTextSearch })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('weatherGet200', body);
        expect(validated.error).toBe(undefined);
      });
  });

  it('can POST /weather', async () => {
    await request
      .post(`${baseUrl}/weather`)
      .send(weatherPostBodyWeatherPost)
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('weatherPost200', body);
        expect(validated.error).toBe(undefined);
      });
  });

  it('can GET /weather/latest', async () => {
    await request.get(`${baseUrl}/weather/latest`).expect(({ status, body }) => {
      expect(status).toBe(200);

      const validated = responseValidator('weatherLatestGet200', body);
      expect(validated.error).toBe(undefined);
    });
  });

  it('can DELETE /weather/{id}', async () => {
    await request.delete(`${baseUrl}/weather/${id}`).expect(({ status, body }) => {
      expect(status).toBe(200);

      const validated = responseValidator('weatherIdDelete200', body);
      expect(validated.error).toBe(undefined);
    });
  });

  it('can GET /weather/{id}', async () => {
    await request.get(`${baseUrl}/weather/${id}`).expect(({ status, body }) => {
      expect(status).toBe(200);

      const validated = responseValidator('weatherIdGet200', body);
      expect(validated.error).toBe(undefined);
    });
  });

  it('can PUT /weather/{id}', async () => {
    await request
      .put(`${baseUrl}/weather/${id}`)
      .send(weatherIdPutBodyWeatherIdPut)
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('weatherIdPut200', body);
        expect(validated.error).toBe(undefined);
      });
  });
});
