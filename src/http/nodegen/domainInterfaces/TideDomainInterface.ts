import { TideGetQuery, WeatherModels } from '@/http/nodegen/interfaces';

export interface TideDomainInterface {
  /**
   * Operation ID: tideGet
   * Summary: weather search
   * Description: Search for weather objects
   * No additional middleware used
   **/
  tideGet(query: TideGetQuery): Promise<WeatherModels>;
}
