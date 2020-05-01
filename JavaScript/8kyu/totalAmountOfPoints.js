function points(games) {
    let points = 0;

    games.forEach(game => {
        const gameResult = game.split(":");

        if (gameResult[0] > gameResult[1]) {
            points += 3;
        } else if (gameResult[0] === gameResult[1]) {
            points += 1;
        }
    });
    return points;
}