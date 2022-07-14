const express = require('express');
const os = require('os');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();
const publisherRouter = require("./routers/publisher")

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(publisherRouter)

app.use(express.static('dist'));

app.listen(process.env.API_PORT, () => console.log(`Listening on port ${process.env.API_PORT}!`));
