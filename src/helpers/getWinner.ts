export function getWinner(field: string[][]) {
	let winner: string = ''
	let typeOfWin: string = ''

	const checkRows = (fieldByRows: string[][]) => {
		fieldByRows.forEach((row, indexOfRow) => {
			let countX = 0
			let countO = 0
			row.forEach((element, ind: number) => {
				element === 'cross'
					? countX++
					: element === 'zero'
					? countO++
					: undefined

				if (countX === 3) {
					winner = 'X'
					typeOfWin = 'row' + (indexOfRow + 1)
					return
				}

				if (countO === 3) {
					winner = 'O'
					typeOfWin = 'row' + (indexOfRow + 1)
					return
				}

				if (ind === 2) {
					countX = 0
					countO = 0
				}
			})
		})
	}

	const checkColumns = (fieldByRows: string[][]) => {
		const fieldByColumns: string[][] = [[], [], []]

		fieldByRows.forEach((row, indexOfRow) => {
			row.forEach((el, elIndex) => {
				if (elIndex === 0) fieldByColumns[0][indexOfRow] = el
				if (elIndex === 1) fieldByColumns[1][indexOfRow] = el
				if (elIndex === 2) fieldByColumns[2][indexOfRow] = el
			})
		})

		fieldByColumns.forEach((column, indexOfColumn) => {
			let countX = 0
			let countO = 0
			column.forEach((element, ind: number) => {
				element === 'cross'
					? countX++
					: element === 'zero'
					? countO++
					: undefined

				if (countX === 3) {
					winner = 'X'
					typeOfWin = 'column' + (indexOfColumn + 1)
				}

				if (countO === 3) {
					winner = 'O'
					typeOfWin = 'column' + (indexOfColumn + 1)
				}

				if (ind === 2) {
					countX = 0
					countO = 0
				}
			})
		})
	}

	const checkDiagonals = (fieldByRows: string[][]) => {
		let firstDiagonalX = 0
		let firstDiagonalO = 0
		let secondDiagonalX = 0
		let secondDiagonalO = 0

		if (fieldByRows[0][0] === 'cross') firstDiagonalX++
		if (fieldByRows[1][1] === 'cross') firstDiagonalX++
		if (fieldByRows[2][2] === 'cross') firstDiagonalX++

		if (fieldByRows[0][0] === 'zero') firstDiagonalO++
		if (fieldByRows[1][1] === 'zero') firstDiagonalO++
		if (fieldByRows[2][2] === 'zero') firstDiagonalO++

		if (fieldByRows[0][2] === 'cross') secondDiagonalX++
		if (fieldByRows[1][1] === 'cross') secondDiagonalX++
		if (fieldByRows[2][0] === 'cross') secondDiagonalX++

		if (fieldByRows[0][2] === 'zero') secondDiagonalO++
		if (fieldByRows[1][1] === 'zero') secondDiagonalO++
		if (fieldByRows[2][0] === 'zero') secondDiagonalO++

		if (secondDiagonalX === 3) {
			winner = 'X'
			typeOfWin = 'secondDiagonal'
		}
		if (secondDiagonalO === 3) {
			winner = 'O'
			typeOfWin = 'secondDiagonal'
		}

		if (firstDiagonalX === 3) {
			winner = 'X'
			typeOfWin = 'firstDiagonal'
		}
		if (firstDiagonalO === 3) {
			winner = 'O'
			typeOfWin = 'firstDiagonal'
		}
	}

	const checkOnTie = (fieldByRows: string[][]) => {
		let notEmptyFields = 0
		fieldByRows.forEach(row => {
			row.forEach(el => {
				if (el === 'cross' || el === 'zero') notEmptyFields++
			})
		})

		if (notEmptyFields === 9) winner = 'tie'
	}

	checkRows(field)
	if (winner) return [winner, typeOfWin]

	checkColumns(field)
	if (winner) return [winner, typeOfWin]

	checkDiagonals(field)
	if (winner) return [winner, typeOfWin]

	checkOnTie(field)
	return [winner, typeOfWin]
}
