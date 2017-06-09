import faker from 'faker';

export const testDocument = {
  title: faker.lorem.words(),
  content: faker.lorem.sentence(),
  access: 'public'
};

export const anotherTestDocument = {
  title: 'John Doe\'s docs',
  content: 'This file contains John Doe\'s documents and all baba baa baaaaaa',
  access: 'public'
};

export const invalid = {
  content: 'This file contains John Doe\'s documents and all baba baa baaaaaa',
  access: 'public'
};

export const noTitle = {
  content: 'This file contains John Doe\'s documents and all baba baa baaaaaa',
  access: 'public',
  RoleId: 1,
  UserId: 1,
};

export const noContent = {
  title: 'This file contains',
  access: 'public',
  RoleId: 1,
  UserId: 1,
};

export const noAccess = {
  title: 'This file contains baaaaaa',
  content: 'This file contains John Doe\'s documents and all baba baa baaaaaa',
  RoleId: 1,
  UserId: 1,
};

export const inoOwner = {
  title: 'This file contains baaaaaa',
  content: 'This file contains John Doe\'s documents and all baba baa baaaaaa',
  access: 'role',
  RoleId: 1,
};

export const invalidOwner = {
  title: 'This file contains baaaaaa',
  content: 'This file contains John Doe\'s documents and all baba baa baaaaaa',
  access: 'role',
  UserId: 200,
  RoleId: 1,
};

export const validDocument = {
  title: 'This file contains baaaaaa',
  content: 'This file contains John Doe\'s documents and all baba baa baaaaaa',
  access: 'public',
  RoleId: 1,
  UserId: 1,
};

export const updateTestDocument = {
  title: 'John Doe - My Documents',
  content: 'This file contains John Doe\'s documents and all baba baa baaaaaa',
  access: 'public'
};
