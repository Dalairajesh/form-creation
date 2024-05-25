const formService = require('../services/form.services');
const { validateFormCreation, validateFormData } = require('../utils/validate');

exports.createForm = async (req, res, next) => {
    const { error } = validateFormCreation(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        await formService.createForm(req.body);
        res.status(201).json({ message: 'Form created successfully' });
    } catch (err) {
        next(err);
    }
};

exports.fillData = async (req, res, next) => {
    const { error } = validateFormData(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        await formService.fillData(req.query.form_title, req.body);
        res.status(201).json({ message: 'Data filled successfully' });
    } catch (err) {
        next(err);
    }
};

exports.getAllData = async (req, res, next) => {
    try {
        const data = await formService.getAllData(req.query.form_title);
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
};
