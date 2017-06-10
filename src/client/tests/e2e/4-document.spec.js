import faker from 'faker';

export default {
  'Create Document': (client) => {
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
      .click('#create-document')
      .pause(2000)
      .assert.visible('input[name=title]')
      .setValue('input[name=title]', faker.lorem.words())
      .click('select option[value="public"]')
      .click('.mce-i-code')
      .setValue('.mce-textbox', faker.lorem.paragraphs())
      .click('.mce-floatpanel .mce-container-body button')
      .pause(2000)
      .click('#createBtn')
      .assert.urlContains('documents')
      .click('#logout')
      .assert.urlContains('')
      .pause(2000)
      .end();
  },

  'View Document': (client) => {
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
      .click('#card-content')
      .assert.urlContains('view')
      .pause(2000)
      .click('a[id=back]')
      .assert.urlContains('documents')
      .pause(2000)
      .click('#logout')
      .assert.urlContains('')
      .pause(2000)
      .end();
  },

  'Edit Document': (client) => {
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
      .click('#edit-icon')
      .assert.urlContains('edit')
      .click('.mce-i-code')
      .clearValue('.mce-textbox')
      .setValue('.mce-textbox', faker.lorem.paragraphs())
      .click('.mce-floatpanel .mce-container-body button')
      .pause(2000)
      .click('button[name=update]')
      .pause(2000)
      .click('#logout')
      .assert.urlContains('')
      .pause(2000)
      .end();
  },

  'Delete Document': (client) => {
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
      .click('#delete-btn-icon')
      .pause(2000)
      .click('#yes-delete')
      .pause(2000)
      .click('#logout')
      .end();
  },

};
