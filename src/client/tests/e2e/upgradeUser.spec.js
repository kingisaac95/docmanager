export default {
  'Upgrade User': (client) => {
    client
      .url('http://localhost:8000')
      .waitForElementVisible('body')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'kingisaac95')
      .assert.visible('input[type=password]')
      .setValue('input[type=password]', 'password')
      .click('.btn-large')
      .pause(2000)
      .assert.urlContains('dashboard')
      .click('#users')
      .assert.urlContains('users')
      .pause(2000)
      .click('#make-admin')
      .pause(1000)
      .click('#yes-upgrade')
      .pause(2000)
      .click('#logout')
      .assert.urlContains('')
      .pause(2000)
      .end();
  },
};
