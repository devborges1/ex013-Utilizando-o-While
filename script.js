let warpCount = 0;
let chosenOption = "";

let spaceship = prompt("Digite o nome da nave")

chosenOption = prompt("Dejesa entrar em dobra espacial?\n1 - Sim \n2 - Não");

while(chosenOption == 1){
    warpCount += 1;
    chosenOption = prompt("Dejesa realizar a próxima dobra espacial?\n1 - Sim \n2 - Não");
}

alert(`${spaceship} entrou em ${warpCount} dobras espaciais(s)`);