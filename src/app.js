require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const helmet = require('morgan')
const compression = require('compression')

const app = express();

//req đi qua các midderware sau morgan, helmet
app.use(morgan('dev'))
app.use(helmet('combined'))
app.use(compression())

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// khởi tạo database
require('./dbs/init.mongodb')
//khởi tạo router
app.use('/', require('./routers/index'))
// handler error
//handle error khi call sai api
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404;
    next(err)
})

app.use((req, res, next, error) => {
    const statusCode = error.status || 500;
    return res.status(statusCode).json({
        status: 'error',
        message: error.message ||'loi server',
        stack: error.stack,
        code: statusCode,
    })
})
module.exports = app