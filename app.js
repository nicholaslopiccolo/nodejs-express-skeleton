// Load all the .env variables
require('dotenv').config()

// Expressjs setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
// express session
const session = require('express-session');
// body parser
const bodyParser = require('body-parser');
// helmet.js best practices to improve security
const helmet = require('helmet');

app.use(express.static('Public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(helmet())

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

const indexRouter = require('./Routes/index');

app.use('/',indexRouter);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
});