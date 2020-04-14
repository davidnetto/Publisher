const express = require('express');
const os = require('os');
const bodyParser = require('body-parser')
const userRouter = require('./routers/user')
const { server } = require('./config/constants')
require('./config/db')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(userRouter)
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(server.port, () => console.log(`Listening on port ${server.port}!`));
