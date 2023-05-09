const getComputerChoice = () => {
	const computerChoice = ['rock', 'paper', 'scissors'];

	const randomChoice =
		computerChoice[Math.floor(Math.random() * computerChoice.length)];

	return randomChoice;
};

getComputerChoice();

const playGame = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) {
		return 'Draw!';
	}

	if (playerSelection === 'rock' && computerSelection === 'paper') {
		return 'You lose!';
	}

	if (playerSelection === 'paper' && computerSelection === 'scissors') {
		return 'You lose!';
	}

	if (playerSelection === 'scissors' && computerSelection === 'rock') {
		return 'You lose!';
	}

	return 'You win!';
};

const game = () => {
	let playerSelection;

	while (
		playerSelection !== 'rock' &&
		playerSelection !== 'paper' &&
		playerSelection !== 'scissors'
	) {
		playerSelection = prompt('Pick Rock, Paper, or Scissors').toLowerCase();
	}

	for (let i = 0; i < 5; i++) {
		playerSelection = prompt('Pick Rock, Paper, or Scissors').toLowerCase();
		const computerSelection = getComputerChoice();
		console.log(playGame(playerSelection.toLowerCase(), computerSelection));
	}
};

game();
