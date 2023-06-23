// mapeamento
const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

//variavel com a função, mapeamento da escolha humana
const playHuman = (humanChoice) => {
  //inicio do jogo
  playThegame(humanChoice, playMachine());
  // quando humano fizer a escolha, a maquina vai fazer a dela atraves da varialvel randon
};

// variavel com a função, mapeamento da escolha maquina
const playMachine = () => {
  //variavel das possiveis escolha da maquina
  const choices = ["rock", "papper", "scissors"];
  // varialvel da escolha aleatoria da maquina
  const randonNumber = Math.floor(Math.random() * 3);
  // retorno da escolha da maquina
  return choices[randonNumber];
};

// varialvel com a função, para dar inicio do jogo
const playThegame = (human, machine) => {
  /*console.log("Humano: " + human + " Maquina: " + machine);*/

  // condição para o resultado das escolhas
  if (human === machine) {
    result.innerHTML = "Empatou!😒";
  } else if (
    (human === "papper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "papper")
  ) {
    humanScoreNumber++; //soma de mais um quando ganhar
    humanScore.innerHTML = humanScoreNumber; // mapeamento do let
    result.innerHTML = "Voçê ganhou!😀";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Voçê perdeu!😢";
  }
};
