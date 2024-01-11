function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];


    let result;


    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }


    displayResult(result, playerChoice, computerChoice);
}


function displayResult(result, playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Your Choice: ${playerChoice}</p>
        <p>Computer's Choice: ${computerChoice}</p>
        <p>${result}</p>
    `;
}