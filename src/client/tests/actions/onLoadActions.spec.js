import expect from 'expect';
import * as onLoadActions from '../../actions/OnLoadActions';
import * as types from '../../constants/types';

describe('On Load Actions', () => {
  describe('getQuoteSuccess', () => {
    it('should create a GET_QUOTE_SUCCESS actions', () => {
      // perpare mock data
      const quote = {};
      const expectedAction = {
        type: types.GET_QUOTE_SUCCESS,
        quote
      };

      // fire off the action
      const action = onLoadActions.getQuoteSuccess(quote);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('getQuoteFailed', () => {
    it('should create a GET_QUOTE_FAILED actions', () => {
      // perpare mock data
      const expectedAction = {
        type: types.GET_QUOTE_FAILED,
      };

      // fire off the action
      const action = onLoadActions.getQuoteFailed();

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});
