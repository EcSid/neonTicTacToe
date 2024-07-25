import { FC, ReactNode } from 'react'
import './Button.css'

interface ButtonProps {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
	children: ReactNode
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button className='button' onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
