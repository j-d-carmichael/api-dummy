import express from 'express';
import Router from 'express-promise-router';

import { celebrate } from 'celebrate';

import permissionMiddleware from '../middleware/permissionMiddleware';

import weatherValidators from '../validators/weatherValidators';
import WeatherDomain from '../../../domains/WeatherDomain';
import weatherTransformOutputs from '../transformOutputs/weatherTransformOutput';
import GenerateItExpressResponse from '@/http/nodegen/interfaces/GenerateItExpressResponse';

export default function () {
  const router = Router();

  /**
   * Operation ID: weatherGet
   * Summary: weather search
   * Description: Search for weather objects
   */

  router.get(
    '/',

    celebrate(
      weatherValidators.weatherGet
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await WeatherDomain.weatherGet(req.query),
        200,
        undefined,
        weatherTransformOutputs.weatherGet
      );
    }
  );

  /**
   * Operation ID: weatherPost
   * Summary: weather data
   * Description: Create a new weather record.
   */

  router.post(
    '/',

    permissionMiddleware(
      'apiDummyDCreateWeather'
    ) /* Check permission of the incoming user */,
    celebrate(
      weatherValidators.weatherPost
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await WeatherDomain.weatherPost(req.body),
        200,
        undefined,
        weatherTransformOutputs.weatherPost
      );
    }
  );

  /**
   * Operation ID: weatherLatestGet
   * Summary: lastest weather data
   * Description: Get the latest temperatures
   */

  router.get(
    '/latest',

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await WeatherDomain.weatherLatestGet(),
        200,
        'application/json',
        weatherTransformOutputs.weatherLatestGet
      );
    }
  );

  /**
   * Operation ID: weatherIdDelete
   * Summary: weather set to rain
   * Description: Reset awful sunny weather to excellent rainy weather
   */

  router.delete(
    '/:id',

    celebrate(
      weatherValidators.weatherIdDelete
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await WeatherDomain.weatherIdDelete(req.params),
        200,
        undefined,
        weatherTransformOutputs.weatherIdDelete
      );
    }
  );

  /**
   * Operation ID: weatherIdGet
   * Summary: One weather object
   * Description: Get the full weather object
   */

  router.get(
    '/:id',

    celebrate(
      weatherValidators.weatherIdGet
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await WeatherDomain.weatherIdGet(req.params),
        200,
        'application/json',
        weatherTransformOutputs.weatherIdGet
      );
    }
  );

  /**
   * Operation ID: weatherIdPut
   * Summary: weather data
   * Description: Create a new weather record.
   */

  router.put(
    '/:id',

    celebrate(
      weatherValidators.weatherIdPut
    ) /* Validate the request data and return validation errors, options passed in via x-joi-options */,

    async (req: any, res: GenerateItExpressResponse) => {
      res.inferResponseType(
        await WeatherDomain.weatherIdPut(req.body, req.params),
        200,
        'application/json',
        weatherTransformOutputs.weatherIdPut
      );
    }
  );

  return router;
}
