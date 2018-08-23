// const faker = require('faker');
// const fs = require('fs');

// fs.writeFile('data.csv', '', (err) => {
//   if (err) throw err;
//   console.log('Header created!');
//   let recurseSeeding = (count = 0) => {
//     if (count % 1000000 === 0) console.log('# of records created:', count)
//     if (count === 10000000) {
//       return;
//     }
//     let name = faker.random.words();
//     let claimed = faker.random.boolean();
//     let rating = faker.random.number({min: 1, max: 5});
//     let review_count = faker.random.number({min: 1, max: 5000});
//     let price = faker.finance.currencySymbol();
//     let category = faker.random.word();
//     let address_street = faker.address.streetAddress();
//     let address_city = faker.address.city();
//     let address_state = faker.address.state();
//     let address_zip = faker.address.zipCode();
//     let address_country = 'United States';
//     let website = faker.internet.url();
//     let email = faker.internet.email();
//     let phone = faker.phone.phoneNumber();
//     let entry = '\n' + name + ';' + claimed + ';' + rating + ';' + review_count + ';' + price + ';'
//     + category + ';' + address_street + ';' + address_city + ';' + address_state + ';' + address_zip + 
//     ';' + address_country + ';' + website + ';' + email + ';' + phone
//     fs.appendFile('data.csv', entry, (err) => {
//       if (err) throw err;
//       recurseSeeding(count + 1)
//     });
//   }
//   recurseSeeding();
// });

const faker = require('faker');
const fs = require('fs');

fs.writeFile('data.tsv', '', (err) => {
  if (err) throw err;
  console.log('Header created!');
  let recurseSeeding = (count = 0) => {
    if (count % 1000000 === 0) console.log('# of records created:', count)
    if (count === 10000000) {
      return;
    }
    let name = faker.random.words();
    let claimed = faker.random.boolean();
    let rating = faker.random.number({min: 1, max: 5});
    let review_count = faker.random.number({min: 1, max: 5000});
    let price = faker.finance.currencySymbol();
    let category = faker.random.word();
    let address_street = faker.address.streetAddress();
    let address_city = faker.address.city();
    let address_state = faker.address.state();
    let address_zip = faker.address.zipCode();
    let address_country = 'United States';
    let website = faker.internet.url();
    let email = faker.internet.email();
    let phone = faker.phone.phoneNumber();
    let entry = '\n' + name + '\t' + claimed + '\t' + rating + '\t' + review_count + '\t' + price + '\t'
    + category + '\t' + address_street + '\t' + address_city + '\t' + address_state + '\t' + address_zip + 
    '\t' + address_country + '\t' + website + '\t' + email + '\t' + phone
    fs.appendFile('data.tsv', entry, (err) => {
      if (err) throw err;
      recurseSeeding(count + 1)
    });
  }
  recurseSeeding();
});