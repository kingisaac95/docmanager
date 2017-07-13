// import dependencies
import expect from 'expect'; // import expect for accertion
import models from '../../models'; // import model
import * as document from '../helpers/documents'; // import document helper

const Document = models.Document;

describe('The Documents model', () => {
  describe('With invalid documents', () => {
    it('should throw error if title is empty', (done) => {
      Document.create(document.noTitle)
        .catch((error) => {
          expect(error.name).toEqual('SequelizeValidationError');
          expect(error.message)
            .toEqual('notNull Violation: title cannot be null');
        });
      done();
    });

    it('should throw error if content is empty', (done) => {
      Document.create(document.noContent)
        .catch((error) => {
          expect(error.name).toEqual('SequelizeValidationError');
          expect(error.message)
            .toEqual('notNull Violation: content cannot be null');
        });
      done();
    });

    it('should throw error if access is not specified', (done) => {
      Document.create(document.noAccess)
        .catch((error) => {
          expect(error.name).toEqual('SequelizeValidationError');
          expect(error.message)
            .toEqual('notNull Violation: access cannot be null');
        });
      done();
    });

    it('should not create document if user is not specified', (done) => {
      Document.create(document.noOwner)
      .catch((error) => {
        expect(error.name).toEqual('SequelizeValidationError');
      });
      done();
    });

    it('should not create document if user does not exist', (done) => {
      Document.create(document.invalidOwner)
      .catch((error) => {
        expect(error.name).toEqual('SequelizeForeignKeyConstraintError');
      });
      done();
    });
  });

  describe('With valid documents', () => {
    it('should create document if all fields exist and are valid', (done) => {
      Document.create(document.validDocument)
      .then((doc) => {
        expect(doc.title).toEqual(document.validDocument.title);
      });
      done();
    });
  });
});
