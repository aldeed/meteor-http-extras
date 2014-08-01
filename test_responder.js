var TEST_RESPONDER_ROUTE = "/http_extras_test_responder";

var respond = function(req, res) {

  if (req.url === "/binary") {
    res.statusCode = 200;
    var b = new Buffer('Hello world!');
    res.end(b, "binary");
  } else if (req.url === "/document") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html></html>");
  }

};

var run_responder = function() {
  WebApp.connectHandlers.stack.unshift(
    { route: TEST_RESPONDER_ROUTE, handle: respond });
};

run_responder();