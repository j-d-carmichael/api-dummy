import { Joi } from 'celebrate';

export default {
  weatherGet: {
    query: Joi.object({
      offset: Joi.number().integer(),
      textSearch: Joi.string().allow(''),
    }),
  },

  weatherPost: {
    body: Joi.object({
      date: Joi.string().allow('').allow(null),
      location: Joi.string().allow('').allow(null),
      cloudCoverPercentage: Joi.number().integer().allow(null),
      humidityPercentage: Joi.number().integer().allow(null),
      temperature: Joi.number().allow(null),
    }),
  },

  weatherLatestGet: {},

  weatherIdDelete: {
    params: Joi.object({ id: Joi.number().integer().required() }),
  },

  weatherIdGet: {
    params: Joi.object({ id: Joi.number().integer().required() }),
  },

  weatherIdPut: {
    body: Joi.object({
      date: Joi.string().allow('').allow(null),
      location: Joi.string().allow('').allow(null),
      cloudCoverPercentage: Joi.number().integer().allow(null),
      humidityPercentage: Joi.number().integer().allow(null),
      temperature: Joi.number().allow(null),
      id: Joi.number().integer().allow(null),
    }),
    params: Joi.object({ id: Joi.number().integer().required() }),
  },
};
