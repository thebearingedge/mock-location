
'use strict';

var expect;
var chai = require('chai');
var mockLocation = require('../mockLocation');

expect = chai.expect;

describe('mockLocation', function () {

  var location;

  beforeEach(function () {
    location = mockLocation('http://example.com:3000/foo?bar=baz#qux');
  });


  describe('#replace()', function () {

    it('should replace the url', function () {

      location.replace('http://example.com');

      expect(location.toString()).to.equal('http://example.com');
    });

  });


  describe('#hash', function () {

    it('should read the hash portion of the url', function () {

      expect(location.hash).to.equal('#qux');
    });


    it('should set the hash portion of the url', function () {

      location.hash = '#quux';

      expect(location.hash).to.equal('#quux');
    });


    it('should set the hash portion of the url without "#"', function () {

      location.hash = 'quux';

      expect(location.hash).to.equal('#quux');
    });

  });


  describe('#href', function () {

    it('should read the full url', function () {

      expect(location.href)
        .to.equal('http://example.com:3000/foo?bar=baz#qux');
    });


    it('should replace the internal location instance', function () {

      location.href = 'http://foo.com';

      expect(location.toString()).to.equal('http://foo.com');
    });

  });


  describe('#host', function () {

    it('should read the host of the url', function () {

      expect(location.host).to.equal('example.com:3000');
    });


    it('should write the url host', function () {

      location.host = 'api.example.net:1337';

      expect(location.toString())
        .to.equal('http://api.example.net:1337/foo?bar=baz#qux');
    });

  });


  describe('#hostname', function () {

    it('should read the hostname of the url', function () {

      expect(location.hostname).to.equal('example.com');
    });


    it('should write the url hostname', function () {

      location.hostname = 'api.example.net';

      expect(location.toString())
        .to.equal('http://api.example.net:3000/foo?bar=baz#qux');
    });

  });


  describe('#pathname', function () {

    it('should read the url pathname', function () {

      expect(location.pathname).to.equal('/foo');
    });


    it('should return "/" if url has no path', function () {

      var location = mockLocation('example.com');

      expect(location.pathname).to.equal('/');
    });


    it('should write the url pathname', function () {

      location.pathname = '/foo/quux';

      expect(location.toString())
        .to.equal('http://example.com:3000/foo/quux?bar=baz#qux');
    });

  });


  describe('#search', function () {

    it('should read the url search', function () {

      expect(location.search).to.equal('?bar=baz');
    });


    it('should write the url search', function () {

      location.search = 'corge=grault';

      expect(location.toString())
        .to.equal('http://example.com:3000/foo?corge=grault#qux');
    });

  });

});