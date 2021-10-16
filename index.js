var rs = require("readline-sync")
const chalk = require("chalk")
let log = console.log

let blueBright = chalk.bold.blueBright
let green = chalk.bold.green
let red = chalk.bold.red
let cyan = chalk.bold.cyan
let yellow = chalk.bold.yellow
let title = chalk.black.bold.bgYellow
let inverse = chalk.inverse

var score = 0;
var highscore = 15;

let que = [
  {
    no: '1',
    question: `Main circuit  board in a computer is `,
    A: 'Decoder',
    B: 'highlight',
    C: 'Select ',
    D: 'Motherboard',
    answer: 'D',
  },
  {
    no: '2',
    question: `Internet explorer is a ?`,
    A: 'Any person browsing the net ',
    B: 'Web browser',
    C: 'Graphing package ',
    D:'News Reader ',
    answer: 'B',
  },
  {
    no: '3',
    question: `Which of the following operating system is product by IBM ?`,
    A: 'Os -2',
    B: 'Windows',
    C: 'Dos',
    D: 'Unix ',
    answer: 'A',
  },
  {
    no: '4',
    question: 'ISP stands for ',
    A: 'Internet survey period',
    B: 'Integrated service provider ',
    C: 'Internet Security Protocol',
    D: 'Internet service Provider' ,
    answer: 'D',
  },
  {
    no: '5',
    question: `Where are the contents of your computers hard drive indexed `,
    A: 'Yahooo',
    B: 'Google',
    C: 'MSN',
    D: 'Non of the above',
    answer: 'D ',
  },
  
];

log(cyan("Welcome to the..."), title("Computer Science...\n"))
let user = rs.question("Please Enter Your Name : ")
log(yellow(`Hello ${user}`))

log(blueBright("\nA Quiz from Computer Science ..."))
log("\nThere will be Five(5) questions.....")
log(yellow("+5"), "Point For Correct Answer.....", blueBright("-2"), "Point For Wrong Answer....\n")

for (q of que) {
  log(yellow(q.no + ': ' + q.question));
  log(cyan('A: ' + q.A));
  log(cyan('B: ' + q.B));
  log(cyan('C: ' + q.C));
  log(cyan('D: ' + q.D));

  //input answer
  var ans = rs.question('Answer : ');

  //compare 
  if(ans.toLowerCase() === q.answer.toLowerCase()) {
    log(green("\n+5"), "Your Answer Is :- ", green("correct"), ".");
    score += 5;
    log("Your Current Score Is :-", green(score), "\n");
  } else {
    log(red("-2"), "Your answer Is :-", red("incorrect"), ".");
    score -= 2;
    log("Your Current Score Is :-", red(score), "\n");
  }
}


if (score > highscore) {
  log(green("Congratulation..!You Are Winner....."))
} else {
  log(red("You  Loose  The Quiz.....!\n"))
}

log(blueBright("Scoreboard :="))
log('Hello ' + green(user) + ' Your Final Resuly Is :- ' + score)