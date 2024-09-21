const fs = require('fs');

const largeString = 'a'.repeat(1e6);

const largePayload = {
  data: largeString,
};

const payloadString = JSON.stringify(largePayload);

fs.writeFileSync('largePayload.json', payloadString);

console.log('Payload criado com sucesso!');
