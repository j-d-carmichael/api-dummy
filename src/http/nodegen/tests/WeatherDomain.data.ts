import * as Joi from 'joi';

export const weatherGetQueryOffset = 11;

export const weatherGetQueryTextSearch = 'rM49eC14dMk07ODWG5ZrFEEpzgajmlP7TXXzzgz';

export const weatherPostBodyWeatherPost = {
  date: '1973-02-01',
  location: '2PtkzZXnAE8ZxlejQ',
  cloudCoverPercentage: 45,
  humidityPercentage: 4,
  temperature: 5,
};

export const pathId = 12;

export const weatherIdPutBodyWeatherIdPut = {
  date: '2014-08-28',
  location: 'fFOios6PaFF3vbrAbMKTz5F1zhuI22rMoUtPzrlH7CqlYXUWzsOFpK1AdoFGJqzrhrqnUSXlRNGuXcsdqDHX',
  cloudCoverPercentage: 63,
  humidityPercentage: 43,
  temperature: 59,
  id: 93,
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
