import faker from 'faker';

export default [
  {
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    RoleId: 1
  },
  {
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    RoleId: 1
  },
  {
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    RoleId: 1
  },
  {
    name: 'Kingdom Orjiewuru',
    username: 'kingisaac95',
    email: faker.internet.email(),
    password: 'password',
    RoleId: 1
  },
  {
    name: 'John Doe',
    username: 'jdoe1',
    email: 'john.doe@andela.com',
    password: 'password',
    RoleId: 3
  },
  {
    name: 'Super Admin',
    username: 'admin',
    email: faker.internet.email(),
    password: 'password',
    RoleId: 1
  }
];
