export default {
  'Search Document': (client) => {
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
      .click('#documents')
      .assert.urlContains('documents')
      .pause(2000)
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'doe')
      .pause(2000)
      .keys(client.Keys.ENTER);
  },

  'Search User': (client) => {
    client
      .click('#users')
      .assert.urlContains('users')
      .pause(2000)
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'kingisaac95')
      .pause(2000)
      .keys(client.Keys.ENTER)
      .pause(2000)
      .click('#logout')
      .assert.urlContains('')
      .pause(2000)
      .end();
  },
};
