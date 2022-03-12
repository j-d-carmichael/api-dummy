import {
  WeatherGetQuery,
  WeatherIdDeletePath,
  WeatherIdGetPath,
  WeatherIdPut,
  WeatherIdPutPath,
  WeatherModel,
  WeatherModels,
  WeatherPost,
} from '@/http/nodegen/interfaces';

import { WeatherDomainInterface } from '@/http/nodegen/domainInterfaces/WeatherDomainInterface';

import WeatherDomainMock from './__mocks__/WeatherDomainMock';

class WeatherDomain implements WeatherDomainInterface {
  /**
   * Operation ID: weatherGet
   * Path middleware used see: WeatherDomainInterface.weatherGet
   * Summary: weather search
   * Description: Search for weather objects
   **/
  public async weatherGet(query: WeatherGetQuery): Promise<WeatherModels> {
    return WeatherDomainMock.weatherGet(query);
  }

  /**
   * Operation ID: weatherPost
   * Path middleware used see: WeatherDomainInterface.weatherPost
   * Summary: weather data
   * Description: Create a new weather record.
   **/
  public async weatherPost(body: WeatherPost): Promise<WeatherModel> {
    return WeatherDomainMock.weatherPost(body);
  }

  /**
   * Operation ID: weatherLatestGet
   * Path middleware used see: WeatherDomainInterface.weatherLatestGet
   * Summary: lastest weather data
   * Description: Get the latest temperatures
   **/
  public async weatherLatestGet(): Promise<WeatherModels> {
    return WeatherDomainMock.weatherLatestGet();
  }

  /**
   * Operation ID: weatherIdDelete
   * Path middleware used see: WeatherDomainInterface.weatherIdDelete
   * Summary: weather set to rain
   * Description: Reset awful sunny weather to excellent rainy weather
   **/
  public async weatherIdDelete(params: WeatherIdDeletePath): Promise<any> {
    return WeatherDomainMock.weatherIdDelete(params);
  }

  /**
   * Operation ID: weatherIdGet
   * Path middleware used see: WeatherDomainInterface.weatherIdGet
   * Summary: One weather object
   * Description: Get the full weather object
   **/
  public async weatherIdGet(params: WeatherIdGetPath): Promise<WeatherModel> {
    return WeatherDomainMock.weatherIdGet(params);
  }

  /**
   * Operation ID: weatherIdPut
   * Path middleware used see: WeatherDomainInterface.weatherIdPut
   * Summary: weather data
   * Description: Create a new weather record.
   **/
  public async weatherIdPut(
    body: WeatherIdPut,
    params: WeatherIdPutPath
  ): Promise<WeatherModel> {
    return WeatherDomainMock.weatherIdPut(body, params);
  }
}

export default new WeatherDomain();
