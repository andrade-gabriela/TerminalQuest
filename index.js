//ecmascript
import inquirer from "inquirer";
import chalk from "chalk";

//console.log(chalk.bgGray.magenta("Oi!"))

const questions = [
  {
    type: "number",
    name: "question1",
    message: "Quanto é 7 + 5?",
  },
];

function game() {
  inquirer.prompt(questions).then((answers) => {
    verify(answers);
  });
}

function verify(answer) {
  if (answer.question1 == 12) {
    console.log(chalk.green("Você acertou!"));
  } else {
    console.log(chalk.red("Errou burro!"));
    game()
  }
}

game()
