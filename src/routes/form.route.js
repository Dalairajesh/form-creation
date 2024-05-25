const express = require('express');
const router = express.Router();
const formController = require('../controllers/form.controller')

router.post('/create_form', formController.createForm);
router.post('/fill_data', formController.fillData);
router.get('/fill_data', formController.getAllData);

module.exports = router;
