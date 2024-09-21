const http = require("http");

const bodyParser = require("./middlewares/bodyParser.js");
const routes = require("./routes.js");
const injectResponseMethods = require("./utils/injectResponseMethods.js");
const extractDynamicParams = require("./utils/extractDynamicParams.js");

const server = http.createServer(async (request, response) => {
  response = injectResponseMethods(response);
  request = extractDynamicParams(request);

  await bodyParser(request, response);

  const routeObj = routes.find(
    (route) =>
      route.method === request.method && route.endpoint === request.url.endpoint
  );

  if (routeObj) return routeObj.controller(request, response);

  response
    .status(404)
    .json({ error: `Cannot ${request.method} ${request.url.pathname}` });
});

server.listen(3001, "localhost", () => {
  console.log("🔥 Server started at http://localhost:3001");
});
