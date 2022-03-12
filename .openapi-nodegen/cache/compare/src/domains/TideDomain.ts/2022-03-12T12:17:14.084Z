import { TideGetQuery, WeatherModels } from '@/http/nodegen/interfaces';

import { TideDomainInterface } from '@/http/nodegen/domainInterfaces/TideDomainInterface';

import TideDomainMock from './__mocks__/TideDomainMock';

class TideDomain implements TideDomainInterface {
  /**
   * Operation ID: tideGet
   * Path middleware used see: TideDomainInterface.tideGet
   * Summary: weather search
   * Description: Search for weather objects
   **/
  public async tideGet(query: TideGetQuery): Promise<WeatherModels> {
    return TideDomainMock.tideGet(query);
  }
}

export default new TideDomain();
