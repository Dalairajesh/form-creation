const forms = {};

exports.createForm = (form) => {
    if (!forms[form.title]) {
        forms[form.title] = [];
    }
};

exports.fillData = (formTitle, formData) => {
    if (!forms[formTitle]) throw new Error('Form not found');
    forms[formTitle].push(formData);
};

exports.getAllData = (formTitle) => {
    if (!forms[formTitle]) throw new Error('Form not found');
    return forms[formTitle];
};
