const faker = require('faker');

module.exports = {
  superAdminRole: {
    title: faker.name.title()
  },
  adminRole: {
    title: faker.name.title()
  },
  userRole: {
    title: faker.name.title()
  },
  roleIdTest: {
    title: faker.name.title()
  },
  testRole: {
    title: "Test-User"
  },
  updateTestRole: {
    title: "Test User"
  },
}