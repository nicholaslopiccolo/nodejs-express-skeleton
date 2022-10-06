// Load all the environment variables from .env file
require('dotenv').config()

// Expressjs setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
// Express session, to store the session with req.session.*
const session = require('express-session');
// Body parser, to get the data from requests with req.body
const bodyParser = require('body-parser');
// helmet.js, improve security
const helmet = require('helmet');
const logger = require('./Workers/logger');

// request-ip is optional use it only if needed
const requestIp = require('request-ip');

app.use(express.static('Public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(helmet())

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.SECRET || 'change-me',
  resave: false,
  // You can store the session on a database
  //store: new MongoStore(),
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use('/*', (req,res,next)=>{
  if(req.method == 'HEAD'){
    let ip = requestIp.getClientIp(req)

    logger.http('head',{message:`head request from: ${ip}`})
    
  }
  console.log(req.method);
  
  next();
})

const indexRouter = require('./Routes/index');
const userRouter = require('./Routes/user');

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
});