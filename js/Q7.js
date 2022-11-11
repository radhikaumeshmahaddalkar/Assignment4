function startGame()
{
    console.log("Game Started .....")
    const location = [0,1,1,0,1]

    let guesscount = 0
    let hitcount = 0

    while(hitcount != 3)
    {
        // Accept choice from user

        const choice = Number(prompt("Enter a number (1 - 5)"))
        guesscount ++;    //.. guesscount is incremented when user enters a valid choice.

        // Alert for invalid Number.

        if(choice < 0 || choice > 5)
        {
            alert('Enter a Valid Choice !')
            continue
        }

        // check if the value in array matches the choice from user.

        switch(location[choice - 1])
        {
            case 1: alert("You have hit the battleship !!")
            hitcount ++
            location[choice - 1] = 2
            break

            case 2: alert('You have already hit this battleship ')
            break

            default: alert('You missed the battleship !')
        }
    }
    alert('Total Guesses ' + guesscount, )
}