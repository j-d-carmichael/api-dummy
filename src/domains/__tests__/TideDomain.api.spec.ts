import { baseUrl, defaultSetupTeardown, request } from '@/http/nodegen/tests';
import { responseValidator, tideGetQueryOffset, tideGetQueryTextSearch } from '@/http/nodegen/tests/TideDomain.data';

defaultSetupTeardown();

describe('TideDomain', () => {
  it('can GET /tide', async () => {
    await request
      .get(`${baseUrl}/tide`)
      .query({ offset: tideGetQueryOffset, textSearch: tideGetQueryTextSearch })
      .expect(({ status, body }) => {
        expect(status).toBe(200);

        const validated = responseValidator('tideGet200', body);
        expect(validated.error).toBe(undefined);
      });
  });
});
