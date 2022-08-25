const http = require("http");

// This is a basic http server, just mostly as a placeholder to show how a monorepo might be structured
http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "application/json",
    });
    response.write(JSON.stringify({ status: "fantastic" }));
    response.end();
  })
  .listen(3333, () => console.log("API is started on port 3333"));
