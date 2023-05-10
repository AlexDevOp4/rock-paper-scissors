const getComputerChoice = () => {
	const computerChoice = ['rock', 'paper', 'scissors'];

	const randomChoice =
		computerChoice[Math.floor(Math.random() * computerChoice.length)];

	return randomChoice;
};

const playGame = (playerSelection, computerSelection) => {
	let computersScore = $('#computer-score').html();
	let playersScore = $('#player-score').html();

	// 4. Display the running score, and announce a winner of the game once one player reaches 5 points.
	if (computersScore === '5') {
		alert('Game Over! Computer Won!');
		location.reload(true);
	}
	if (playersScore === '5') {
		alert('Game Over! You Won!');
		location.reload(true);
	}

	if (playerSelection.toLowerCase() === computerSelection) {
		return $('#results').html('Draw!');
	}

	if (
		playerSelection.toLowerCase() === 'rock' &&
		computerSelection === 'paper'
	) {
		$('#computer-score').html(function (i, val) {
			return +val + 1;
		});
		return $('#results').html('You lose!');
	}

	if (
		playerSelection.toLowerCase() === 'paper' &&
		computerSelection === 'scissors'
	) {
		$('#computer-score').html(function (i, val) {
			return +val + 1;
		});
		return $('#results').html('You lose!');
	}

	if (
		playerSelection.toLowerCase() === 'scissors' &&
		computerSelection === 'rock'
	) {
		$('#computer-score').html(function (i, val) {
			return +val + 1;
		});
		return $('#results').html('You lose!');
	}

	$('#player-score').html(function (i, val) {
		return +val + 1;
	});

	return $('#results').html('You Win!');
};

// 2. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

// 3. Add a div for displaying results and change all of your console.logs into DOM methods

$('#rock').click(function (e) {
	e.preventDefault();
	const playerSelection = $(this).attr('id');
	playGame(playerSelection, getComputerChoice());
});

$('#paper').click(function (e) {
	e.preventDefault();
	const playerSelection = $(this).attr('id');
	playGame(playerSelection, getComputerChoice());
});

$('#scissors').click(function (e) {
	e.preventDefault();
	const playerSelection = $(this).attr('id');
	playGame(playerSelection, getComputerChoice());
});
