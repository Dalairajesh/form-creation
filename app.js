require('dotenv').config()
const cors = require('cors')
const express = require('express')
const db = require('./src/config/index')
const formRoutes = require('./src/routes/form.route');

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.APP_PORT ||3030

// app.use((req, res, next) => {
//     const error = new Error('Not Found');
//     error.status = 404;
//     next(error);
// });

db.sequelize.sync()

app.use('/form', formRoutes);

app.listen(port, ()=> {
    console.log(`server is running on ${port}`);
})