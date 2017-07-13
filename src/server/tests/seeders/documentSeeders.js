import faker from 'faker';

export default [
  {
    title: faker.lorem.words(),
    content: faker.lorem.sentence(),
    access: 'public',
    UserId: 1,
    RoleId: 1
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.sentence(),
    access: 'public',
    UserId: 2,
    RoleId: 2
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.sentence(),
    access: 'public',
    UserId: 5,
    RoleId: 3
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.sentence(),
    access: 'private',
    UserId: 5,
    RoleId: 3
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.sentence(),
    access: 'role',
    UserId: 5,
    RoleId: 3
  },
  {
    title: faker.lorem.words(),
    content: faker.lorem.sentence(),
    access: 'role',
    UserId: 4,
    RoleId: 4
  },
  {
    title: 'A test document for production-testing',
    content: faker.lorem.sentence(),
    access: 'public',
    UserId: 4,
    RoleId: 4
  }
];
