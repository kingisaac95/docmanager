export default {
  'Visit All Pages': (client) => {
    client
      .url('http://localhost:8000')
      .waitForElementVisible('body', 5000)
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'kingisaac95')
      .assert.visible('input[type=password]')
      .setValue('input[type=password]', 'password')
      .click('.btn-large')
      .pause(3000)
      .assert.urlContains('dashboard')
      .click('#documents')
      .pause(3000)
      .assert.urlContains('documents')
      .click('#users')
      .pause(3000)
      .assert.urlContains('users')
      .click('#logout')
      .assert.urlContains('')
      .pause(5000)
      .end();
  },
};
