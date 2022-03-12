import { getConnection } from 'typeorm/globals';
import { Weather } from '@/repository/models/Weather';

class WeatherRepository {
  model = getConnection().getRepository(Weather);

  find(){
    return this.model.find()
  }
}

export default new WeatherRepository();
