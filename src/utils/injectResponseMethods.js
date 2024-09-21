module.exports = function injectResponseMethods(response) {
  // Função utilitária para evitar duplicação de código
  const sendResponse = (response, content, contentType = "text/plain") => {
    response.setHeader("Content-Type", contentType);
    response.end(content);
  };

  // Método para retornar JSON
  response.json = (data) => {
    try {
      const jsonData = JSON.stringify(data);
      sendResponse(response, jsonData, "application/json");
    } catch (error) {
      console.error("Erro ao serializar JSON:", error);
      response.status(500).end("Erro ao gerar a resposta JSON");
    }
    return response; // Para permitir encadeamento de métodos
  };

  // Método para definir o status HTTP
  response.status = (code) => {
    if (typeof code === "number" && code >= 100 && code < 600) {
      response.statusCode = code;
    } else {
      console.error("Código de status inválido:", code);
      response.statusCode = 500; // Padrão para erro interno do servidor
    }
    return response;
  };

  return response; // Para garantir que o objeto modificado seja retornado
};
