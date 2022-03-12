import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { WeatherModel } from '@/http/nodegen/interfaces';

@Entity()
export class Weather implements WeatherModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cloudCoverPercentage: number;

  @Column()
  date: Date;

  @Column()
  humidityPercentage: number;

  @Column()
  location: string;

  @Column()
  temperature: number;
}

