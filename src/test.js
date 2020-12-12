/* const fs = require("fs");

const log = `${new Date()} Ocorreu um erro com o cliente \n`;

//fs.createWriteStream("c:/temp/logs.txt", { autoClose: true });

fs.appendFile("c:/temp/logs.txt", log, { flag: "a" }, (error) => {
  if (error) console.log(error);
  console.log("Arquivo salvo");
}); */

const arguments = [
  "-pf",
  "C:/progress/sports.pf",
  "-b",
  "-p",
  "c:/temp/task.p",
  "-ct",
  "5",
];

arguments.splice(4, 1, "task2");
console.log(arguments.splice(4, 1, "task2"));
console.log(arguments);
