function superbowlWin(arr) {
    let winningRecord = arr.find(arr => arr.result === 'W');
    if (winningRecord) {
        return winningRecord.year;
    }
}



