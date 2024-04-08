//Como criar arquivos
const fs = require("fs");
let log = "Mensagem de log\n";
//Criação de arquivo de log síncrono
fs.writeFileSync("./logs.log", log);
console.log("Arquivo criado com sucesso");
