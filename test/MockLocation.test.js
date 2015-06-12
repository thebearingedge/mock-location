
'use strict';

var expect;
var chai = require('chai');
var mockLocation = require('../mockLocation');

expect = chai.expect;

describe('mockLocation', function () {

  var location;

  beforeEach(function () {
    location = mockLocation('http://example.com/foo?bar=baz#qux');
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

      expect(location.href).to.equal('http://example.com/foo?bar=baz#qux');
    });


    it('should replace the internal location instance', function () {

      location.href = 'http://foo.com';

      expect(location.href).to.equal('http://foo.com');
      expect(location.hash).to.equal('');
    });

  });

});