import faker from 'faker';

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
  name: 'John Doe I',
  username: 'jdoe1',
  email: 'john.doe@andela.com',
  password: 'password',
  roleId: 1
};

export const regularUser = {
  name: 'John Doe',
  username: 'jdoe',
  email: 'john.doe@andela.com',
  password: 'password',
  roleId: 3
};

export const validUser = {
  name: 'John Doe I',
  username: 'jdoe1',
  email: 'john.doe@andela.com',
  password: 'password',
  RoleId: 1
};

export const emptyUsername = {
  name: '',
  username: 'jdoe1',
  email: 'john.doe@andela.com',
  password: 'password',
  RoleId: 1
};

export const updateTestUser = {
  name: 'John Doe',
  username: 'jdoe1',
  email: 'john.doe@andela.com',
  password: 'password',
  RoleId: 1
};

export const noName = {
  username: 'jdoe1',
  email: 'john.doe@andela.com',
  password: 'password',
  RoleId: 1
};

export const noUsername = {
  name: 'John Doe',
  email: 'john.doe@andela.com',
  password: 'password',
  RoleId: 1
};

export const noEmail = {
  name: 'John Doe',
  username: 'jdoe1',
  password: 'password',
  RoleId: 1
};

export const noPassword = {
  name: 'John Doe',
  username: 'jdoe1',
  email: 'john.doe@andela.com',
  RoleId: 1
};

export const tooShortPassword = {
  name: 'John Doe',
  username: 'jdoe1',
  email: 'john.doe@andela.com',
  password: 'pas',
  RoleId: 1
};

export const noRole = {
  name: 'John Doe',
  username: 'jdoe1',
  email: 'john.doe@andela.com',
  password: 'password',
};

export const invalidRole = {
  name: 'John Doe',
  username: 'jdoe1',
  email: 'john.doe@andela.com',
  password: 'password',
  RoleId: 100
};

export const invalid = {
  name: 'John Doe',
  email: 'john.doe@andela.com',
  password: 'password',
  roleId: 1
};
