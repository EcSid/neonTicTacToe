import { FC } from 'react'
import './Field.css'

interface FieldProps {
	id: string
}

const Field: FC<FieldProps> = ({ id }) => {
	return (
		<div className='block neonWhiteBlock' id={id}>
			{document.getElementById(id)?.classList.contains('zero') ? (
				<div id='zero'></div>
			) : document.getElementById(id)?.classList.contains('cross') ? (
				<div id='cross'>&#215;</div>
			) : undefined}

			{document.getElementById(id)?.classList.contains('zeroWin') ? (
				<div className='zeroWhenWin'></div>
			) : document.getElementById(id)?.classList.contains('crossWin') ? (
				<div className='crossWhenWin'>&#215;</div>
			) : undefined}
		</div>
	)
}

export default Field
