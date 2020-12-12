const runExec = require("./lib/callExec");
const scheduler = require("./lib/scheduler");
const { schedule1, schedule2 } = require("./config/schedule");

const programToExec = "C:/Progress/OpenEdge/bin/prowin.exe";
/* const arguments = [
  "-basekey",
  "INI",
  "-ininame",
  "C:/progress/progress.ini",
  "-pf",
  "C:/progress/sports.pf",
  "-b",
  "-p",
  "c:/temp/task.p",
  "-ct",
  "5",
]; */

const task = (taskName, program, args) => {
  console.log(`${new Date()} Tarefa ${taskName} iniciada`);
  runExec(program, args);
};

scheduler(schedule1, () =>
  task("task", programToExec, [
    "-basekey",
    "INI",
    "-ininame",
    "C:/progress/progress.ini",
    "-pf",
    "C:/progress/sports.pf",
    "-b",
    "-p",
    "c:/temp/task.p",
    "-ct",
    "5",
  ])
);

scheduler(schedule2, () =>
  task("Task 1", programToExec, [
    "-basekey",
    "INI",
    "-ininame",
    "C:/progress/progress.ini",
    "-pf",
    "C:/progress/sports.pf",
    "-b",
    "-p",
    "c:/temp/task2.p",
    "-ct",
    "5",
  ])
);
