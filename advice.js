//npm init -y
//npm install axios
//node .\advice.js

// para consumir os dados da API pública Advice Slip JSON API, usa-se o pacote axios, que é um cliente HTTP baseado em Promises
const axios = require('axios');

function getAdvice() {
  return axios.get('https://api.adviceslip.com/advice');
}

getAdvice()

// exporta-se a função getAdvice usando o objeto module.exports para que ela possa ser usada em outros arquivos
module.exports = { getAdvice };