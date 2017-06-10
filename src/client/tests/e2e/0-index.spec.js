export default {
  'Go to home page': (client) => {
    client
      .url('http://localhost:8000')
      .waitForElementVisible('body')
      .assert.title('DocManager')
      .end();
  }
};
