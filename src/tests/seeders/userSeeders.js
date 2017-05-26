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
  }
];
