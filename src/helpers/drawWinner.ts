export function drawWinner(
	winner: string,
	typeOfWin: string,
	fatherBlock: Element | null
) {
	if (winner === 'tie' || !fatherBlock) return

	const winnerWithWord = winner === 'X' ? 'cross' : 'zero'

	if (typeOfWin === 'firstDiagonal') {
		fatherBlock?.children[0 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[0 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[4 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[4 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[8 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[8 + 1].classList.add(winnerWithWord + 'Win')
	} else if (typeOfWin === 'secondDiagonal') {
		fatherBlock?.children[2 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[2 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[4 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[4 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[6 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[6 + 1].classList.add(winnerWithWord + 'Win')
	} else if (typeOfWin === 'row1') {
		fatherBlock?.children[0 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[0 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[1 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[1 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[2 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[2 + 1].classList.add(winnerWithWord + 'Win')
	} else if (typeOfWin === 'row2') {
		fatherBlock?.children[3 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[3 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[4 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[4 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[5 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[5 + 1].classList.add(winnerWithWord + 'Win')
	} else if (typeOfWin === 'row3') {
		fatherBlock?.children[6 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[6 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[7 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[7 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[8 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[8 + 1].classList.add(winnerWithWord + 'Win')
	} else if (typeOfWin === 'column1') {
		fatherBlock?.children[0 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[0 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[3 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[3 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[6 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[6 + 1].classList.add(winnerWithWord + 'Win')
	} else if (typeOfWin === 'column2') {
		fatherBlock?.children[1 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[1 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[4 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[4 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[7 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[7 + 1].classList.add(winnerWithWord + 'Win')
	} else if (typeOfWin === 'column3') {
		fatherBlock?.children[2 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[2 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[5 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[5 + 1].classList.add(winnerWithWord + 'Win')
		fatherBlock?.children[8 + 1].classList.remove(winnerWithWord)
		fatherBlock?.children[8 + 1].classList.add(winnerWithWord + 'Win')
	}

	return
}
