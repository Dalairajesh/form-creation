const formService = require('../services/form.services');
const { validateFormCreation, validateFormData } = require('../utils/validate');

exports.createForm = async (req, res) => {
    try {
      const { error } = validateFormCreation(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      await formService.createForm(req.body);
      res.status(201).json({ status:201,message: 'Form created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.fillData = async (req, res) => {
    try {

      const { error } = validateFormData(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      await formService.fillData(req.query.form_title, req.body);
      res.status(201).json({status:201, message: 'Data filled successfully' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  
  exports.getAllData = async (req, res) => {
    try {
      const data = await formService.getAllData(req.query.form_title);
      res.status(200).json({status:200, data:data});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };