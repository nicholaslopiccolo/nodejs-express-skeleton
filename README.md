# Nodejs expressjs skeleton
This repository want to be a ready to use nodeks+expressjs skeleton. You can fork it, npm/yarn install and be ready to create your node app.

The app.js create a server with some basic best practices, security with helmet.js, the parsing with body-paser, express-session to store data on the user session.

## Structure of directories
```
project-name/
 |
 |-- Controllers/
 |-- Database/
 |-- Public/
 |-- Routers/
 |-- Scripts/
 |-- Services/
 |-- Workers/
```
### Controllers
This directory is used to manage data using database functions.

### Database
This directory id used to manage the connection to the database and can have sub-directories depending on the necessity of the database.

eg. Mongo
```
project-name/
 |
 |-- Controllers/
 |-- Database/
 |---- db.js
 |---- Schemes/
 .
 .
 ```
 
### Public
This directory is used to contain the front-end of your application, can be used as output-dir of your frontend build tool (eg. in a vue.config.js file).

### Routers
This directory is used to contain routers from express.js for different purposes.

### Scripts
This directory is used to contain all the scripts as the shell script that can be used in the build.

### Services
This directory is used to contain the services called by the routers and those must use the controller funcions to alter the data from the database.

### Workers
This directory is used to contain files that work in the underground such as cron works, loggers or backup systems.

### .env file

Create the .env file in the root folder to store all your environmental variables.
