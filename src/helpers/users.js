const faker = require('faker');

module.exports = {
  superAdmin: {
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 1
  },
  admin: {
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 2
  },
  user: {
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 3
  },
  testUser: {
    name: "John Doe I",
    username: "jdoe1",
    email: "john.doe@andela.com",
    password: "password",
    roleId: 1
  },
  updateTestUser: {
    name: "John Doe",
    username: "jdoe1",
    email: "john.doe@andela.com",
    password: "password",
    roleId: 1
  }
};
