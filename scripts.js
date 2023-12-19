function showGame(index) {
    const games = document.querySelectorAll('.game');
    games.forEach(game => {
        game.style.display = 'none';
    });

    const selectedGame = document.getElementById(`game-${index}`);
    if (selectedGame) {
        selectedGame.style.display = 'block';
    }

    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => item.classList.remove('active'));
    const selectedListItem = document.getElementById(`option-${index}`);
    if (selectedListItem) {
        selectedListItem.classList.add('active');
    }
}

