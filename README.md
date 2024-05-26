# My Form App

## Overview
This application provides a simple way to create forms and submit data to them. It is built with Node.js, Express, and Sequelize for ORM, following the MVC architecture.

## Routes
- **POST /form/create_form**
  - Creates a new form.
  - **Body**:
    ```json
    {
      "uniqueId": "uuid",
      "title": "string",
      "name": "string",
      "email":"email",
      "phonenumber": "number",
      "isGraduate": "boolean"
    }
    ```

- **POST /form/fill_data?form_title="user"**
  - Submits data to the form.
  - **Body**:
    ```json
    {
      "uniqueId": "uuid",
      "title": "string",
      "name": "string",
      "email":"email",
      "phonenumber": "number",
      "isGraduate": "boolean"
    }
    ```

- **GET /form/fill_data?form_title="user"**
  - Retrieves all data submitted for the specified form.

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
4. Run `npm start` to start the server.

## Contributing
- Follow Git guidelines for commits and branching.


