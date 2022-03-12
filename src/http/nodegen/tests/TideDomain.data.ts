import * as Joi from 'joi';

export const tideGetQueryOffset = 94;

export const tideGetQueryTextSearch = 'LDj13sX67Up6xPpf3t9i3Q09I5Cr20mRe8iePy2ZUBW83nE1kBe4';

export const validationSchemas: Record<string, Joi.AnySchema> = {
  tideGet200: Joi.object({
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
  tideGetSuccess: Joi.object({
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
  tideGet404: Joi.object({}),
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
