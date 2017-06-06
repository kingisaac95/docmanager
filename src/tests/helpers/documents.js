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
export const updateTestDocument = {
  title: 'John Doe - My Documents',
  content: 'This file contains John Doe\'s documents and all baba baa baaaaaa',
  access: 'public'
};
