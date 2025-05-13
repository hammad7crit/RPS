let hands = document.querySelectorAll(".hand");
let player = document.querySelector(".counter_player");
let bot = document.querySelector(".counter_bot");
let newGame = document.querySelector(".new-btn");

let player_turn = true;
const choices = ["rock","paper","scissors"];

let randomIndex1;
let randomIndex2;
let randomWord1;
let randomWord2;

resetGame();

// randomIndex1 = Math.floor(Math.random () * choices.length - 1);
//             randomWord1 = choices[randomIndex1];
//             player_turn = false;

hands.forEach((hand) => {
    hand.addEventListener("click", () => {
        if (player_turn) {
            randomIndex1 = Math.floor(Math.random() * choices.length);
            randomWord1 = choices[randomIndex1];
            player_turn = false;
        } else {
            randomIndex2 = Math.floor(Math.random() * choices.length);
            randomWord2 = choices[randomIndex2];
            player_turn = true;
        }

        if (randomWord1 !== "" && randomWord2 !== "") {
            if (randomWord1 === randomWord2) {
                console.log("Draw");
            } else if (
                (randomWord1 === "rock" && randomWord2 === "scissors") ||
                (randomWord1 === "scissors" && randomWord2 === "paper") ||
                (randomWord1 === "paper" && randomWord2 === "rock")
            ) {
                let player_wins = parseInt(player.innerText);
                player_wins++;
                player.innerText = player_wins;
            } else {
                let bot_wins = parseInt(bot.innerText);
                bot_wins++;
                bot.innerText = bot_wins;
            }
        }
    });
});

function resetGame() {
    newGame.addEventListener("click", () => {
        player_turn = true;
        player.innerText = 0;
        bot.innerText = 0;
    })
}