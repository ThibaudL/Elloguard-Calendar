var Joi = require('joi');

module.exports = {
  options: { flatten : true },
  body: {
    id: Joi.string().required(),
    name: Joi.string().required(),
    start: Joi.string().required(),
    end: Joi.string()
  }
};
