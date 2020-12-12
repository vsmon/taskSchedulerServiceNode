const fs = require("fs");
const exec = require("child_process").execFile;

const mail = require("../app/controllers/MailController");

const runExec = function (command, args) {
  const child = exec(command, args, {});

  let result = "";

  child.stdout.on("data", (data) => {
    //console.log(`stdout: ${data}`);
    result += `stdout: ${new Date()} ${data}`;
  });

  child.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
    result += `stderr: ${data}`;
  });

  /* Retorna erros relacionados ao .exe */
  child.on("error", (error) => {
    console.error(`Ocorreu um erro na execucao do agendador ${error}`);
    result += `Ocorreu um erro na execucao do agendador ${error}`;
  });

  /* Retorna codigo de fechamento da execucao */
  child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);

    if (result !== "") {
      /* Gera arquivo de log na c:/temp */
      fs.appendFile("c:/temp/log.txt", result, { flag: "a" }, (error) => {
        if (error) return console.log(error);
        console.log("Arquivo de log salvo");
      });
      /* Envia email com log de erro */
      mail.send(result);
    }
  });
};

module.exports = runExec;
