// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/yelpBiz');

// const db = mongoose.connection;
// db.on('error', error => console.log(('Cannot connect to database')));
// db.once('open', () => console.log('Connected to database!'));

const pg = require('pg');
const Sequelize = require('sequelize');

const connection = new Sequelize('sdc', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
})

connection.authenticate()
  .then( () => console.log('****** postgresql is up and running ^.~ ******'))
  .catch(err => console.error(err))

module.exports = connection;