module.exports = async function bodyParser(request, response) {
  request.body = "";

  return new Promise((resolve) => {
    if (!["POST", "PUT"].includes(request.method)) {
      resolve();
      return;
    }

    request.on("data", (chunk) => {
      request.body += chunk;

      if (request.body.length > 1e6) {
        response
          .status(413)
          .json({ error: "Payload too large. Max size is 1 MB." });
        request.connection.destroy();
        return;
      }
    });

    request.on("end", () => {
      try {
        request.body = JSON.parse(request.body);
        resolve();
      } catch {
        response.status(400).json({
          error: "Invalid JSON format. Please check your data.",
        });
        return;
      }
    });

    request.on("error", () => {
      response.status(500).json({ error: "Server error." });
      return;
    });
  });
};
