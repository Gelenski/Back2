//ler arquivos com o node
//lib fs(file System)
const fs = require("fs");
// //! Método Assíncrono
// fs.readFile("AULA02/dados.csv", (erro, data) => {
//   //? Optei pela utilização do operador ternário
//   erro ? console.log(erro) : console.log(data.toString());
//   console.log("Segunda operação")
// });
// let dados = fs.readFileSync("AULA02/dados.csv");
// console.log(dados.toString());
// console.log("Segunda operação");
//Para tratar erros
let dados = "";
if (fs.existsSync("AULA02/dadoss.csv")) {
  dados = fs.readFileSync("AULA02/dados.csv");
  console.log(dados.toString());
} else {
  console.log("Arquivo não encontrado");
}
console.log("Fim");
