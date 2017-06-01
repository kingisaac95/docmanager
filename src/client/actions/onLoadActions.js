import http from 'axios';
import * as types from '../constants/types';

/**
 * @function
 * @param {object} quote
 * @returns {object} - action type
 */
export function getQuoteSuccess(quote) {
  return { type: types.GET_QUOTE_SUCCESS, quote };
}

/**
 * @function
 * @returns {object} - action type
 */
export function getQuoteFailed() {
  return { type: types.GET_QUOTE_FAILED };
}

/**
 * @function
 * @returns {object} - quote
 */
export function loadQuote() {
  return (dispatch) => {
    http.defaults.headers.common['X-Mashape-Key']
      = '1WBaZHqqybmsh0Ar05qdMEcBOZq2p1RsMC8jsnqGqXjiHEmzIT';
    http
      .get('https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous')
      .then((res) => {
        dispatch(getQuoteSuccess(res.data));
      }, (err) => {
        dispatch(getQuoteFailed());
        Materialize.toast(err.response.data.message, 3000, 'red');
        throw ('error', err.response.data.message);
      });
  };
}
