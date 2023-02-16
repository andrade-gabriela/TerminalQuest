import inquirer from "inquirer";
import fs from "fs";
import chalk from "chalk";
import { AddItem } from "./utils/Add.js";

const questions = [
  {
    type: "list",
    name: "question1",
    message: "O que você quer fazer?",
    choices: ["Adicionar", "Listar"],
  },
];

let rawData = fs.readFileSync("List.json");
let Data = JSON.parse(rawData);

inquirer.prompt(questions).then((answer) => {
  if (answer.question1 == "Adicionar") {
    console.log("Você vai adicionar");
    getTask();
  } else if (answer.question1 == "Listar") {
    // console.log("Esta função ainda está sendo implementada..");
    Data["Tasks"].forEach((element) => {
      console.log("* " + element);
    });
  }
});

function getTask() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "task",
        message: "Insira sua tarefa",
      },
    ])
    .then((answer) => {
      AddItem(answer.task);
    });
}
