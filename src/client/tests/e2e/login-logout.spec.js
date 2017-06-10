// export default {
//   'Valid User Login': (client) => {
//     client
//       .url('http://localhost:8000')
//       .waitForElementVisible('body', 5000)
//       .assert.visible('input[type=text]')
//       .setValue('input[type=text]', 'kingisaac95')
//       .assert.visible('input[type=password]')
//       .setValue('input[type=password]', 'password')
//       .click('.btn-large')
//       .pause(3000)
//       .assert.urlContains('dashboard')
//       .click('#logout')
//       .assert.urlContains('')
//       .pause(5000)
//       .end();
//   },

//   'Invalid User login': (client) => {
//     client
//       .url('http://localhost:8000')
//       .waitForElementVisible('body', 5000)
//       .assert.visible('input[type=text]')
//       .setValue('input[type=text]', 'kingisaac950')
//       .assert.visible('input[type=password]')
//       .setValue('input[type=password]', 'password')
//       .click('.btn-large')
//       .pause(3000)
//       .assert.urlContains('')
//       .pause(5000)
//       .end();
//   }
// };
