import { WeatherIdDeletePath, WeatherIdGetPath, WeatherIdPutPath } from '@/http/nodegen/interfaces';
import { baseUrl, request } from '@/http/nodegen/tests';
import * as supertest from 'supertest';

export class TestWeatherDomain {
  // weatherGet
  //
  public static weatherGetPath(root: string = baseUrl): string {
    return `${root}/weather`;
  }

  public static weatherGet(root: string = baseUrl): supertest.Test {
    return request.get(this.weatherGetPath(root));
  }

  // weatherPost
  //
  public static weatherPostPath(root: string = baseUrl): string {
    return `${root}/weather`;
  }

  public static weatherPost(root: string = baseUrl): supertest.Test {
    return request.post(this.weatherPostPath(root));
  }

  // weatherLatestGet
  //
  public static weatherLatestGetPath(root: string = baseUrl): string {
    return `${root}/weather/latest`;
  }

  public static weatherLatestGet(root: string = baseUrl): supertest.Test {
    return request.get(this.weatherLatestGetPath(root));
  }

  // weatherIdDelete
  //
  public static weatherIdDeletePath(id: WeatherIdDeletePath['id'], root: string = baseUrl): string {
    return `${root}/weather/${id}`;
  }

  public static weatherIdDelete(id: WeatherIdDeletePath['id'], root: string = baseUrl): supertest.Test {
    return request.delete(this.weatherIdDeletePath(id, root));
  }

  // weatherIdGet
  //
  public static weatherIdGetPath(id: WeatherIdGetPath['id'], root: string = baseUrl): string {
    return `${root}/weather/${id}`;
  }

  public static weatherIdGet(id: WeatherIdGetPath['id'], root: string = baseUrl): supertest.Test {
    return request.get(this.weatherIdGetPath(id, root));
  }

  // weatherIdPut
  //
  public static weatherIdPutPath(id: WeatherIdPutPath['id'], root: string = baseUrl): string {
    return `${root}/weather/${id}`;
  }

  public static weatherIdPut(id: WeatherIdPutPath['id'], root: string = baseUrl): supertest.Test {
    return request.put(this.weatherIdPutPath(id, root));
  }
}
