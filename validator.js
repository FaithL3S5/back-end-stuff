const Joi = require('@hapi/joi');

const registerValidator = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

const loginValidator = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

const userValidator = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        country: Joi.string().min(6).required(),
        ETA: Joi.date().required(),
        arrival: Joi.boolean().required(),
        attribute: Joi.array().required()
    });
    return schema.validate(data);
};

module.exports.registerValidator = registerValidator;
module.exports.loginValidator = loginValidator;
module.exports.userValidator = userValidator;