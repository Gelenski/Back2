//Como criar arquivos
const fs = require("fs");
let log = "Mensagem de log\n";
//Criação de arquivo de log síncrono
fs.writeFileSync("./logs.log", log, { flag: "a+" });

//Criação de arquivo de forma assíncrona
fs.writeFile("./logs2.log", log, { flag: "a+" }, (erro) => {
  if (erro) {
    console.log(erro);
  }
});

console.log("Arquivo criado com sucesso");

//Exclusão de arquivos
fs.rmSync("./logs.log");
console.log("Arquivo removido pelo rmSync");
fs.unlinkSync("./logs2.log");
console.log("Arquivo removido pelo unlinkSync");
