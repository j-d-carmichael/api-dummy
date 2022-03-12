import * as Joi from 'joi';

export const weatherGetQueryOffset = 60;

export const weatherGetQueryTextSearch = '3tX0brDUqMXjEOQk81jRuIhRrhRBomLcnlBPyR1WzZk3XwveeGCpO9o3akZrlk4kS';

export const weatherPostBodyWeatherPost = {
  date: '2013-08-05',
  location: 'KwN7yRG6npCLsy4xDZjwjVG6Hvtxl1aIoKzRybL4kh3w6qjO2ddOpWWccVUuH',
  cloudCoverPercentage: 6,
  humidityPercentage: 48,
  temperature: 10,
};

export const pathId = 28;

export const weatherIdPutBodyWeatherIdPut = {
  date: '2003-06-10',
  location: 'fWie3Ot64oHMvZIcjCBZdsWc4SCZQK6s',
  cloudCoverPercentage: 27,
  humidityPercentage: 96,
  temperature: 73,
  id: 64,
};

export const validationSchemas: Record<string, Joi.AnySchema> = {
  weatherGet200: Joi.object({
    meta: Joi.object({
      totalResultCount: Joi.number().allow(null),
      offset: Joi.number().allow(null),
      limit: Joi.number().allow(null),
    }).allow(null),
    data: Joi.array().items(
      Joi.object({
        id: Joi.number().integer().allow(null),
        date: Joi.string().allow('').allow(null),
        location: Joi.string().allow('').allow(null),
        cloudCoverPercentage: Joi.number().integer().allow(null),
        humidityPercentage: Joi.number().integer().allow(null),
        temperature: Joi.number().allow(null),
      }).allow(null)
    ),
  }).allow(null),
  weatherGetSuccess: Joi.object({
    meta: Joi.object({
      totalResultCount: Joi.number().allow(null),
      offset: Joi.number().allow(null),
      limit: Joi.number().allow(null),
    }).allow(null),
    data: Joi.array().items(
      Joi.object({
        id: Joi.number().integer().allow(null),
        date: Joi.string().allow('').allow(null),
        location: Joi.string().allow('').allow(null),
        cloudCoverPercentage: Joi.number().integer().allow(null),
        humidityPercentage: Joi.number().integer().allow(null),
        temperature: Joi.number().allow(null),
      }).allow(null)
    ),
  }).allow(null),
  weatherGet404: Joi.object({}),
  weatherPost200: Joi.object({
    id: Joi.number().integer().allow(null),
    date: Joi.string().allow('').allow(null),
    location: Joi.string().allow('').allow(null),
    cloudCoverPercentage: Joi.number().integer().allow(null),
    humidityPercentage: Joi.number().integer().allow(null),
    temperature: Joi.number().allow(null),
  }).allow(null),
  weatherPostSuccess: Joi.object({
    id: Joi.number().integer().allow(null),
    date: Joi.string().allow('').allow(null),
    location: Joi.string().allow('').allow(null),
    cloudCoverPercentage: Joi.number().integer().allow(null),
    humidityPercentage: Joi.number().integer().allow(null),
    temperature: Joi.number().allow(null),
  }).allow(null),
  weatherPost404: Joi.object({}),
  weatherPost422: Joi.object({}),
  weatherLatestGet200: Joi.object({
    meta: Joi.object({
      totalResultCount: Joi.number().allow(null),
      offset: Joi.number().allow(null),
      limit: Joi.number().allow(null),
    }).allow(null),
    data: Joi.array().items(
      Joi.object({
        id: Joi.number().integer().allow(null),
        date: Joi.string().allow('').allow(null),
        location: Joi.string().allow('').allow(null),
        cloudCoverPercentage: Joi.number().integer().allow(null),
        humidityPercentage: Joi.number().integer().allow(null),
        temperature: Joi.number().allow(null),
      }).allow(null)
    ),
  }).allow(null),
  weatherLatestGetSuccess: Joi.object({
    meta: Joi.object({
      totalResultCount: Joi.number().allow(null),
      offset: Joi.number().allow(null),
      limit: Joi.number().allow(null),
    }).allow(null),
    data: Joi.array().items(
      Joi.object({
        id: Joi.number().integer().allow(null),
        date: Joi.string().allow('').allow(null),
        location: Joi.string().allow('').allow(null),
        cloudCoverPercentage: Joi.number().integer().allow(null),
        humidityPercentage: Joi.number().integer().allow(null),
        temperature: Joi.number().allow(null),
      }).allow(null)
    ),
  }).allow(null),
  weatherLatestGet404: Joi.object({}),
  weatherIdDelete200: Joi.object({}),
  weatherIdDeleteSuccess: Joi.object({}),
  weatherIdDelete404: Joi.object({}),
  weatherIdGet200: Joi.object({
    id: Joi.number().integer().allow(null),
    date: Joi.string().allow('').allow(null),
    location: Joi.string().allow('').allow(null),
    cloudCoverPercentage: Joi.number().integer().allow(null),
    humidityPercentage: Joi.number().integer().allow(null),
    temperature: Joi.number().allow(null),
  }).allow(null),
  weatherIdGetSuccess: Joi.object({
    id: Joi.number().integer().allow(null),
    date: Joi.string().allow('').allow(null),
    location: Joi.string().allow('').allow(null),
    cloudCoverPercentage: Joi.number().integer().allow(null),
    humidityPercentage: Joi.number().integer().allow(null),
    temperature: Joi.number().allow(null),
  }).allow(null),
  weatherIdGet404: Joi.object({}),
  weatherIdPut200: Joi.object({
    id: Joi.number().integer().allow(null),
    date: Joi.string().allow('').allow(null),
    location: Joi.string().allow('').allow(null),
    cloudCoverPercentage: Joi.number().integer().allow(null),
    humidityPercentage: Joi.number().integer().allow(null),
    temperature: Joi.number().allow(null),
  }).allow(null),
  weatherIdPutSuccess: Joi.object({
    id: Joi.number().integer().allow(null),
    date: Joi.string().allow('').allow(null),
    location: Joi.string().allow('').allow(null),
    cloudCoverPercentage: Joi.number().integer().allow(null),
    humidityPercentage: Joi.number().integer().allow(null),
    temperature: Joi.number().allow(null),
  }).allow(null),
  weatherIdPut404: Joi.object({}),
  weatherIdPut422: Joi.object({}),
};

/**
 * Default, basic validator which checks if the schema returned matches
 * the schema defined in the API spec.
 * This is just a starting point for the tests, but this should be replaced by more specific,
 * targeted test cases.
 *
 * @param {string}  responseKey  The response key
 * @param {any}     schema       The schema
 */
export const responseValidator = (responseKey: string, schema: any): { error?: Joi.ValidationError } => {
  return validationSchemas[responseKey].validate(schema);
};
