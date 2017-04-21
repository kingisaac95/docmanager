const faker = require('faker');

module.exports = {
  testDocument: {
    title: faker.lorem.text(),
    content: faker.lorem.sentences(),
    userId: 1,
    isPublic: true
  },
  testDocument2: {
    title: "John Doe's docs",
    content: "This file contains John Doe's documents and all baba baa baaaaaa",
    userId: 1,
    isPublic: true
  },
  updateTestDocument: {
    title: "John Doe - My Documents",
    content: "This file contains John Doe's documents and all baba baa baaaaaa",
    userId: 1,
    isPublic: true
  }
}