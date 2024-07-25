import { useSelector } from 'react-redux'
import Field from '../components/Field/Field'
import './App.css'
import { IRootReducer } from '../store/store'
import { useDispatch } from 'react-redux'
import { gameInfoSlice } from '../store/reducers/gameInfoReducer'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { fromStringToNumber } from '../helpers/fromStringToNumber'
import { positionFromId } from '../helpers/positionFromId'
import { getWinner } from '../helpers/getWinner'
import Button from '../components/Button/Button'
import { drawWinner } from '../helpers/drawWinner'

const App = () => {
	const { turn, field } = useSelector((state: IRootReducer) => state.gameInfo)
	const { setNewTurn, setNewField } = gameInfoSlice.actions
	const dispatch = useDispatch()
	const [stateToRender, setState] = useState<boolean>(false)

	const clickHandler = useCallback(
		(event: Event) => {
			const target = event.target as HTMLElement
			const targetClosest: HTMLElement | null = target.closest('.block')
			if (targetClosest && !targetClosest.classList.contains('wasFilled')) {
				targetClosest?.classList.add(turn)
				targetClosest?.classList.add('wasFilled')
				dispatch(
					setNewField({
						name: turn,
						position: positionFromId(
							Number(fromStringToNumber(targetClosest.id))
						),
					})
				)
				dispatch(setNewTurn())
			}
		},
		[turn]
	)
	const [winner, typeOfWin] = useMemo(() => getWinner(field), [field])

	useEffect(() => {
		const fatherBlock = document.querySelector('.father-block')
		if (winner) {
			drawWinner(winner, typeOfWin, fatherBlock)
			setState(!stateToRender)
			return
		}
		fatherBlock?.removeEventListener('click', clickHandler)
		fatherBlock?.addEventListener('click', clickHandler)
		return () => {
			fatherBlock?.removeEventListener('click', clickHandler)
		}
	}, [turn])

	useEffect(() => {
		if (window.innerWidth < 570) alert('Во избежание багов, переверните устройство в горизонтальное положение')
 }, [])

	return (
		<div className='father-block'>
			<Button onClick={() => window.location.reload()}>Очистить поле</Button>
			<Field id='first' />
			<Field id='second' />
			<Field id='third' />
			<Field id='four' />
			<Field id='five' />
			<Field id='six' />
			<Field id='seven' />
			<Field id='eight' />
			<Field id='nine' />

			{winner === 'X' ? (
				<p className='turn red neonRedText'>Крестики победили</p>
			) : winner === 'O' ? (
				<p className='turn blue neonBlueText'>Нолики победили</p>
			) : winner === 'tie' ? (
				<p className='turn neonWhiteText'>Ничья</p>
			) : undefined}

			{!winner && (
				<p className='turn'>
					<span className='neonWhiteText'>Сейчас ходят </span>
					{turn === 'cross' ? (
						<span className='red neonRedText'>крестики</span>
					) : (
						<span className='blue neonBlueText'>нолики</span>
					)}
				</p>
			)}
		</div>
	)
}

export default App
