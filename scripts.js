function showGame(index) {
    const games = document.querySelectorAll('.game');
    games.forEach(game => game.classList.add('hidden'));

    const selectedGame = document.getElementById(`game-${index}`);
    if (selectedGame) {
        selectedGame.classList.remove('hidden');
    }

    const videos = [
        'https://www.youtube.com/embed/3nD3sYWy250', // Outlast Trials
        'https://www.youtube.com/embed/thKNo9ZT0PI', // Mortal Kombat
        'https://www.youtube.com/embed/hOpPwTapTfI', // Crime Boss: Rockay City
        'https://www.youtube.com/embed/91w-eRbS6g0', // Little Nightmares II
        'https://www.youtube.com/embed/uubDhQZ-U64', // Garry's Mod
        'https://www.youtube.com/embed/MKDQCmhK2Ws', // Ready or Not
    ];

    const videoFrame = document.getElementById(`video-${index}`);
    if (videoFrame) {
        videoFrame.src = videos[index];
    }

    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => item.classList.remove('active'));
    const selectedListItem = document.getElementById(`option-${index}`);
    if (selectedListItem) {
        selectedListItem.classList.add('active');
    }
}
