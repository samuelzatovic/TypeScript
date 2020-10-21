function rps(player1:string, player2:string):string
{
    if (player1 == player2)
    {
            return "TIE"
    }
        if (player1 == "rock" && (player2) == "paper")
            return "PLAYER 2 WINS"
        if (player1 == "rock" && player2 == "scissors")
            return "PLAYER 1 WINS"
        if (player1 == "paper" && player2 == "rock")
            return "PLAYER 1 WINS"
        if (player1 == "paper" && player2 == "scissors")
            return "PLAYER 2 WINS"
        if (player1 == "scissors" && player2 == "rock")
            return "PLAYER 2 WINS"
        if (player1 == "scissors" && player2 == "paper")
            return "PLAYER 1 WINS"
        return "INVALID INPUT"
}
console.log(rps("rock", "scissors"))