const http = require("http");
const fs = require("fs");
const port = 8000;

function requestHandler(req, res) {
  fs.readFile("./index.html", function (err, data) {
    if (err) {
      return;
    }
    return res.end(data);
  });
}

const server = http.createServer(requestHandler);

server.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`server is up on port ${port}`);
});
