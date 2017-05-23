import faker from 'faker';

export const testDocument = {
  title: faker
    .lorem
    .text(),
  content: faker
    .lorem
    .sentence(),
  userId: 1,
  access: 'public'
};
export const testDocument2 = {
  title: "John Doe's docs",
  content: "This file contains John Doe's documents and all baba baa baaaaaa",
  userId: 1,
  access: 'public'
};
export const updateTestDocument = {
  title: "John Doe - My Documents",
  content: "This file contains John Doe's documents and all baba baa baaaaaa",
  userId: 1,
  access: 'public'
};