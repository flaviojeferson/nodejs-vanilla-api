module.exports = function extractDynamicParams(request) {
  if (!request.headers.host || !request.url) {
    throw new Error("Request headers or URL are missing.");
  }

  const url = new URL(request.url, `http://${request.headers.host}`);
  const paramsArray = url.pathname.split("/").filter(Boolean);
  const params = {};

  if (paramsArray.length === 0) {
    url.endpoint = "/";
  } else if (paramsArray.length === 1) {
    url.endpoint = "/:id";
    params.id = paramsArray[0];
  } else if (paramsArray.length === 2) {
    url.endpoint = "/:resource/:id";

    params.resource = paramsArray[0];
    params.id = paramsArray[1];
  }

  request.url = url;
  request.params = params;

  return request;
};
