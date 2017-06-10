// import faker from 'faker';

// export default {
//   'Register A User As Regular User': (client) => {
//     client
//       .url('http://localhost:8000')
//       .waitForElementVisible('body')
//       .assert.visible('#signUpButton')
//       .pause(1000)
//       .click('#signUpButton')
//       .pause(2000)
//       .assert.visible('input[id=signup-name]')
//       .setValue('input[id=signup-name]', faker.name.findName())
//       .assert.visible('input[id=signup-email]')
//       .setValue('input[id=signup-email]', faker.internet.email())
//       .assert.visible('input[id=signup-username]')
//       .setValue('input[id=signup-username]', faker.internet.userName())
//       .assert.visible('input[id=signup-password]')
//       .setValue('input[id=signup-password]', 'password')
//       .assert.visible('input[id=signup_confirm_password]')
//       .setValue('input[id=signup_confirm_password]', 'password')
//       .assert.visible('#registerBtn')
//       .click('#registerBtn')
//       .pause(2000)
//       .assert.urlContains('dashboard')
//       .click('#logout')
//       .pause(2000)
//       .end();
//   },

//   'Login As Super Admin and Upgrade The User To Admin': (client) => {
//     client
//       .url('http://localhost:8000')
//       .waitForElementVisible('body')
//       .assert.visible('input[type=text]')
//       .setValue('input[type=text]', 'kingisaac95')
//       .assert.visible('input[type=password]')
//       .setValue('input[type=password]', 'password')
//       .click('.btn-large')
//       .pause(2000)
//       .assert.urlContains('dashboard')
//       .pause(2000)
//       .click('#users')
//       .assert.urlContains('users')
//       .pause(2000)
//       .click('#make-admin')
//       .pause(1000)
//       .click('#upgrade')
//       .pause(3000)
//       .click('#logout')
//       .pause(2000)
//       .end();
//   },

//   'Delete User': (client) => {
//     client
//       .url('http://localhost:8000')
//       .waitForElementVisible('body')
//       .assert.visible('input[type=text]')
//       .setValue('input[type=text]', 'kingisaac95')
//       .assert.visible('input[type=password]')
//       .setValue('input[type=password]', 'password')
//       .click('.btn-large')
//       .pause(2000)
//       .assert.urlContains('dashboard')
//       .click('#users')
//       .assert.urlContains('users')
//       .pause(2000)
//       .click('#delete-btn-icon')
//       .pause(2000)
//       .click('#yes-delete')
//       .pause(2000)
//       .click('#logout')
//       .pause(2000)
//       .end();
//   },
// };
