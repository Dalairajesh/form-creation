const Joi = require('joi');

const formCreationSchema = Joi.object({
    uniqueId: Joi.string().guid({ version: 'uuidv4' }),
    title: Joi.string().required(),
    name: Joi.string(),
    email:Joi.string().email(),
    phonenumber: Joi.number(),
    isGraduate: Joi.boolean()
});

const formDataSchema = Joi.object({
    uniqueId: Joi.string().guid({ version: 'uuidv4' }),
    title: Joi.string(),
    name: Joi.string().required(),
    email:Joi.string().email().required(),
    phonenumber: Joi.number().required(),
    isGraduate: Joi.boolean().required()
});

exports.validateFormCreation = (data) => formCreationSchema.validate(data);
exports.validateFormData = (data) => formDataSchema.validate(data);
