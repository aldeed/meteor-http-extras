// URL prefix for tests to talk to
var _XHR_URL_PREFIX = "/http_extras_test_responder";

var url_base = function () {
  if (Meteor.isServer) {
    var address = WebApp.httpServer.address();
    return "http://127.0.0.1:" + address.port;
  } else {
    return "";
  }
};

var url_prefix = function () {
  if (Meteor.isServer && _XHR_URL_PREFIX.indexOf("http") !== 0) {
    _XHR_URL_PREFIX = url_base() + _XHR_URL_PREFIX;
  }
  return _XHR_URL_PREFIX;
};

testAsyncMulti("httpcall - binary", [
  function(test, expect) {
    
    // "blob" and "document" are client-only
    if (Meteor.isClient) {
      HTTP.call(
              "GET", url_prefix() + "/binary",
              {responseType: "blob"},
      expect(function(error, result) {
        test.isFalse(error);
        test.isTrue(result);
        test.equal(result.statusCode, 200);
        test.instanceOf(result.content, Blob);
      }));
      
      HTTP.call(
              "GET", url_prefix() + "/document",
              {responseType: "document"},
      expect(function(error, result) {
        test.isFalse(error);
        test.isTrue(result);
        test.equal(result.statusCode, 200);
        test.instanceOf(result.content, Document);
      }));
    }

    HTTP.call(
            "GET", url_prefix() + "/binary",
            {responseType: "arraybuffer"},
    expect(function(error, result) {
      test.isFalse(error);
      test.isTrue(result);
      test.equal(result.statusCode, 200);
      test.instanceOf(result.content, ArrayBuffer);
    }));

    HTTP.call(
            "GET", url_prefix() + "/binary",
            {responseType: "ejson-binary"},
    expect(function(error, result) {
      test.isFalse(error);
      test.isTrue(result);
      test.equal(result.statusCode, 200);
      test.isTrue(EJSON.isBinary(result.content));
    }));

  }
]);