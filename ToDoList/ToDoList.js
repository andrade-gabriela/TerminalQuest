import inquirer from "inquirer";
import fs from "fs";
import chalk from "chalk";

const questions = [
  {
    type: "list",
    name: "question1",
    message: "O que você quer fazer?",
    choices: ["Adicionar", "Remover"],
  },
];

let rawData = fs.readFileSync("List.json");
let Data = JSON.parse(rawData);

inquirer.prompt(questions).then((answer) => {
  if (answer.question1 == "Adicionar") {
    console.log("Você vai adicionar");
    console.log(Data);
  }
});
