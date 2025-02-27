let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user");
const compscorepara = document.querySelector("#comp");

const drowGame = () => {
    msg.innerText = "Game was Draw. play again.";
    msg.style.background = "greenyellow";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win Game !! Your ${userchoice} beats ${compchoice}`;
        msg.style.background = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lose Game !! ${compchoice} beats your ${userchoice}`;
        msg.style.background = "red";
    }
}

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice = ", compchoice);

    if (userchoice === compchoice){
        //drow Game 
        drowGame();
    } else {
        let userwin = true;
        if (userchoice === "rock"){
            // paper , scissors
            userwin = compchoice === "paper" ? false : true ;
        } else if(userchoice === "paper"){
            // scissors, rock
            userwin = compchoice === "scissors" ? false : true ;
        } else {
            // rock , paper
            userwin = compchoice === "rock" ? false : true ;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});