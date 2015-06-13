
'use strict';

var parse = require('url-parse');

module.exports = function mockLocation(url) {

  var location = parse(url);

  var api = {
    replace: function (url) {
      location = parse(url);
    },
    toString: function () {
      return location.toString();
    }
  };

  Object.defineProperties(api, {

    hash: {
      get: function () {
        return location.hash;
      },
      set: function (hash) {
        if (hash[0] !== '#') {
          hash = '#' + hash;
        }
        location.set('hash', hash);
      }
    },


    href: {
      get: function () {
        return location.href;
      },
      set: function (href) {
        api.replace(href);
      }
    },


    pathname: {
      get: function () {
        return location.pathname;
      },
      set: function (pathname) {
        location.set('pathname', pathname);
      }
    },


    search: {
      get: function () {
        return location.query;
      },
      set: function (search) {
        location.set('query', search);
      }
    }

  });

  return api;
};