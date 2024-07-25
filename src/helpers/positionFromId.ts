export function positionFromId(id: number): number[] {
	if (id <= 3) {
		return [0, id - 1]
	}
	if (id <= 6) {
		return [1, id - 4]
	}
	if (id <= 9) {
		return [2, id - 7]
	}
	return []
}
