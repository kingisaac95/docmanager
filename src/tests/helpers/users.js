const faker = require('faker');

export const superAdmin = {
  name: faker.name.findName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  roleId: 1
};
export const admin = {
  name: faker.name.findName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  roleId: 2
};
export const user = {
  name: faker.name.findName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  roleId: 3
};
export const testUser = {
  name: "John Doe I",
  username: "jdoe1",
  email: "john.doe@andela.com",
  password: "password",
  roleId: 1
};
export const updateTestUser = {
  name: "John Doe",
  username: "jdoe1",
  email: "john.doe@andela.com",
  password: "password",
  roleId: 1
};