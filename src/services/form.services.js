const  Form  = require('../models/form.model')


exports.createForm = async (formData) => {
    console.log(formData)
  return await Form.create(formData)
};

exports.fillData = async (formTitle, formData) => {
  const form = await Form.findOne({ where: { title: formTitle } });
  if (!form) {
    throw new Error('Form not found');
  }
  return await Form.update(formData,{where:{title: formTitle }});
};

exports.getAllData = async (formTitle) => {
  return await Form.findAll({ where: { title: formTitle } });
};
