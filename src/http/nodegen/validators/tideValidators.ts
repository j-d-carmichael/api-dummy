import { Joi } from 'celebrate';

export default {
  tideGet: {
    query: Joi.object({
      offset: Joi.number().integer(),
      textSearch: Joi.string().allow(''),
    }),
  },
};
