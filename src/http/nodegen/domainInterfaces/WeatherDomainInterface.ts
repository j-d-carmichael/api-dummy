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

export interface WeatherDomainInterface {
  /**
   * Operation ID: weatherGet
   * Summary: weather search
   * Description: Search for weather objects
   * No additional middleware used
   **/
  weatherGet(query: WeatherGetQuery): Promise<WeatherModels>;

  /**
   * Operation ID: weatherPost
   * Summary: weather data
   * Description: Create a new weather record.
   * Permission string: apiDummyDCreateWeather
   **/
  weatherPost(body: WeatherPost): Promise<WeatherModel>;

  /**
   * Operation ID: weatherLatestGet
   * Summary: lastest weather data
   * Description: Get the latest temperatures
   * No additional middleware used
   **/
  weatherLatestGet(): Promise<WeatherModels>;

  /**
   * Operation ID: weatherIdDelete
   * Summary: weather set to rain
   * Description: Reset awful sunny weather to excellent rainy weather
   * No additional middleware used
   **/
  weatherIdDelete(params: WeatherIdDeletePath): Promise<any>;

  /**
   * Operation ID: weatherIdGet
   * Summary: One weather object
   * Description: Get the full weather object
   * No additional middleware used
   **/
  weatherIdGet(params: WeatherIdGetPath): Promise<WeatherModel>;

  /**
   * Operation ID: weatherIdPut
   * Summary: weather data
   * Description: Create a new weather record.
   * No additional middleware used
   **/
  weatherIdPut(
    body: WeatherIdPut,
    params: WeatherIdPutPath
  ): Promise<WeatherModel>;
}
