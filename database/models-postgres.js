var Sequelize = require('sequelize');
var connection = require('./');

var biz = connection.define('biz', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: Sequelize.STRING,
  claimed: Sequelize.BOOLEAN,
  rating: Sequelize.INTEGER,
  review_count: Sequelize.INTEGER,
  price: Sequelize.STRING,
  category: Sequelize.STRING,
  address_street: Sequelize.STRING,
  address_city: Sequelize.STRING,
  address_state: Sequelize.STRING,
  address_zip: Sequelize.STRING,
  address_country: Sequelize.STRING,
  website: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING
}, {timestamps: false})

connection.sync({force: false})
  .then(() => console.log('***** Synced to PostgreSQL database *****'))
  .catch(err => console.log('****** Error syncing to PostgreSQL database *****'))

module.exports = biz