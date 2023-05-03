//npm install jest

////Para configurar o jest como script de teste deve-se editar o 'package.json'
//No agrupamento "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1"
//  }, alterar para:
//"scripts": {
//    "test": "jest"
//  },
//Para executar os testes:
//npm test

// importa-se a função getAdvice e o pacote axios.
const axios = require('axios');
const { getAdvice } = require('./advice');

// usamos a função jest.mock('axios') para criar um mock da biblioteca axios
// um mock é uma simulação de um objeto ou biblioteca que usamos para testar uma função isoladamente, sem depender do comportamento real do objeto ou biblioteca
jest.mock('axios');

// usa-se a função test do Jest para declarar o teste
test('Deve retornar um conselho', async () => {
    // dentro do teste, cria-se uma variável data que simula a resposta da requisição HTTP GET da API. Neste caso, simula-se uma mensagem de conselho aleatória com a string "Mocked advice".
    const response = {
        slip: { advice: 'Mocked advice' }
    };
    // usa-se o método mockResolvedValue do Jest para simular a resposta da requisição HTTP GET da API. Este método recebe como parâmetro um objeto que representa a resposta da API
    axios.get.mockResolvedValue(response);

    // chama-se a função getAdvice e atribuí-se o resultado a uma variável advice
    const { slip } = await getAdvice();

    // função expect para fazer as verificações
    // verifica-se se a função axios.get foi chamada com a URL correta.
    expect(axios.get).toHaveBeenCalledWith('https://api.adviceslip.com/advice');
    // verifica-se se a variável advice contém a mensagem de conselho correta
    expect(slip.advice).toBe('Mocked advice');
});