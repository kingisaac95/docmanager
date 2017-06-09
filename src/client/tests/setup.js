import JSDOM from 'jsdom';

const jsdom = JSDOM.jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

// Disable webpack-specific features unknown to mocha for tests
require.extensions['.css'] = () => null;
require.extensions['.png'] = () => null;
require.extensions['.jpg'] = () => null;

global.document = jsdom('');

global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

global.Materialize = { toast: () => {} };

global.localStorage = {
  setItem: () => {},
  removeItem: () => {},
};

global.$ = () => ({ modal: () => {} });
