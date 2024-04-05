//ler arquivos com o node
//lib fs(file System)
const fs = require("fs");
fs.readFile("AULA02/dados.csv", (erro, data) => {
  //? Optei pela utilização do operador ternário
  erro ? console.log(erro) : console.log(data.toString());
});
